"use client";

import { useEffect, useState } from "react";
import {
  CircleMarker,
  MapContainer,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
  ZoomControl,
} from "react-leaflet";
import type { LatLngExpression, LeafletMouseEvent } from "leaflet";
import { casablancaView, type MapFocus } from "@/lib/coverage";
import "leaflet/dist/leaflet.css";

const placeStyle = {
  color: "#ffffff",
  weight: 2,
  fillColor: "#a63c06",
  fillOpacity: 1,
};

const userStyle = {
  color: "#ffffff",
  weight: 2,
  fillColor: "#0d6b47",
  fillOpacity: 1,
};

type PickedPlace = {
  lat: number;
  lng: number;
  label: string;
};

function placeName(data: { name?: string; display_name?: string }, fallback: string) {
  if (typeof data.name === "string" && data.name.trim()) return data.name.trim();
  if (typeof data.display_name === "string" && data.display_name.trim()) {
    return data.display_name.split(",")[0]?.trim() || fallback;
  }
  return fallback;
}

function MapController({ focus }: { focus: MapFocus | null }) {
  const map = useMap();
  const [picked, setPicked] = useState<PickedPlace | null>(null);
  const [user, setUser] = useState<PickedPlace | null>(null);
  const [locateMessage, setLocateMessage] = useState<string | null>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => map.invalidateSize());
    return () => window.cancelAnimationFrame(frame);
  }, [map]);

  useEffect(() => {
    if (!focus) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target: LatLngExpression = [focus.lat, focus.lng];
    if (reduceMotion) map.setView(target, focus.zoom);
    else map.flyTo(target, focus.zoom, { duration: 1.05 });
  }, [focus, map]);

  useMapEvents({
    click(event: LeafletMouseEvent) {
      const { lat, lng } = event.latlng;
      const fallback = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
      setPicked({ lat, lng, label: "Lieu sélectionné" });

      const params = new URLSearchParams({
        format: "jsonv2",
        lat: String(lat),
        lon: String(lng),
        zoom: "17",
      });
      fetch(`https://nominatim.openstreetmap.org/reverse?${params}`, {
        headers: { "Accept-Language": "fr" },
      })
        .then((response) => (response.ok ? response.json() : null))
        .then((data) => {
          if (!data) return;
          setPicked({ lat, lng, label: placeName(data, fallback) });
        })
        .catch(() => setPicked({ lat, lng, label: fallback }));
    },
    locationfound(event) {
      setUser({
        lat: event.latlng.lat,
        lng: event.latlng.lng,
        label: "Votre position",
      });
      setLocateMessage(null);
    },
    locationerror() {
      setLocateMessage("Position indisponible");
    },
  });

  return (
    <>
      {focus && (
        <CircleMarker center={[focus.lat, focus.lng]} radius={9} pathOptions={placeStyle}>
          <Popup>{focus.label}</Popup>
        </CircleMarker>
      )}
      {picked && (
        <CircleMarker center={[picked.lat, picked.lng]} radius={7} pathOptions={placeStyle}>
          <Popup>{picked.label}</Popup>
        </CircleMarker>
      )}
      {user && (
        <CircleMarker center={[user.lat, user.lng]} radius={8} pathOptions={userStyle}>
          <Popup>{user.label}</Popup>
        </CircleMarker>
      )}
      <div className="pointer-events-none absolute top-30 right-2.5 z-[1000] flex flex-col items-end gap-2">
        <button
          type="button"
          onClick={() => {
            setLocateMessage(null);
            map.locate({ setView: true, maxZoom: 16 });
          }}
          onPointerDown={(event) => event.stopPropagation()}
          onMouseDown={(event) => event.stopPropagation()}
          onDoubleClick={(event) => event.stopPropagation()}
          className="pointer-events-auto flex h-11 items-center rounded-xl bg-white px-3 text-xs font-semibold text-ink shadow-[0_8px_24px_rgb(22_27_46/0.16)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-700"
        >
          Ma position
        </button>
        {locateMessage && (
          <p className="pointer-events-none rounded-lg bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-ink shadow">
            {locateMessage}
          </p>
        )}
      </div>
    </>
  );
}

export function CasablancaMap({ focus }: { focus: MapFocus | null }) {
  return (
    <MapContainer
      center={[casablancaView.lat, casablancaView.lng]}
      zoom={casablancaView.zoom}
      minZoom={10}
      maxZoom={18}
      zoomControl={false}
      scrollWheelZoom
      className="h-full w-full"
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="topright" zoomInTitle="Zoom avant" zoomOutTitle="Zoom arrière" />
      <MapController focus={focus} />
    </MapContainer>
  );
}

"use client";

import dynamic from "next/dynamic";
import { useState, type FormEvent } from "react";
import { useI18n } from "@/i18n/LanguageProvider";
import { neighborhoods, type MapFocus } from "@/lib/coverage";

function MapLoading() {
  const { t } = useI18n();
  return (
    <div className="grid h-full place-items-center bg-[#e7e4da] text-sm font-semibold text-ink">
      {t("coverage.loading")}
    </div>
  );
}

const CasablancaMap = dynamic(
  () => import("@/components/home/CasablancaMap").then((mod) => mod.CasablancaMap),
  {
    ssr: false,
    loading: () => <MapLoading />,
  },
);

const mapFrame =
  "relative isolate z-0 mt-8 h-[350px] overflow-hidden rounded-[24px] bg-[#e7e4da] sm:mt-10 sm:h-[440px] lg:h-[520px]";

async function searchCasablanca(query: string, language: string): Promise<MapFocus | null> {
  const params = new URLSearchParams({
    format: "jsonv2",
    limit: "1",
    countrycodes: "ma",
    viewbox: "-7.85,33.72,-7.30,33.40",
    bounded: "1",
    q: query,
  });
  const response = await fetch(`https://nominatim.openstreetmap.org/search?${params}`, {
    headers: { "Accept-Language": language },
  });
  if (!response.ok) return null;
  const results: Array<{ lat: string; lon: string; name?: string; display_name?: string }> =
    await response.json();
  const hit = results[0];
  if (!hit) return null;
  const label =
    (hit.name && hit.name.trim()) || hit.display_name?.split(",")[0]?.trim() || query;
  return { lat: Number(hit.lat), lng: Number(hit.lon), label, zoom: 15 };
}

export function CasablancaCoverage() {
  const { language, t } = useI18n();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [focus, setFocus] = useState<MapFocus | null>(null);
  const [query, setQuery] = useState("");
  const [note, setNote] = useState<string | null>(null);
  const [searching, setSearching] = useState(false);

  async function onSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    setSearching(true);
    setNote(null);
    try {
      const result = await searchCasablanca(trimmed, language);
      if (!result || Number.isNaN(result.lat) || Number.isNaN(result.lng)) {
        setNote(t("coverage.notFound"));
        return;
      }
      setActiveId(null);
      setFocus(result);
      setNote(result.label);
    } catch {
      setNote(t("coverage.unavailable"));
    } finally {
      setSearching(false);
    }
  }

  return (
    <div className="mt-10 rounded-3xl bg-white p-5 shadow-[0_4px_24px_rgb(22_27_46/0.04)] sm:p-10">
      <ul aria-label={t("coverage.list")} className="flex flex-wrap justify-center gap-x-2 gap-y-2.5 sm:gap-y-3">
        {neighborhoods.map((place) => {
          const selected = activeId === place.id;
          const label = t(`places.${place.id}`);
          return (
            <li key={place.id}>
              <button
                type="button"
                aria-pressed={selected}
                onClick={() => {
                  setActiveId(place.id);
                  setFocus({ ...place, label });
                  setNote(null);
                }}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-700 ${
                  selected ? "bg-forest-700 text-white" : "bg-lavender text-ink hover:bg-periwinkle"
                }`}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>

      <form onSubmit={onSearch} className="mx-auto mt-6 flex max-w-xl flex-col gap-2 sm:flex-row">
        <label className="sr-only" htmlFor="casablanca-search">
          {t("coverage.searchLabel")}
        </label>
        <input
          id="casablanca-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={t("coverage.placeholder")}
          className="h-12 w-full rounded-full bg-lavender px-4 text-sm text-ink outline-none focus-visible:ring-2 focus-visible:ring-rust-700/40"
        />
        <button
          type="submit"
          disabled={searching}
          className="h-12 shrink-0 rounded-full bg-rust-700 px-5 text-sm font-semibold text-white transition-colors hover:bg-rust-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-700 disabled:opacity-70"
        >
          {searching ? t("coverage.searching") : t("coverage.search")}
        </button>
      </form>
      {note && <p className="mt-2 text-center text-xs font-semibold text-muted">{note}</p>}

      <div className={mapFrame}>
        <CasablancaMap focus={focus} />
      </div>
    </div>
  );
}

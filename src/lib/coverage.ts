export type MapFocus = {
  lat: number;
  lng: number;
  label: string;
  zoom: number;
};

export type Neighborhood = MapFocus & {
  id: string;
  name: string;
};

/** OpenStreetMap Nominatim centers for Casablanca neighborhoods. */
export const neighborhoods: Neighborhood[] = [
  { id: "maarif", name: "Maârif", label: "Maârif", lat: 33.5708072, lng: -7.6282984, zoom: 14 },
  { id: "gauthier", name: "Gauthier", label: "Gauthier", lat: 33.5898333, lng: -7.6306305, zoom: 15 },
  {
    id: "cfc",
    name: "Casablanca Finance City (CFC)",
    label: "Casablanca Finance City",
    lat: 33.5631545,
    lng: -7.6604232,
    zoom: 15,
  },
  { id: "ain-diab", name: "Aïn Diab", label: "Aïn Diab", lat: 33.5811626, lng: -7.6843877, zoom: 15 },
  {
    id: "sidi-maarouf",
    name: "Sidi Maârouf",
    label: "Sidi Maârouf",
    lat: 33.5286123,
    lng: -7.646462,
    zoom: 14,
  },
  { id: "bourgogne", name: "Bourgogne", label: "Bourgogne", lat: 33.5985679, lng: -7.6418596, zoom: 15 },
  { id: "racine", name: "Racine", label: "Racine", lat: 33.5896092, lng: -7.6407011, zoom: 15 },
  { id: "oasis", name: "Oasis", label: "Oasis", lat: 33.5589388, lng: -7.6386245, zoom: 15 },
  { id: "ain-sebaa", name: "Aïn Sebaâ", label: "Aïn Sebaâ", lat: 33.6059943, lng: -7.5387936, zoom: 14 },
  {
    id: "hay-mohammadi",
    name: "Hay Mohammadi",
    label: "Hay Mohammadi",
    lat: 33.5841444,
    lng: -7.5569559,
    zoom: 15,
  },
  {
    id: "derb-ghallef",
    name: "Derb Ghallef",
    label: "Derb Ghallef",
    lat: 33.5736066,
    lng: -7.6296039,
    zoom: 16,
  },
  {
    id: "bouskoura",
    name: "Bouskoura Ville Verte",
    label: "Bouskoura Ville Verte",
    lat: 33.474702,
    lng: -7.6009654,
    zoom: 14,
  },
];

export const casablancaView = {
  lat: 33.57,
  lng: -7.61,
  zoom: 12,
} as const;

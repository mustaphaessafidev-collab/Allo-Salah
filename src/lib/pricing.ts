export const MIN_COURSE_PRICE = 20;
export const MAX_COURSE_PRICE = 150;

export type Zone = {
  id: string;
  number: 1 | 2 | 3;
  name: string;
  areas: string;
  shortLabel: string;
  /** Published starting rate shown on the zone card. */
  startingPrice: number;
  duration: string;
};

export const zones: Zone[] = [
  {
    id: "zone-1",
    number: 1,
    name: "Centre & Proximité",
    areas: "Maârif, Racine, Gauthier, Bourgogne, Centre-ville, Hassan II.",
    shortLabel: "Zone 1 — Centre & Proximité",
    startingPrice: 20,
    duration: "15 – 30 min",
  },
  {
    id: "zone-2",
    number: 2,
    name: "Zones Résidentielles & Affaires",
    areas: "Anfa, Aïn Diab, CIL, Oasis, Palmier, Sidi Maârouf, CFC.",
    shortLabel: "Zone 2 — Résidentiel & Affaires",
    startingPrice: 35,
    duration: "25 – 45 min",
  },
  {
    id: "zone-3",
    number: 3,
    name: "Grand Casablanca & Périphérie",
    areas: "Aïn Sebaâ, Bernoussi, Hay Hassani, Bouskoura, Dar Bouazza.",
    shortLabel: "Zone 3 — Grand Casablanca",
    startingPrice: 60,
    duration: "45 – 75 min",
  },
];

/** Base fare for a departure → destination pair. Same-zone trips use the lower intra-zone rate. */
const routePrices: Record<string, number> = {
  "1-1": 20,
  "1-2": 35,
  "2-1": 35,
  "1-3": 60,
  "3-1": 60,
  "2-2": 30,
  "2-3": 50,
  "3-2": 50,
  "3-3": 70,
};

export const deliveryTypes = [
  { id: "documents", label: "Documents", supplement: 0 },
  { id: "colis", label: "Colis", supplement: 5 },
  { id: "achats", label: "Achats", supplement: 10 },
  { id: "courses", label: "Courses", supplement: 10 },
  { id: "express", label: "Livraison express", supplement: 20 },
] as const;

export type DeliveryTypeId = (typeof deliveryTypes)[number]["id"];

export function clampCoursePrice(price: number) {
  if (!Number.isFinite(price) || price < 0) return MIN_COURSE_PRICE;
  return Math.min(Math.max(price, MIN_COURSE_PRICE), MAX_COURSE_PRICE);
}

/** Estimated fare in DH. Always within 20–150, including the course-type supplement. */
export function estimatePrice(fromId: string, toId: string, typeId: string) {
  const from = zones.find((zone) => zone.id === fromId);
  const to = zones.find((zone) => zone.id === toId);
  const type = deliveryTypes.find((item) => item.id === typeId);
  const base =
    from && to ? (routePrices[`${from.number}-${to.number}`] ?? MIN_COURSE_PRICE) : MIN_COURSE_PRICE;
  const supplement = type?.supplement ?? 0;
  return clampCoursePrice(base + supplement);
}

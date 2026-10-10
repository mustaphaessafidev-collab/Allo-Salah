export const siteConfig = {
  name: "Allo Salah",
  whatsappNumber: "212619055414",
  phoneDisplay: "+212 619-055414",
  phoneInternationalDisplay: "+212 619-055414",
  phoneHref: "tel:+212619055414",
  deliveryRequestMessage: "Bonjour Allo Salah, je souhaite demander une livraison.",
} as const;

export const navLinks = [
  { key: "nav.home", id: "accueil" },
  { key: "nav.services", id: "services" },
  { key: "nav.pricing", id: "tarifs" },
  { key: "nav.zones", id: "zones" },
  { key: "nav.about", id: "apropos" },
  { key: "nav.contact", id: "contact" },
] as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

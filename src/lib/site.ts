export const siteConfig = {
  name: "Allo Salah",
  whatsappNumber: "212619055414",
  phoneDisplay: "+212 619-055414",
  phoneInternationalDisplay: "+212 619-055414",
  phoneHref: "tel:+212619055414",
  deliveryRequestMessage: "Bonjour Allo Salah, je souhaite demander une livraison.",
} as const;

export const navLinks = [
  { label: "Accueil", href: "/#accueil" },
  { label: "Services", href: "/#services" },
  { label: "Tarifs", href: "/#tarifs" },
  { label: "Zones", href: "/#zones" },
  { label: "À propos", href: "/#a-propos" },
  { label: "Contact", href: "/#contact" },
] as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

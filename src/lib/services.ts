import colisImage from "@/assets/img salah/klm.jpeg";
import documentsImage from "@/assets/img salah/75.jpeg";
import coursesImage from "@/assets/img salah/food.jpeg";
import urgentImage from "@/assets/img salah/img1.jpeg";

export const servicePages = {
  "livraison-colis": {
    slug: "livraison-colis",
    title: "Livraison de colis",
    description:
      "Expédition sécurisée de vos paquets personnels, ventes e-commerce et retours colis dans tout le Grand Casablanca.",
    detail:
      "Expédition sécurisée de vos paquets personnels, ventes e-commerce et retours colis dans tout le Grand Casablanca.",
    whatsappMessage: "Bonjour Allo Salah, je souhaite demander une livraison de colis.",
    image: colisImage,
    imageAlt: "Colis protégé dans du papier bulle, pris en charge pour une livraison Allo Salah",
    imagePosition: "center",
  },
  documents: {
    slug: "documents",
    title: "Documents",
    description:
      "Remise en main propre de contrats urgents, dossiers administratifs, chèques et plis confidentiels avec accusé immédiat.",
    detail:
      "Remise en main propre de contrats urgents, dossiers administratifs, chèques et plis confidentiels.",
    whatsappMessage: "Bonjour Allo Salah, je souhaite envoyer des documents.",
    image: documentsImage,
    imageAlt: "Remise en main propre d’un pli, à côté du scooter de livraison à Casablanca",
    imagePosition: "center 58%",
  },
  "achats-courses": {
    slug: "achats-courses",
    title: "Achats & courses",
    description:
      "Besoin d’un achat en pharmacie, quincaillerie ou supermarché ? Notre livreur achète pour vous et vous dépose tout au pas de votre porte.",
    detail:
      "Besoin d’un achat en pharmacie, quincaillerie ou supermarché ? Notre livreur achète pour vous et vous livre directement à votre porte.",
    whatsappMessage: "Bonjour Allo Salah, je souhaite demander un service d'achats et courses.",
    image: coursesImage,
    imageAlt: "Course récupérée devant un commerce et portée pour une livraison à Casablanca",
    imagePosition: "center 62%",
  },
  "livraison-urgente": {
    slug: "livraison-urgente",
    title: "Livraison urgente",
    description:
      "Prise en charge prioritaire instantanée. Votre coursier dédié récupère et livre directement votre commande.",
    detail: "Prise en charge prioritaire de votre course avec un service rapide et dédié.",
    whatsappMessage: "Bonjour Allo Salah, je souhaite demander une livraison urgente.",
    image: urgentImage,
    imageAlt: "Scooter Allo Salah avec son caisson de livraison, prêt pour une prise en charge rapide",
    imagePosition: "center",
  },
} as const;

export type ServiceSlug = keyof typeof servicePages;
export type ServicePage = (typeof servicePages)[ServiceSlug];

import Link from "next/link";

type LogoProps = {
  onClick?: () => void;
  showBadge?: boolean;
};

export function Logo({ onClick, showBadge = true }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Allo Salah — Accueil"
      className="inline-flex items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rust-700"
    >
      <svg viewBox="0 0 28 16" className="h-4 w-7" aria-hidden>
        <path d="M2 4h9M0 8h7M3 12h6" stroke="#161b2e" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="14" cy="11.5" r="3" fill="none" stroke="#a63c06" strokeWidth="1.8" />
        <circle cx="24" cy="11.5" r="3" fill="none" stroke="#a63c06" strokeWidth="1.8" />
        <path d="M14 11.5h5l2.5-5H25" fill="none" stroke="#161b2e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-[19px] font-bold tracking-tight whitespace-nowrap text-ink">
        Allo Salah
      </span>
      {showBadge && (
        <span className="hidden rounded-md bg-peach px-1.5 py-0.5 text-[10px] font-bold tracking-wide whitespace-nowrap text-rust-700 uppercase sm:inline">
          Casablanca Express
        </span>
      )}
    </Link>
  );
}

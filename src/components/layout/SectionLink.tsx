"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

export const SECTION_NAVIGATE_EVENT = "section-navigate";

type SectionLinkProps = {
  sectionId: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
  "aria-current"?: "page";
  "aria-label"?: string;
};

function isPlainClick(event: MouseEvent<HTMLAnchorElement>) {
  return event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
}

export function scrollToSection(sectionId: string) {
  const target = document.getElementById(sectionId);
  if (!target) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

export function SectionLink({ sectionId, className, children, onNavigate, ...aria }: SectionLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Link
      href={`/#${sectionId}`}
      className={className}
      onClick={(event) => {
        if (!isPlainClick(event)) return;
        document.body.style.overflow = "";
        onNavigate?.();
        window.dispatchEvent(new CustomEvent(SECTION_NAVIGATE_EVENT, { detail: sectionId }));
        if (pathname !== "/") return;

        event.preventDefault();
        window.requestAnimationFrame(() => {
          if (window.location.hash === `#${sectionId}`) {
            scrollToSection(sectionId);
            return;
          }
          router.push(`/#${sectionId}`);
        });
      }}
      {...aria}
    >
      {children}
    </Link>
  );
}

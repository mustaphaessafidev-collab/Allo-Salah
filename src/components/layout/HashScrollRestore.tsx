"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function alignToHash() {
  const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;

  const margin = Number.parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
  const top = target.getBoundingClientRect().top;
  if (Math.abs(top - margin) <= 32) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

export function HashScrollRestore() {
  const pathname = usePathname();

  useEffect(() => {
    const timer = window.setTimeout(alignToHash, 60);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("popstate", alignToHash);
    return () => window.removeEventListener("popstate", alignToHash);
  }, []);

  return null;
}

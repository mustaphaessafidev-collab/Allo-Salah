import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  eyebrowClass: string;
  title: string;
  children?: ReactNode;
};

export function SectionHeading({ id, eyebrow, eyebrowClass, title, children }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-180 text-center">
      <p
        className={`inline-block rounded-full px-3.5 py-1 text-[11px] font-bold tracking-wide uppercase ${eyebrowClass}`}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-2 text-[2.1rem] leading-tight font-extrabold tracking-tight text-ink sm:text-[2.6rem]"
      >
        {title}
      </h2>
      {children && (
        <p className="mx-auto mt-2 max-w-155 text-base leading-relaxed text-muted sm:text-[17px]">
          {children}
        </p>
      )}
    </div>
  );
}

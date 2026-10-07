import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary";
type Size = "md" | "lg";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  children: ReactNode;
};

const variants: Record<Variant, string> = {
  primary: "bg-rust-700 text-white shadow-lg shadow-rust-700/25 hover:bg-rust-800",
  secondary: "bg-white text-ink shadow-[0_4px_18px_rgb(22_27_46/0.07)] hover:shadow-[0_6px_22px_rgb(22_27_46/0.12)]",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`group inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-700 ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}

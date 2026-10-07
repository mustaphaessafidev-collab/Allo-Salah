import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
} as const;

const solid = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
  focusable: false,
} as const;

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArchiveBoxIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <rect x="3" y="4" width="18" height="5" rx="1.5" />
      <path d="M5 9v9.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V9" />
      <path d="M10 13h4" />
    </svg>
  );
}

export function MailCheckIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M21 12V6.5A1.5 1.5 0 0 0 19.5 5h-15A1.5 1.5 0 0 0 3 6.5v11A1.5 1.5 0 0 0 4.5 19H12" />
      <path d="m3.5 6 8.5 6.5L20.5 6" />
      <path d="m15.5 18 2 2 4-4" />
    </svg>
  );
}

export function ShoppingBagIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M5.5 8h13l-1 12h-11l-1-12Z" />
      <path d="M9 10V6.5a3 3 0 0 1 6 0V10" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}

export function NotePenIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M4 6h11M4 10h8M4 14h5" />
      <path d="m19.5 11.5-6.5 6.5-3 .8.8-3 6.5-6.5a1.5 1.5 0 0 1 2.2 2.2Z" />
    </svg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </svg>
  );
}

export function CalculatorIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M7 8.5h4M15 7v3M13.5 8.5h3M7 15.5h4M13.5 14l3 3M16.5 14l-3 3" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function SendIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M4 4 21 12 4 20l2.5-8L4 4Z" />
      <path d="M6.5 12H12" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function NavigationIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M12 3 5 20l7-4 7 4-7-17Z" />
    </svg>
  );
}

export function GaugeIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M4.5 17a8.5 8.5 0 1 1 15 0" />
      <path d="m12 13 3.5-3.5" />
      <circle cx="12" cy="13" r="1" />
    </svg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function TagCheckIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M3.5 12.5V4.5a1 1 0 0 1 1-1h8l8 8-9 9-8-8Z" />
      <circle cx="8" cy="8" r="1.25" />
      <path d="m10 13.5 2 2 3.5-3.5" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3v4M16 3v4M4 10h16" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8L12 3Z" />
    </svg>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M4 5h16v11H9l-5 4V5Z" />
      <path d="M8 9h8M8 12.5h5" />
    </svg>
  );
}

export function TruckIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M2.5 6h11v10h-11Z" />
      <path d="M13.5 9.5h4l3 3.5v3h-7" />
      <circle cx="6.5" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M5 3.5h3.5l1.5 4.5-2.2 1.5a11 11 0 0 0 6.7 6.7l1.5-2.2 4.5 1.5V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.1 1.5 1.5 0 0 1 5 3.5Z" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5Z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function MotorbikeIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <circle cx="5.5" cy="16.5" r="3" />
      <circle cx="18.5" cy="16.5" r="3" />
      <path d="M5.5 16.5h6l3-6h-4" />
      <path d="M14 6h2.5l2 10.5" />
      <path d="M8 10.5h4" />
    </svg>
  );
}

export function BoltSolidIcon(props: IconProps) {
  return (
    <svg {...solid} {...props}>
      <path d="M13.5 2 4 14h7l-1 8 10-13h-7.2L13.5 2Z" />
    </svg>
  );
}

export function PinSolidIcon(props: IconProps) {
  return (
    <svg {...solid} {...props}>
      <path d="M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}

export function StarSolidIcon(props: IconProps) {
  return (
    <svg {...solid} {...props}>
      <path d="m12 2.5 2.9 6 6.6.8-4.9 4.6 1.3 6.6L12 17.2l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8 2.9-6Z" />
    </svg>
  );
}

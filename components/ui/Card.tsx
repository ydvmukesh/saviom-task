import Link from "next/link";


type CardProps = {
  className?: string;
  href: string;
  number: number;
  linkText: string;
  color: string;
  active?: boolean;
};

export default function Card({
  className,
  href,
  number,
  linkText,
  color,
  active = false,
}: CardProps) {
  const formattedNumber = String(number).padStart(2, "0");

  return (
    <div
      className={`card-box card-${color} ${active ? " card-active" : ""} ${className ?? ""}`}
    >
      <div className="card-header">
        <svg
          className="card-wave"
          viewBox="0 0 240 36"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 18 C40 36, 80 0, 120 18 C160 36, 200 0, 240 18 L240 36 L0 36 Z" />
        </svg>
        <div className="card-number">{formattedNumber}</div>
      </div>

      <div className="card-body">
        <div className="card-title">
          <span>LOREN</span>
          <span>IPSUM</span>
          <span>DONET</span>
        </div>
        <Link href={href} className="card-read-more">
          {linkText}
          {active && <span className="card-arrow" aria-hidden="true"> →</span>}
        </Link>
      </div>
    </div>
  );
}

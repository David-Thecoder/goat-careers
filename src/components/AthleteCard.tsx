import { Link } from "react-router-dom";
import type { Athlete } from "../data/types";

interface AthleteCardProps {
  athlete: Athlete;
}

export function AthleteCard({ athlete }: AthleteCardProps) {
  return (
    <Link
      to={`/${athlete.slug}`}
      style={{
        display: "block",
        padding: "var(--space-3)",
        border: "1px solid rgba(200, 169, 81, 0.2)",
        borderRadius: "4px",
        transition: "border-color 0.2s, transform 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--gold)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(200, 169, 81, 0.2)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <span
        style={{
          display: "block",
          fontFamily: "var(--font-mono)",
          fontSize: "0.65rem",
          color: "var(--muted)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "var(--space-1)",
        }}
      >
        {athlete.years} saisons · {athlete.signature}
      </span>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "2rem",
          letterSpacing: "-0.02em",
          marginBottom: "var(--space-1)",
          textTransform: "uppercase",
        }}
      >
        {athlete.name}
      </h2>
      <p
        style={{
          color: "var(--muted)",
          fontSize: "0.9rem",
          fontStyle: "italic",
        }}
      >
        « {athlete.quote.slice(0, 80)}… »
      </p>
    </Link>
  );
}

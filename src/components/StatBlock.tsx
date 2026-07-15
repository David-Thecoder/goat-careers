interface StatBlockProps {
  value: string;
  label: string;
}

export function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div style={{ textAlign: "center" }}>
      <span
        style={{
          display: "block",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          color: "var(--gold)",
          lineHeight: 1,
        }}
      >
        {value}
      </span>
      <span
        style={{
          display: "block",
          marginTop: "var(--space-1)",
          fontSize: "0.7rem",
          color: "var(--muted)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
    </div>
  );
}

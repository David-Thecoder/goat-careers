interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <section
      style={{
        padding: "var(--space-5) 24px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "0.8rem",
          color: "var(--gold)",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          marginBottom: "var(--space-3)",
          paddingBottom: "var(--space-1)",
          borderBottom: "1px solid rgba(200, 169, 81, 0.2)",
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

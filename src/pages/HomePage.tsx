import { AthleteCard } from "../components/AthleteCard";
import { athletes } from "../data/athletes";

export function HomePage() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
      <section style={{ padding: "var(--space-6) 0 var(--space-4)" }}>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--muted)",
            fontSize: "0.7rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "var(--space-2)",
          }}
        >
          5 carrières · 5 obsessions · 1 site
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            maxWidth: "16ch",
          }}
        >
          Les <span style={{ color: "var(--gold)" }}>GOAT</span> décryptés
        </h1>
        <p
          style={{
            marginTop: "var(--space-3)",
            color: "var(--muted)",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            maxWidth: "60ch",
          }}
        >
          Pas de classement. Pas de débat stérile. Juste les faits bruts : ce qu'ils
          ont fait, comment ils l'ont fait, et pourquoi ça a changé le jeu.
        </p>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "var(--space-2)",
          paddingBottom: "var(--space-5)",
        }}
      >
        {athletes.map((a) => (
          <AthleteCard key={a.slug} athlete={a} />
        ))}
      </section>
    </div>
  );
}

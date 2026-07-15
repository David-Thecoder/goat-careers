import { useParams, Navigate } from "react-router-dom";
import { SignatureTitle } from "../components/SignatureTitle";
import { Section } from "../components/Section";
import { StatBlock } from "../components/StatBlock";
import { getAthleteBySlug } from "../data/athletes";

export function AthletePage() {
  const { slug } = useParams<{ slug: string }>();
  const athlete = slug ? getAthleteBySlug(slug) : undefined;

  if (!athlete) return <Navigate to="/" replace />;

  return (
    <article style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
      {/* HERO */}
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
          {athlete.years} saisons · {athlete.signature}
        </p>
        <SignatureTitle text={athlete.name} />
        <blockquote
          style={{
            marginTop: "var(--space-3)",
            paddingLeft: "var(--space-2)",
            borderLeft: "2px solid var(--gold)",
            color: "rgba(240, 237, 230, 0.75)",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            fontStyle: "italic",
            maxWidth: "60ch",
          }}
        >
          {athlete.quote}
        </blockquote>
      </section>

      {/* FAITS */}
      <Section title="3 faits de mentalité">
        {athlete.facts.map((f) => (
          <article
            key={f.title}
            style={{ marginBottom: "var(--space-4)" }}
          >
            <h3
              style={{
                fontSize: "1.15rem",
                marginBottom: "var(--space-1)",
                fontWeight: 500,
              }}
            >
              {f.title}
            </h3>
            <p
              style={{
                color: "rgba(240, 237, 230, 0.65)",
                lineHeight: 1.7,
              }}
            >
              {f.body}
            </p>
          </article>
        ))}
      </Section>

      {/* IMPACTS */}
      <Section title="3 impacts dont on ne parle pas assez">
        {athlete.impacts.map((i) => (
          <article
            key={i.title}
            style={{ marginBottom: "var(--space-4)" }}
          >
            <h3
              style={{
                fontSize: "1.15rem",
                marginBottom: "var(--space-1)",
                fontWeight: 500,
              }}
            >
              {i.title}
            </h3>
            <p
              style={{
                color: "rgba(240, 237, 230, 0.65)",
                lineHeight: 1.7,
              }}
            >
              {i.body}
            </p>
          </article>
        ))}
      </Section>

      {/* STATS */}
      <Section title="En chiffres">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "var(--space-3)",
          }}
        >
          {athlete.stats.map((s) => (
            <StatBlock key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </Section>
    </article>
  );
}

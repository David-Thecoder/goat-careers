import { Link, NavLink, Outlet } from "react-router-dom";
import { athletes } from "../data/athletes";

export function Layout() {
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "var(--space-2) 24px",
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
          flexWrap: "wrap",
          gap: "var(--space-2)",
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.3rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          GOAT<span style={{ color: "var(--gold)" }}>·</span>CAREERS
        </Link>
        <nav
          style={{
            display: "flex",
            gap: "var(--space-2)",
            flexWrap: "wrap",
          }}
        >
          {athletes.map((a) => (
            <NavLink
              key={a.slug}
              to={`/${a.slug}`}
              style={({ isActive }) => ({
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: isActive ? "var(--gold)" : "var(--muted)",
                borderBottom: isActive
                  ? "1px solid var(--gold)"
                  : "1px solid transparent",
                paddingBottom: "2px",
              })}
            >
              {a.name}
            </NavLink>
          ))}
        </nav>
      </header>

      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "var(--space-4) 24px",
          color: "var(--muted)",
          fontSize: "0.75rem",
          borderTop: "1px solid rgba(200, 169, 81, 0.1)",
          marginTop: "var(--space-5)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        <p>Dernière mise à jour · Janvier 2025</p>
      </footer>
    </>
  );
}

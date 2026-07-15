import { useEffect, useRef } from "react";

interface SignatureTitleProps {
  text: string;
  size?: string;
}

const GLITCH_CHARS = "!<>-_/[]{}—=+*^?#";

export function SignatureTitle({
  text,
  size = "clamp(3rem, 8vw, 7rem)",
}: SignatureTitleProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const duration = 1200;
    const start = performance.now();
    let rafId: number;

    function frame(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const revealed = Math.floor(progress * text.length);
      let output = "";

      for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") output += " ";
        else if (i < revealed) output += text[i];
        else
          output += GLITCH_CHARS[
            Math.floor(Math.random() * GLITCH_CHARS.length)
          ];
      }

      el.textContent = output;
      if (progress < 1) rafId = requestAnimationFrame(frame);
    }

    rafId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafId);
  }, [text]);

  return (
    <h1
      style={{
        position: "relative",
        fontFamily: "var(--font-display)",
        fontSize: size,
        fontWeight: 700,
        lineHeight: 0.95,
        letterSpacing: "-0.02em",
        textTransform: "uppercase",
        margin: 0,
      }}
    >
      {/* ponytail: layer rouge décalé gauche */}
      <span
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          color: "var(--danger)",
          transform: "translate(-3px, 1px)",
          mixBlendMode: "screen",
          pointerEvents: "none",
        }}
      >
        {text}
      </span>
      {/* ponytail: layer bleu décalé droite */}
      <span
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          color: "var(--info)",
          transform: "translate(3px, -1px)",
          mixBlendMode: "screen",
          pointerEvents: "none",
        }}
      >
        {text}
      </span>
      {/* ponytail: layer central scramble */}
      <span ref={ref} style={{ position: "relative" }}>
        {text}
      </span>
    </h1>
  );
}

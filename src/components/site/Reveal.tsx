import { useEffect, useRef, type ElementType, type ReactNode, type CSSProperties } from "react";

/** Adds `is-in` once the element enters the viewport; children use .reveal-* classes. */
export function Reveal({
  as: Tag = "div",
  className = "",
  children,
  style,
  threshold = 0.2,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
  threshold?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}

/** Title split into masked lines that slide up one after another. */
export function Lines({ lines, step = 90, start = 0 }: { lines: ReactNode[]; step?: number; start?: number }) {
  return (
    <>
      {lines.map((l, i) => (
        <span key={i} className="reveal-line">
          <span style={{ "--d": `${start + i * step}ms` } as CSSProperties}>{l}</span>
        </span>
      ))}
    </>
  );
}

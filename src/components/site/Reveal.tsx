import { useEffect, useRef, type ElementType, type ReactNode, type CSSProperties } from "react";

/** Adds `is-in` once the element enters the viewport; children use .reveal-* classes. */
export function Reveal({
  as: Tag = "div",
  className = "",
  children,
  style,
  threshold = 0.2,
  centerActive = false,
  centerActiveOnDesktop = false,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
  threshold?: number;
  centerActive?: boolean;
  centerActiveOnDesktop?: boolean;
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

    const centerMedia = window.matchMedia("(hover: none) and (pointer: coarse)");
    let centerObserver: IntersectionObserver | undefined;
    const observeCenter = () => {
      centerObserver?.disconnect();
      if (!centerActive || (!centerActiveOnDesktop && !centerMedia.matches)) {
        el.classList.remove("is-center");
        return;
      }
      const inset = Math.round(window.innerHeight * 0.38);
      centerObserver = new IntersectionObserver(
        ([entry]) => el.classList.toggle("is-center", Boolean(entry?.isIntersecting)),
        { rootMargin: `-${inset}px 0px -${inset}px 0px` },
      );
      centerObserver.observe(el);
    };

    if (centerActive) {
      observeCenter();
      centerMedia.addEventListener("change", observeCenter);
      window.addEventListener("resize", observeCenter, { passive: true });
    }

    return () => {
      io.disconnect();
      centerObserver?.disconnect();
      if (centerActive) {
        centerMedia.removeEventListener("change", observeCenter);
        window.removeEventListener("resize", observeCenter);
      }
    };
  }, [threshold, centerActive, centerActiveOnDesktop]);
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

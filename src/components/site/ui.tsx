import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type Variant = "solid" | "solid-white-hover" | "emerald" | "ghost" | "ghost-light";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-paper",
  "solid-white-hover": "bg-ink text-paper",
  emerald: "bg-emerald text-paper",
  ghost: "border border-ink/30 text-ink",
  "ghost-light": "border border-paper/30 text-paper",
};
const fills: Record<Variant, string> = {
  solid: "bg-emerald",
  "solid-white-hover": "bg-[#ffffff]",
  emerald: "bg-ink",
  ghost: "bg-ink",
  "ghost-light": "bg-paper",
};
const hoverText: Record<Variant, string> = {
  solid: "",
  "solid-white-hover": "group-hover:text-[#071321]",
  emerald: "",
  ghost: "group-hover:text-paper",
  "ghost-light": "group-hover:text-ink",
};

/** CTA: a fill sweeps up from below, arrow travels diagonally. */
export function Cta({ href, children, variant = "solid", target, rel }: { href: string; children: ReactNode; variant?: Variant; target?: string; rel?: string }) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`group relative ${variant === "solid-white-hover" ? "z-[1]" : ""} inline-flex items-center gap-4 overflow-hidden rounded-full py-3 pl-6 pr-3 text-sm font-semibold tracking-wide focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald ${variants[variant]}`}
    >
      <span className={`absolute inset-0 translate-y-full rounded-full transition-transform duration-500 ease-[cubic-bezier(.2,.8,.1,1)] group-hover:translate-y-0 ${fills[variant]}`} />
      <span className={`relative transition-colors duration-500 ${hoverText[variant]}`}>{children}</span>
      <span className={`relative grid h-9 w-9 place-items-center overflow-hidden rounded-full bg-paper text-ink ${variant === "solid-white-hover" ? "transition-colors duration-500 group-hover:bg-[#071321] group-hover:text-white" : ""}`}>
        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-6 group-hover:translate-x-6" />
        <ArrowUpRight className="absolute h-4 w-4 -translate-x-6 translate-y-6 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
      </span>
    </a>
  );
}

export function SectionTag({ n, children, light = false }: { n: string; children: ReactNode; light?: boolean }) {
  return (
    <div className={`eyebrow flex items-center gap-3 ${light ? "text-paper/70" : "text-muted-foreground"}`}>
      <span className="text-emerald">{n}</span>
      <span className={`h-px w-10 ${light ? "bg-paper/30" : "bg-ink/30"}`} />
      <span>{children}</span>
    </div>
  );
}

/** Placeholder for content the professional must still supply. */
export function Todo({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-sm border border-dashed border-ember/60 bg-ember/10 px-1.5 py-0.5 font-mono text-[0.8em] text-ember">
      {children}
    </span>
  );
}

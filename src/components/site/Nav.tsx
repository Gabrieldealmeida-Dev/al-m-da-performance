import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#clinica", label: "Clínica" },
  { href: "#esporte", label: "Esporte" },
  
  { href: "#empresas", label: "Empresas" },
  { href: "#abordagem", label: "Abordagem" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav
        className={`mx-auto flex max-w-[1440px] items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 md:px-6 ${
          scrolled ? "bg-ink/85 text-paper shadow-2xl backdrop-blur-md" : "text-paper"
        }`}
      >
        <a href="#top" className="flex items-center gap-3" aria-label="Início">
          <span className="display grid h-9 w-9 place-items-center rounded-full bg-emerald text-lg text-paper">R</span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold">Renata de Almeida Ramos</span>
            <span className="eyebrow block text-[0.6rem] text-paper/60">Clínica · Esportiva · Empresarial</span>
          </span>
        </a>
        <ul className="hidden items-center gap-7 text-sm lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="sweep pb-0.5 text-paper/80 transition-colors hover:text-paper">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contato"
          className="hidden rounded-full bg-paper px-5 py-2 text-sm font-semibold text-ink transition-colors hover:bg-emerald hover:text-paper lg:inline-block"
        >
          Conversar
        </a>
        <button className="grid h-10 w-10 place-items-center rounded-full bg-paper/10 lg:hidden" onClick={() => setOpen(true)} aria-label="Abrir menu">
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {/* Mobile: full-screen editorial index */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-ink p-6 text-paper transition-[clip-path] duration-700 ease-[cubic-bezier(.7,0,.2,1)] lg:hidden ${
          open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="eyebrow text-paper/60">Índice</span>
          <button className="grid h-10 w-10 place-items-center rounded-full bg-paper/10" onClick={() => setOpen(false)} aria-label="Fechar menu">
            <X className="h-5 w-5" />
          </button>
        </div>
        <ul className="mt-12 flex-1 space-y-2">
          {[...links, { href: "#contato", label: "Contato" }].map((l, i) => (
            <li key={l.href} className="border-b border-paper/10">
              <a href={l.href} onClick={() => setOpen(false)} className="display flex items-baseline gap-4 py-3 text-6xl">
                <span className="font-mono text-xs font-normal text-emerald">0{i + 1}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="eyebrow text-paper/50">CRP 04/39275 · 06/001349-IS</p>
      </div>
    </header>
  );
}

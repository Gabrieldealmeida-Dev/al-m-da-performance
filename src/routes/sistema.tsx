import { createFileRoute, Link } from "@tanstack/react-router";
import { Cta, SectionTag } from "@/components/site/ui";

export const Route = createFileRoute("/sistema")({
  head: () => ({
    meta: [
      { title: "Sistema visual — Mente em Movimento" },
      { name: "description", content: "Cores, tipografia, espaçamentos, botões e comportamentos de interação do site." },
      { property: "og:title", content: "Sistema visual — Mente em Movimento" },
      { property: "og:description", content: "Guia de identidade visual e interação do site institucional." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: System,
});

const colors = [
  ["Ink", "bg-ink", "Fundos densos, texto principal"],
  ["Paper", "bg-paper", "Respiro, leitura longa"],
  ["Paper deep", "bg-paper-deep", "Seções de apoio"],
  ["Emerald", "bg-emerald", "Destaque, CTA, foco"],
  ["Emerald glow", "bg-emerald-glow", "Destaque sobre Ink"],
  ["Ember", "bg-ember", "Acento raro: marcações, trajetória"],
];

const behaviors = [
  ["Títulos", "Entram linha a linha por máscara (translateY 105% → 0, 1.1s, atraso de 90–110ms entre linhas)."],
  ["Fotografias", "Revelação por recorte de baixo para cima (clip-path) com leve zoom-out da imagem."],
  ["Hero", "Ao rolar, título sobe mais rápido que a foto (parallax); a faixa esmeralda inclinada corta a transição."],
  ["Equipes", "Foto em tela cheia ganha escala progressiva conforme a rolagem."],
  ["Linhas de serviço", "No hover/foco: número acende, título desloca 16px, descrição ganha opacidade."],
  ["Cards empresas", "Preenchimento Ink sobe do rodapé do card; texto inverte para Paper."],
  ["Botões", "Fundo varre de baixo; a seta sai na diagonal e outra entra."],
  ["Trajetória", "Linhas SVG se desenham ao entrar na tela, conectando etapas."],
  ["Acessibilidade", "prefers-reduced-motion desativa todo movimento; foco visível em esmeralda."],
];

function System() {
  return (
    <main className="mx-auto max-w-[1200px] px-5 py-16 md:px-10">
      <Link to="/" className="eyebrow text-muted-foreground hover:text-emerald">← Voltar ao site</Link>
      <h1 className="display mt-8 text-7xl md:text-9xl">Sistema <span className="serif-italic text-emerald">visual</span></h1>

      <section className="mt-20">
        <SectionTag n="A">Cores</SectionTag>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-6">
          {colors.map(([n, c, u]) => (
            <div key={n}>
              <div className={`aspect-square border border-ink/10 ${c}`} />
              <p className="mt-3 font-semibold">{n}</p>
              <p className="text-xs text-muted-foreground">{u}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-10 md:grid-cols-3">
        <div className="md:col-span-3"><SectionTag n="B">Tipografia</SectionTag></div>
        <div><p className="display text-7xl">Aa</p><p className="mt-2 font-semibold">Big Shoulders Display</p><p className="text-sm text-muted-foreground">Títulos · caixa alta · entrelinha 0.84</p></div>
        <div><p className="serif-italic text-7xl">Aa</p><p className="mt-2 font-semibold">Instrument Serif Italic</p><p className="text-sm text-muted-foreground">Contraste editorial dentro dos títulos</p></div>
        <div><p className="text-7xl font-medium">Aa</p><p className="mt-2 font-semibold">Archivo + JetBrains Mono</p><p className="text-sm text-muted-foreground">Texto corrido · rótulos e numeração</p></div>
      </section>

      <section className="mt-20">
        <SectionTag n="C">Espaçamento</SectionTag>
        <p className="mt-6 max-w-xl text-muted-foreground">Grid de 12 colunas, margens 20px (mobile) / 40px (desktop), largura máxima 1440px. Seções: 96px mobile, 144px desktop. Escala base 4px.</p>
        <div className="mt-6 flex items-end gap-3">
          {[4, 8, 16, 24, 40, 64, 96, 144].map((s) => (
            <div key={s} className="text-center"><div className="w-6 bg-emerald" style={{ height: s }} /><p className="mt-2 font-mono text-xs">{s}</p></div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <SectionTag n="D">Botões</SectionTag>
        <div className="mt-8 flex flex-wrap gap-4">
          <Cta href="#" variant="solid">Primário</Cta>
          <Cta href="#" variant="emerald">Destaque</Cta>
          <Cta href="#" variant="ghost">Secundário</Cta>
          <span className="rounded-full bg-ink p-1"><Cta href="#" variant="ghost-light">Sobre escuro</Cta></span>
        </div>
      </section>

      <section className="mt-20">
        <SectionTag n="E">Comportamentos</SectionTag>
        <dl className="mt-8 border-t border-ink/15">
          {behaviors.map(([k, v]) => (
            <div key={k} className="grid gap-2 border-b border-ink/15 py-5 md:grid-cols-4">
              <dt className="font-semibold">{k}</dt><dd className="text-muted-foreground md:col-span-3">{v}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}

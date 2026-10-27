import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Reveal, Lines } from "@/components/site/Reveal";
import { Cta, SectionTag } from "@/components/site/ui";
import portrait from "@/assets/renata-profissional.jpg.jpeg";
import lecture from "@/assets/renata-palestra.jpeg";

export const Route = createFileRoute("/sistema")({
  head: () => ({
    meta: [
      { title: "Sistema visual — Renata de Almeida Ramos" },
      { name: "description", content: "Guia visual da identidade, tipografia, componentes, animações e responsividade do site de Renata de Almeida Ramos." },
      { property: "og:title", content: "Sistema visual — Renata de Almeida Ramos" },
      { property: "og:description", content: "Guia de identidade visual e interação do site profissional." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex,follow" },
    ],
  }),
  component: System,
});

const palette = [
  { name: "Azul-marinho", token: "--ink", hex: "#06101C", value: "var(--ink)", use: "Hero, rodapé, texto principal" },
  { name: "Marinho suave", token: "--ink-soft", hex: "#162232", value: "var(--ink-soft)", use: "Superfícies escuras de apoio" },
  { name: "Areia", token: "--paper", hex: "#F5F1E9", value: "var(--paper)", use: "Fundo de leitura e cards" },
  { name: "Areia profunda", token: "--paper-deep", hex: "#E7E0D4", value: "var(--paper-deep)", use: "Seções alternadas" },
  { name: "Esmeralda", token: "--emerald", hex: "#007D53", value: "var(--emerald)", use: "CTA, palavras e interação" },
  { name: "Verde luminoso", token: "--emerald-glow", hex: "#2FC183", value: "var(--emerald-glow)", use: "Destaques sobre marinho" },
  { name: "Dourado da logo", token: "--brand-gold", hex: "#A88848", value: "var(--brand-gold)", use: "Numeração e detalhes de marca" },
  { name: "Champanhe", token: "--brand-gold-light", hex: "#E4D09D", value: "var(--brand-gold-light)", use: "Microdetalhes em fundo escuro" },
  { name: "Dourado profundo", token: "--brand-gold-deep", hex: "#705522", value: "var(--brand-gold-deep)", use: "Texto dourado em fundo claro" },
  { name: "Terracota", token: "--ember", hex: "#D05320", value: "var(--ember)", use: "Acento quente, uso pontual" },
  { name: "Branco puro", token: "CTA de contraste", hex: "#FFFFFF", value: "#FFFFFF", use: "Hover branco do CTA de e-mail" },
];

const serviceCards = [
  {
    number: "01",
    label: "Liderança · equipes",
    title: "Desenvolvimento de lideranças",
    items: ["Capacitação de líderes", "Comunicação assertiva", "Delegação e engajamento"],
  },
  {
    number: "02",
    label: "Consultoria organizacional",
    title: "Consultoria e desenvolvimento organizacional",
    items: ["Diagnósticos e cultura", "Organização de processos", "Acompanhamento de mudanças"],
  },
  {
    number: "03",
    label: "Psicologia ocupacional",
    title: "Saúde mental e riscos psicossociais",
    items: ["Avaliações psicossociais", "Análise de riscos", "Promoção da saúde mental"],
  },
];

const approachSteps = ["Escuta", "Diagnóstico", "Intervenção", "Acompanhamento"];

function System() {
  return (
    <main id="top" className="bg-paper text-ink">
      <Nav />

      <header className="grain relative overflow-hidden bg-ink text-paper">
        <div className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-36 md:px-10 md:pb-24 md:pt-44">
          <Link to="/" className="eyebrow text-paper/60 transition-colors hover:text-brand-gold-light">← Página inicial</Link>
          <Reveal className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <SectionTag n="GUIA" light>Identidade visual</SectionTag>
              <h1 className="display mt-8 text-7xl md:text-9xl">
                <Lines lines={["Sistema", <span className="serif-italic text-brand-gold-light">visual.</span>]} />
              </h1>
            </div>
            <p className="fade-up max-w-md text-paper/70 md:col-span-4" style={{ "--d": "250ms" } as React.CSSProperties}>
              Renata de Almeida Ramos · Psicologia Clínica, Esportiva e Empresarial.
            </p>
          </Reveal>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-brand-gold-light/25 pt-4">
            <span className="eyebrow text-brand-gold-light">Editorial · contemporâneo · humano</span>
            <span className="font-mono text-xs text-paper/50">SISTEMA / 01—05</span>
          </div>
        </div>
      </header>

      <section id="sobre" className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-32">
        <SectionTag n="01">Assinatura e paleta</SectionTag>
        <Reveal className="mt-10 grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-4">
            <h2 className="display text-5xl md:text-6xl">A marca, <span className="serif-italic text-emerald">por inteiro.</span></h2>
            <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
              A assinatura completa e o símbolo isolado são os arquivos oficiais do projeto; as imagens são exibidas sem alteração.
            </p>
          </div>
          <figure className="md:col-span-4">
            <div className="grid aspect-square place-items-center border border-ink/10 bg-white p-3 md:p-5">
              <img src="/logo-renata.png" alt="Logo completa de Renata de Almeida Ramos" width={1254} height={1254} className="h-full w-full object-contain" />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between gap-3">
              <span className="font-semibold">Assinatura completa</span>
              <span className="eyebrow text-muted-foreground">FUNDO BRANCO ORIGINAL</span>
            </figcaption>
          </figure>
          <figure className="md:col-span-3 md:col-start-10">
            <div className="grid aspect-square place-items-center border border-brand-gold-light/30 bg-ink p-10">
              <img src="/logo-renata-simbolo.png" alt="Símbolo dourado da marca, sem nome ou slogan" width={406} height={486} className="h-full w-full object-contain" />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between gap-3">
              <span className="font-semibold">Símbolo</span>
              <span className="eyebrow text-muted-foreground">PNG · ALFA</span>
            </figcaption>
          </figure>
        </Reveal>

        <div id="clinica" className="mt-20 scroll-mt-24">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-ink/15 pb-5">
            <div>
              <p className="eyebrow text-brand-gold-deep">TOKENS DE COR</p>
              <h3 className="display mt-3 text-4xl md:text-5xl">Marinho · areia · esmeralda · ouro</h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">HEX convertido dos valores OKLCH em `src/styles.css`; os três dourados vêm da amostra da logo.</p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {palette.map((color) => (
              <figure key={color.token}>
                <div className="aspect-[1.4] border border-ink/10" style={{ backgroundColor: color.value }} />
                <figcaption className="mt-3">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="font-semibold">{color.name}</span>
                    <code className="font-mono text-xs">{color.hex}</code>
                  </div>
                  <p className="eyebrow mt-1 text-muted-foreground">{color.token}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{color.use}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 max-w-3xl border-l-2 border-brand-gold pl-4 text-sm leading-relaxed text-muted-foreground">
            Hierarquia dourada: `--brand-gold` acompanha a marca; `--brand-gold-deep` mantém contraste em superfícies claras (6,2:1 sobre areia); `--brand-gold-light` funciona em marinho (12,6:1). O champanhe sobre esmeralda (3,4:1) fica restrito à frase de grande escala do contato. Branco puro aparece apenas no hover especial do CTA de e-mail.
          </p>
        </div>
      </section>

      <section className="bg-paper-deep py-20 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <SectionTag n="02">Tipografia e hierarquia</SectionTag>
          <Reveal className="mt-10 grid gap-px bg-ink/15 md:grid-cols-2 xl:grid-cols-4">
            <div className="bg-paper-deep p-6 md:p-8">
              <p className="eyebrow text-brand-gold-deep">DISPLAY · 800</p>
              <p className="display mt-8 text-5xl leading-[0.84]">A performance</p>
              <p className="mt-6 font-semibold">Big Shoulders Display</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Títulos em caixa alta, peso 800 e line-height base 0.84.</p>
            </div>
            <div className="bg-paper-deep p-6 md:p-8">
              <p className="eyebrow text-brand-gold-deep">CONTRASTE EDITORIAL</p>
              <p className="serif-italic mt-7 text-5xl text-emerald">desenvolvimento.</p>
              <p className="mt-6 font-semibold">Instrument Serif Italic</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Palavras de destaque preservam caixa e contraste editorial.</p>
            </div>
            <div className="bg-paper-deep p-6 md:p-8">
              <p className="eyebrow text-brand-gold-deep">LEITURA</p>
              <p className="mt-8 font-sans text-2xl leading-relaxed">Desenvolvimento humano e saúde mental.</p>
              <p className="mt-6 font-semibold">Archivo</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Texto corrido em Archivo, com tamanhos fluidos e entrelinha de leitura.</p>
            </div>
            <div className="bg-paper-deep p-6 md:p-8">
              <p className="eyebrow text-brand-gold-deep">INDICADORES</p>
              <p className="display mt-8 text-5xl text-brand-gold-deep">+15</p>
              <p className="mt-6 font-semibold">JetBrains Mono</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Rótulos, CRP, sequência e microinformação; 0,72rem e tracking 0,18em em `eyebrow`.</p>
            </div>
          </Reveal>
          <dl className="mt-10 grid gap-4 border-y border-ink/15 py-5 sm:grid-cols-3">
            <div><dt className="eyebrow text-muted-foreground">HERO</dt><dd className="mt-1">13,5vw · md 10,4vw</dd></div>
            <div><dt className="eyebrow text-muted-foreground">SEÇÕES</dt><dd className="mt-1">Escala display por coluna e breakpoint</dd></div>
            <div><dt className="eyebrow text-muted-foreground">CORPO</dt><dd className="mt-1">Base 16px · `leading-relaxed`</dd></div>
          </dl>
        </div>
      </section>

      <section id="empresas" className="relative bg-paper py-20 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <SectionTag n="03">Componentes e estados</SectionTag>
          <Reveal className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="display text-5xl md:text-6xl">Comandos claros, <span className="serif-italic text-emerald">estados precisos.</span></h2>
              <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">Amostras abaixo reutilizam `Cta`, as superfícies e as transições aplicadas na página inicial.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Cta href="#contato" variant="solid">Primário</Cta>
                <Cta href="#contato" variant="emerald">Destaque</Cta>
                <Cta href="#contato" variant="ghost">Contorno</Cta>
              </div>
              <div className="grain mt-8 flex flex-wrap items-center gap-3 bg-emerald p-6 text-paper">
                <Cta href="https://mail.google.com/mail/?view=cm&fs=1&to=rena.serpsicologia%40gmail.com" variant="solid-white-hover" target="_blank" rel="noopener noreferrer">Enviar e-mail</Cta>
                <Cta href="https://wa.me/5534988452910" variant="ghost-light">WhatsApp</Cta>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">Hover do e-mail: branco `#FFFFFF`, texto marinho `#071321`, círculo marinho e seta branca.</p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="eyebrow text-brand-gold-deep">EMPRESARIAL</p>
                  <h3 className="display mt-2 text-4xl">Cards de serviço</h3>
                </div>
                <span className="font-mono text-xs text-muted-foreground">NORMAL / ATIVO</span>
              </div>
              <div className="mt-5 grid gap-2">
                {serviceCards.map((card, index) => {
                  const active = index === 1;
                  return (
                    <article key={card.number} className={`group relative overflow-hidden p-6 ${active ? "bg-ink text-paper" : "bg-paper"}`}>
                      {!active && <span className="absolute inset-0 translate-y-full bg-ink transition-transform duration-700 ease-[cubic-bezier(.2,.8,.1,1)] group-hover:translate-y-0" />}
                      <div className={`relative ${active ? "" : "transition-colors duration-500 group-hover:text-paper"}`}>
                        <span className={`font-mono text-sm ${active ? "text-brand-gold-light" : "text-brand-gold-deep transition-colors duration-500 group-hover:text-brand-gold-light"}`}>{card.number}</span>
                        <p className="eyebrow mt-3 opacity-70">{active ? "Estado ativo · scroll mobile" : card.label}</p>
                        <h4 className="display mt-5 text-4xl">{card.title}</h4>
                        <ul className="mt-4 space-y-1 text-sm opacity-80">{card.items.map((item) => <li key={item}>{item}</li>)}</ul>
                        <a href="#contato" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold"><span className="sweep">Solicitar proposta</span> →</a>
                      </div>
                    </article>
                  );
                })}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">No site, o card mais próximo do centro da viewport recebe `is-active` via IntersectionObserver em `(hover: none) and (pointer: coarse)`.</p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-12 md:items-center">
            <dl className="grid grid-cols-2 border-y border-ink/15 md:col-span-6">
              {[ ["+15", "anos de experiência"], ["+27 mil", "atendimentos realizados"], ["3", "áreas integradas"], ["Guarujá", "SP · Baixada Santista"] ].map(([value, label]) => (
                <div key={label} className="relative flex min-h-28 flex-col items-center justify-center border-b border-ink/15 py-5 text-center before:absolute before:left-0 before:top-0 before:h-px before:w-8 before:bg-brand-gold/70 odd:pr-3 even:border-l even:pl-3">
                  <dt className={`display text-4xl sm:text-5xl ${value?.startsWith("+") ? "text-brand-gold-deep" : "text-ink"}`}>{value}</dt>
                  <dd className="mt-2 text-xs text-muted-foreground">{label}</dd>
                </div>
              ))}
            </dl>
            <figure className="relative md:col-span-5 md:col-start-8">
              <div className="reveal-photo aspect-[4/3] overflow-hidden">
                <img src={lecture} alt="Renata em palestra com microfone" width={1280} height={854} loading="lazy" decoding="async" className="h-full w-full object-cover object-[54%_center]" />
              </div>
              <span className="absolute -left-3 -top-3 h-6 w-6 border-l-2 border-t-2 border-brand-gold" />
              <span className="absolute -bottom-3 -right-3 h-6 w-6 border-b-2 border-r-2 border-brand-gold" />
              <figcaption className="mt-3 eyebrow text-muted-foreground">FILETE DOURADO · ACABAMENTO DA IMAGEM</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="esporte" className="grain relative overflow-hidden bg-ink py-20 text-paper md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <SectionTag n="04" light>Movimento e interação</SectionTag>
          <div className="mt-10 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal as="h2" className="display text-5xl md:text-7xl">
                <Lines lines={["O jogo", <span className="serif-italic text-emerald-glow">também se treina.</span>]} />
              </Reveal>
              <dl className="mt-8 border-t border-paper/15">
                <div className="grid gap-2 border-b border-paper/15 py-4 sm:grid-cols-4"><dt className="eyebrow text-brand-gold-light">LINES</dt><dd className="text-sm text-paper/75 sm:col-span-3">Máscara vertical · 1,1s · atraso padrão de 90ms por linha.</dd></div>
                <div className="grid gap-2 border-b border-paper/15 py-4 sm:grid-cols-4"><dt className="eyebrow text-brand-gold-light">FOTOGRAFIA</dt><dd className="text-sm text-paper/75 sm:col-span-3">Clip-path de baixo para cima · escala 1,18 → 1 em 2s.</dd></div>
                <div className="grid gap-2 border-b border-paper/15 py-4 sm:grid-cols-4"><dt className="eyebrow text-brand-gold-light">HOVER</dt><dd className="text-sm text-paper/75 sm:col-span-3">CTA varre o fundo em 500ms; seta sai e retorna na diagonal.</dd></div>
                <div className="grid gap-2 border-b border-paper/15 py-4 sm:grid-cols-4"><dt className="eyebrow text-brand-gold-light">SCROLL</dt><dd className="text-sm text-paper/75 sm:col-span-3">Parallax do Hero e equipe; estados centrais mobile usam IntersectionObserver.</dd></div>
              </dl>
              <Reveal className="mt-8 flex flex-wrap gap-3">
                <Cta href="#contato" variant="emerald">Conhecer o trabalho</Cta>
                <Cta href="#contato" variant="ghost-light">Entrar em contato</Cta>
              </Reveal>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5 lg:col-start-9 lg:grid-cols-1">
              <figure>
                <Reveal centerActive className="reveal-photo aspect-[4/5] overflow-hidden">
                  <img src={portrait} alt="Retrato profissional de Renata de Almeida Ramos" width={864} height={1536} loading="lazy" decoding="async" className="h-full w-full object-cover object-top grayscale transition-[filter] duration-700 hover:grayscale-0" />
                </Reveal>
                <figcaption className="mt-3 eyebrow text-paper/60">HOVER DESKTOP · COR NATURAL NO CENTRO MOBILE</figcaption>
              </figure>
              <div>
                <p className="eyebrow mb-4 text-brand-gold-light">ABORDAGEM · ESTADO DE FOCO</p>
                <ol className="grid grid-cols-2 gap-px bg-paper/20 sm:grid-cols-4 lg:grid-cols-2">
                  {approachSteps.map((step, index) => (
                    <Reveal as="li" centerActive key={step} className="approach-step group bg-paper-deep p-3 text-ink">
                      <span className="approach-step-number display text-4xl text-ink/20 transition-colors duration-500 group-hover:text-emerald">{index + 1}</span>
                      <p className="mt-2 text-xs font-semibold">{step}</p>
                    </Reveal>
                  ))}
                </ol>
                <p className="mt-3 text-xs text-paper/60">`prefers-reduced-motion` remove as transições e animações de entrada do sistema.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="abordagem" className="bg-paper-deep py-20 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <SectionTag n="05">Responsividade e estrutura</SectionTag>
          <Reveal className="mt-10 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h2 className="display text-5xl md:text-7xl">Ritmo responsivo, <span className="serif-italic text-emerald">sem perder clareza.</span></h2>
              <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">Container principal de até 1440px, margens de 20px no mobile e 40px em `md`; a grade cresce por breakpoints reais do Tailwind.</p>
              <dl className="mt-8 border-t border-ink/15">
                {[
                  ["sm · 640px", "Primeiro rearranjo de colunas e rótulos."],
                  ["md · 768px", "Grade de 12 colunas, paddings de 40px e navegação ainda móvel."],
                  ["lg · 1024px", "Navegação desktop e cards empresariais em três colunas."],
                  ["xl · 1280px", "Escala ampla de títulos e refinamento do grid."],
                ].map(([bp, description]) => (
                  <div key={bp} className="grid gap-2 border-b border-ink/15 py-4 sm:grid-cols-3">
                    <dt className="font-mono text-sm text-brand-gold-deep">{bp}</dt>
                    <dd className="text-sm text-muted-foreground sm:col-span-2">{description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="eyebrow text-brand-gold-deep">NAVEGAÇÃO · COMPONENTE REAL</p>
              <div className="mt-4 flex items-center justify-between rounded-full bg-ink px-4 py-3 text-paper md:px-6">
                <div className="flex items-center gap-3">
                  <img src="/logo-renata-simbolo.png" alt="" width={406} height={486} className="h-9 w-9 rounded-full bg-emerald object-contain p-1" />
                  <span className="hidden sm:block"><strong className="block text-sm">Renata de Almeida Ramos</strong><span className="eyebrow text-[0.55rem] text-paper/60">Clínica · Esportiva · Empresarial</span></span>
                </div>
                <span className="eyebrow text-brand-gold-light">MENU · FIXO</span>
              </div>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li><span className="font-mono text-brand-gold-deep">MOBILE</span> · marca compacta e menu editorial em tela cheia.</li>
                <li><span className="font-mono text-brand-gold-deep">DESKTOP</span> · links inline a partir de `lg`.</li>
                <li><span className="font-mono text-brand-gold-deep">TOQUE</span> · estados centrais por `(hover: none) and (pointer: coarse)`, independentes da largura.</li>
                <li><span className="font-mono text-brand-gold-deep">ACESSIBILIDADE</span> · foco visível, menu com Escape e `prefers-reduced-motion`.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contato" className="grain bg-emerald py-16 text-paper md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <SectionTag n="06" light>Contato e rodapé</SectionTag>
          <Reveal className="mt-8 flex flex-col justify-between gap-8 border-t border-brand-gold-light/30 pt-8 md:flex-row md:items-end">
            <div>
              <p className="display text-4xl md:text-6xl">Duas rotas, <span className="serif-italic text-brand-gold-light">um contato.</span></p>
              <p className="mt-4 text-sm text-paper/80">O CTA de e-mail abre a composição do Gmail; WhatsApp mantém seu destino próprio.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Cta href="https://mail.google.com/mail/?view=cm&fs=1&to=rena.serpsicologia%40gmail.com" variant="solid-white-hover" target="_blank" rel="noopener noreferrer">Enviar e-mail</Cta>
              <Cta href="https://wa.me/5534988452910" variant="ghost-light">WhatsApp</Cta>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-ink text-paper">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-12 md:grid-cols-12 md:px-10">
          <div className="md:col-span-5">
            <p className="display text-4xl">Renata de<br />Almeida Ramos</p>
            <p className="mt-3 text-sm text-paper/70">Psicóloga Clínica, Esportiva e Empresarial</p>
            <p className="eyebrow mt-2 text-brand-gold-light">CRP 04/39275 · 06/001349-IS</p>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow text-brand-gold-light">CONTATO</p>
            <p className="mt-3 text-sm text-paper/80">rena.serpsicologia@gmail.com</p>
            <p className="mt-1 text-sm text-paper/80">+55 (34) 98845-2910</p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link to="/" className="eyebrow text-paper/65 transition-colors hover:text-brand-gold-light">← Voltar à página inicial</Link>
            <p className="mt-5 text-xs text-paper/50">Cores, tipografia, estados e animações da interface.</p>
          </div>
        </div>
        <div className="border-t border-brand-gold-light/20 px-5 py-4 text-center font-mono text-[0.65rem] text-paper/45">© {new Date().getFullYear()} · SISTEMA VISUAL</div>
      </footer>
    </main>
  );
}

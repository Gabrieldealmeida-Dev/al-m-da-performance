import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, type CSSProperties } from "react";
import { Nav } from "@/components/site/Nav";
import { Reveal, Lines } from "@/components/site/Reveal";
import { Cta, SectionTag } from "@/components/site/ui";
import { absolutePublicUrl } from "@/lib/site-seo";
import hero from "@/assets/hero-athlete.jpg";
import portrait from "@/assets/renata-profissional.jpg.jpeg";
import team from "@/assets/team.jpg";
import corporate from "@/assets/renata-palestra.jpeg";

const seoTitle = "Renata de Almeida Ramos | Psicóloga no Guarujá";
const seoDescription = "Psicologia clínica, esportiva e empresarial no Guarujá. Atendimento psicológico, preparação mental de atletas e desenvolvimento de lideranças.";
const canonicalUrl = absolutePublicUrl("/");
const socialImageUrl = absolutePublicUrl("/og-renata.svg");
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Renata de Almeida Ramos",
  jobTitle: "Psicóloga Clínica, Esportiva e Empresarial",
  description: seoDescription,
  email: "rena.serpsicologia@gmail.com",
  identifier: [
    { "@type": "PropertyValue", propertyID: "CRP", value: "04/39275" },
    { "@type": "PropertyValue", propertyID: "CRP", value: "06/001349-IS" },
  ],
  knowsAbout: [
    "Psicologia clínica",
    "Psicologia esportiva",
    "Psicologia empresarial",
    "Desenvolvimento de lideranças",
    "Saúde mental no trabalho",
    "Riscos psicossociais",
  ],
  sameAs: ["https://www.instagram.com/psi_renataalmeida/"],
  ...(canonicalUrl ? { url: canonicalUrl } : {}),
  ...(socialImageUrl ? { image: socialImageUrl } : {}),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: seoTitle },
      { name: "description", content: seoDescription },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "Renata de Almeida Ramos" },
      { property: "og:title", content: seoTitle },
      { property: "og:description", content: seoDescription },
      { name: "twitter:card", content: socialImageUrl ? "summary_large_image" : "summary" },
      { name: "twitter:title", content: seoTitle },
      { name: "twitter:description", content: seoDescription },
      ...(canonicalUrl ? [{ property: "og:url", content: canonicalUrl }] : []),
      ...(socialImageUrl
        ? [
            { property: "og:image", content: socialImageUrl },
            { property: "og:image:type", content: "image/svg+xml" },
            { property: "og:image:width", content: "1200" },
            { property: "og:image:height", content: "630" },
            { property: "og:image:alt", content: "Renata de Almeida Ramos, Psicóloga Clínica, Esportiva e Empresarial no Guarujá" },
            { name: "twitter:image", content: socialImageUrl },
            { name: "twitter:image:alt", content: "Renata de Almeida Ramos, Psicóloga Clínica, Esportiva e Empresarial no Guarujá" },
          ]
        : []),
    ],
    links: canonicalUrl ? [{ rel: "canonical", href: canonicalUrl }] : [],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(personJsonLd) }],
  }),
  component: Index,
});

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;
const whatsappMessages = {
  clinic: "Olá! Gostaria de informações sobre atendimento psicológico.",
  sport: "Olá! Gostaria de saber mais sobre o acompanhamento psicológico esportivo.",
  business: "Olá! Gostaria de informações sobre os projetos de psicologia empresarial.",
  talks: "Olá! Gostaria de solicitar uma proposta para palestra ou treinamento.",
};
const whatsappUrl = (message: string) =>
  `https://wa.me/5534988452910?text=${encodeURIComponent(message)}`;

function useScrollVar(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => {
      if (motionPreference.matches) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const p = Math.min(Math.max(-r.top / r.height, 0), 1);
        el.style.setProperty("--p", p.toFixed(3));
      });
    };
    const onMotionPreferenceChange = () => {
      cancelAnimationFrame(raf);
      if (!motionPreference.matches) on();
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    motionPreference.addEventListener("change", onMotionPreferenceChange);
    return () => {
      window.removeEventListener("scroll", on);
      motionPreference.removeEventListener("change", onMotionPreferenceChange);
      cancelAnimationFrame(raf);
    };
  }, [ref]);
}

function Index() {
  return (
    <main id="top" className="overflow-x-clip">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Clinic />
      <Sport />
      <SportJourney />
      <Teams />
      <Companies />
      <Approach />
      <Contact />
      <Footer />
    </main>
  );
}

/* ───────────────────────── HERO ───────────────────────── */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  useScrollVar(ref);
  return (
    <section ref={ref} className="grain relative min-h-[100svh] overflow-hidden bg-ink text-paper">
      {/* Photo: mobile full-bleed under text, desktop right column. Parallax + scale on scroll */}
      <Reveal threshold={0} className="absolute inset-0 md:inset-y-0 md:left-auto md:right-0 md:w-[46%]">
        <div className="reveal-photo h-full w-full" style={d(200)}>
          <img
            src={hero}
            alt="Atleta concentrada na posição de largada"
            width={1280}
            height={1600}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-[50%_20%] opacity-60 md:opacity-100"
            style={{ translate: "0 calc(var(--p,0) * 12%)" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10 md:bg-gradient-to-r md:from-ink md:via-ink/0 md:to-ink/0" />
      </Reveal>

      {/* Focus crosshair on athlete's gaze */}
      <div className="pointer-events-none absolute right-[18%] top-[30%] hidden md:block">
        <div className="relative h-24 w-24">
          <span className="absolute left-1/2 top-0 h-full w-px bg-emerald-glow/70" />
          <span className="absolute left-0 top-1/2 h-px w-full bg-emerald-glow/70" />
          <span className="absolute inset-5 rounded-full border border-emerald-glow/80" />
          <span className="pulse-dot absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-glow" />
        </div>
        <span className="eyebrow mt-2 block text-[0.6rem] text-emerald-glow">foco · 00:00:01</span>
      </div>

      {/* Trajectory line */}
      <Reveal threshold={0} className="pointer-events-none absolute inset-0">
        <svg className="trajectory absolute bottom-[14%] left-0 h-[50%] w-full" viewBox="0 0 1440 400" preserveAspectRatio="none" fill="none">
          <path d="M-20 360 C 300 360, 420 300, 640 240 S 1100 60, 1460 40" stroke="var(--emerald-glow)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        </svg>
      </Reveal>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-end px-5 pb-8 pt-32 md:px-10 md:pb-10">
        <Reveal threshold={0} className="eyebrow mb-6 flex items-center gap-3 text-paper/70">
          <span className="fade-up flex items-center gap-3" style={d(100)}>
            <span className="h-2 w-2 rounded-full bg-brand-gold-light transition-colors duration-500" /> Renata de Almeida Ramos — Psicóloga
          </span>
        </Reveal>

        <Reveal threshold={0} as="h1" className="display text-[13.5vw] md:text-[10.4vw]" style={{ translate: "0 calc(var(--p,0) * -30%)" }}>
          <Lines
            start={250}
            step={110}
            lines={[
              <>A performance</>,
              <>vai além</>,
              <span className="serif-italic text-[0.92em] text-emerald-glow">do que se vê.</span>,
            ]}
          />
        </Reveal>

        <Reveal threshold={0} className="mt-8 grid gap-8 border-t border-paper/15 pt-6 md:mt-10 md:grid-cols-12 md:items-end">
          <p className="fade-up max-w-md text-base leading-relaxed text-paper/80 md:col-span-5 md:text-lg" style={d(700)}>
            Psicologia, preparação mental e desenvolvimento humano para os desafios do esporte e da vida profissional.
          </p>
          <div className="fade-up flex flex-wrap gap-3 md:col-span-7" style={d(820)}>
            <Cta href="#sobre" variant="emerald">Conhecer o trabalho</Cta>
            <Cta href="#contato" variant="ghost-light">Entrar em contato</Cta>
          </div>
        </Reveal>
      </div>

    </section>
  );
}

/* Transition band: tilted strip that cuts from hero into paper */
function Marquee() {
  const words = ["Concentração", "Confiança", "Pressão", "Equipe", "Liderança", "Trajetória", "Foco", "Desenvolvimento"];
  return (
    <div className="relative z-10 -mt-6 -rotate-2 bg-emerald py-4 text-paper shadow-2xl md:-mt-8 md:py-5">
      <div className="marquee-track">
        {[...words, ...words].map((w, i) => (
          <span key={i} className="display flex items-center gap-8 px-4 text-3xl md:text-5xl">
            {i % 2 ? <span className="serif-italic">{w}</span> : w}
            <span className="h-2.5 w-2.5 rotate-45 bg-ink" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────── SOBRE ───────────────────────── */
function About() {
  return (
    <section id="sobre" className="relative mx-auto max-w-[1440px] px-5 pb-24 pt-28 md:px-10 md:pb-36 md:pt-40">
      <Reveal className="grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5 md:col-start-1">
          <SectionTag n="01">Quem sou</SectionTag>
          <div className="relative mt-10">
            <Reveal centerActive centerActiveOnDesktop className="reveal-photo aspect-[4/5] overflow-hidden" style={d(150)}>
              <img
                src={portrait}
                alt="Retrato de Renata de Almeida Ramos"
                width={864}
                height={1536}
                loading="lazy"
                decoding="async"
                className="h-full w-full origin-top object-cover object-top grayscale transition-[filter] duration-700 hover:grayscale-0"
              />
            </Reveal>
            <div className="absolute -bottom-6 -right-4 bg-ink px-5 py-4 text-paper md:-right-10">
              <p className="eyebrow text-paper/60">Registro profissional</p>
              <p className="mt-1 font-semibold">CRP 04/39275</p>
              <p className="text-sm text-paper/70">06/001349-IS</p>
            </div>
            <span className="eyebrow absolute -left-2 top-0 origin-top-left -rotate-90 -translate-x-full text-muted-foreground">fig. 01 — Renata de Almeida Ramos</span>
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7 md:pt-16">
          <h2 className="display text-[clamp(2.5rem,10vw,3rem)] md:text-5xl lg:text-7xl xl:text-8xl">
            <Lines lines={["Potencial em", <span className="serif-italic text-emerald">desenvolvimento.</span>]} />
          </h2>
          <p className="fade-up mt-10 font-serif text-2xl leading-snug md:text-3xl" style={d(300)}>
            “Meu propósito é utilizar a psicologia para transformar potencial em desenvolvimento, desafios em aprendizado e
            conhecimento em mudanças reais.”
          </p>
          <div className="fade-up mt-8 max-w-xl space-y-4 leading-relaxed text-muted-foreground" style={d(400)}>
            <p>
              Sou Renata de Almeida Ramos, psicóloga com uma atuação que integra três grandes áreas: clínica, esportiva e
              empresarial. Acredito que compreender o comportamento humano é fundamental para desenvolver pessoas,
              fortalecer relações, superar desafios e alcançar resultados sustentáveis.
            </p>
            <p>
              Atuo com crianças, adolescentes e adultos, atletas de alto rendimento, líderes, empresários e equipes
              organizacionais — unindo conhecimento técnico, escuta humanizada e intervenções práticas.
            </p>
          </div>

          <dl className="fade-up mt-12 grid grid-cols-2 border-t border-ink/15" style={d(500)}>
            {[
              ["+15", "anos de experiência"],
              ["+27 mil", "atendimentos realizados"],
              ["3", "áreas integradas: clínica, esportiva e empresarial"],
              ["Guarujá", "SP · Baixada Santista"],
            ].map(([k, v]) => (
              <div key={v} className="relative flex flex-col items-center justify-center border-b border-ink/15 py-6 text-center before:absolute before:left-0 before:top-0 before:h-px before:w-8 before:bg-brand-gold/70 odd:pr-4 even:border-l even:pl-4 md:odd:pr-6 md:even:pl-6">
                <dt className={`display text-5xl md:text-6xl ${k?.startsWith("+") ? "text-brand-gold-deep" : "text-ink"}`}>{k}</dt>
                <dd className="mt-2 text-sm text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}

/* ───────────────────────── CLÍNICA ───────────────────────── */
const clinic = [
  "Ansiedade, estresse e dificuldades emocionais",
  "Autoestima e autoconfiança",
  "Relacionamentos e conflitos familiares",
  "Desenvolvimento pessoal e autoconhecimento",
  "Crianças, adolescentes e adultos",
  "Mudanças e transições de vida",
];

function Clinic() {
  return (
    <section id="clinica" className="relative bg-paper-deep py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="md:col-span-5">
            <SectionTag n="02">Psicologia clínica</SectionTag>
            <h2 className="display mt-8 text-6xl md:text-[6vw]">
              <Lines lines={["Cuidar", <>de <span className="serif-italic text-emerald">dentro</span></>, "para fora."]} />
            </h2>
            <p className="fade-up mt-8 max-w-md leading-relaxed text-muted-foreground" style={d(300)}>
              Atendimento psicológico individualizado, com foco na saúde emocional, qualidade de vida e autoconhecimento.
            </p>
            <div className="fade-up mt-8" style={d(380)}>
              <Cta href={whatsappUrl(whatsappMessages.clinic)} variant="solid">WhatsApp</Cta>
            </div>
          </div>
          <ul className="grid self-end sm:grid-cols-2 md:col-span-6 md:col-start-7">
            {clinic.map((c, i) => (
              <li key={c} className="fade-up group flex gap-4 border-t border-ink/15 py-5 pr-4" style={d(i * 70)}>
                <span className="font-mono text-xs text-emerald">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-lg leading-snug transition-transform duration-500 group-hover:translate-x-2">{c}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── ESPORTE ───────────────────────── */
const sport = [
  ["Preparação para competições", "Preparação psicológica para o momento da prova, construída ao longo da rotina de treinos."],
  ["Ansiedade e pressão", "Controle da ansiedade e da pressão competitiva, com recursos para atuar sob expectativa."],
  ["Foco e autoconfiança", "Concentração, foco e autoconfiança para sustentar o desempenho."],
  ["Derrotas e frustrações", "Gestão emocional diante de derrotas e frustrações, com motivação e fortalecimento psicológico."],
];

function Sport() {
  return (
    <section id="esporte" className="grain relative overflow-hidden bg-ink py-24 text-paper md:py-36">
      <div aria-hidden className="display text-outline pointer-events-none absolute -right-[4vw] top-10 select-none text-[34vw] leading-none text-paper/10 md:text-[24vw]">
        Pressão
      </div>
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionTag n="03" light>Psicologia esportiva</SectionTag>
            <h2 className="display mt-8 text-[17vw] md:text-[8.5vw]">
              <Lines lines={["O jogo", <>também se <span className="serif-italic text-emerald-glow">treina</span></>, "por dentro."]} />
            </h2>
          </div>
          <div className="fade-up self-end md:col-span-4 md:col-start-9" style={d(300)}>
            <p className="leading-relaxed text-paper/70">
              Preparação e acompanhamento psicológico de atletas e equipes esportivas, desenvolvendo recursos emocionais
              que favoreçam o desempenho e o bem-estar.
            </p>
            <div className="mt-6">
              <Cta href={whatsappUrl(whatsappMessages.sport)} variant="ghost-light">WhatsApp</Cta>
            </div>
          </div>
        </Reveal>

        <ul className="mt-16 border-t border-paper/15 md:mt-24">
          {sport.map(([t, desc], i) => (
            <Reveal as="li" key={t} className="border-b border-paper/15">
              <div tabIndex={0} className="group grid cursor-default grid-cols-12 items-baseline gap-4 py-6 outline-none md:py-8">
                <span className="col-span-2 font-mono text-sm text-brand-gold transition-colors group-hover:text-emerald-glow group-focus:text-emerald-glow md:col-span-1">
                  /{String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display col-span-10 min-w-0 text-[clamp(1.625rem,8vw,2.25rem)] leading-[1.05] transition-transform duration-500 group-hover:translate-x-4 md:col-span-7 md:text-7xl md:leading-[0.84]">
                  <span className="fade-up block w-full break-words" style={d(i * 80)}>{t}</span>
                </h3>
                <p className="col-span-12 text-paper/70 md:col-span-4 md:col-start-9 md:translate-y-2 md:opacity-40 md:transition-all md:duration-500 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus:opacity-100">
                  {desc}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SportJourney() {
  return (
    <section className="relative bg-paper-deep py-20 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal className="grid gap-10 md:grid-cols-12 md:items-end lg:items-center">
          <h2 className="display text-[14vw] md:col-span-6 md:text-[6vw]">
            <Lines
              lines={[
                "A mente",
                "também faz parte",
                <span className="serif-italic text-emerald">da conquista.</span>,
              ]}
            />
          </h2>
          <p
            className="fade-up max-w-2xl font-serif text-xl leading-relaxed text-muted-foreground md:col-span-5 md:col-start-8 md:text-2xl"
            style={d(250)}
          >
            Minha trajetória na psicologia esportiva inclui a atuação junto à Seleção Brasileira Paralímpica de Levantamento de Peso, acompanhando desafios relacionados à preparação psicológica, à pressão competitiva, à confiança e ao desenvolvimento dos atletas. Essa experiência fortaleceu minha compreensão de que a performance vai além do resultado: envolve pessoas, histórias, relações, preparação e capacidade de lidar com desafios.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── EQUIPES ───────────────────────── */
function Teams() {
  const ref = useRef<HTMLElement>(null);
  useScrollVar(ref);
  return (
    <section id="equipes" ref={ref} className="relative bg-ink text-paper">
      <Reveal className="relative h-[80svh] overflow-hidden md:h-[110vh]">
        <div className="reveal-photo absolute inset-0">
          <img
            src={team}
            alt="Equipe reunida em círculo antes do jogo"
            width={1600}
            height={1008}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
            style={{ scale: "calc(1 + var(--p,0) * 0.15)" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/70" />
        <div className="relative mx-auto flex h-full max-w-[1440px] flex-col justify-between px-5 py-16 md:px-10 md:py-24">
          <SectionTag n="04" light>Equipes e comissões</SectionTag>
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <h2 className="display text-[15vw] md:col-span-8 md:text-[7.5vw]">
              <Lines lines={["Ninguém", <>vence <span className="serif-italic text-emerald-glow">sozinho.</span></>]} />
            </h2>
            <div className="fade-up space-y-4 md:col-span-4" style={d(300)}>
              {["Atletas de base e alto rendimento", "Técnicos e comissões esportivas", "Orientação a familiares"].map((x) => (
                <div key={x} className="flex items-center justify-between border-b border-paper/25 pb-3 text-lg">
                  {x} <span className="h-1.5 w-1.5 rounded-full bg-emerald-glow" />
                </div>
              ))}
              <p className="pt-2 text-sm text-paper/70">O desempenho é construído em rede: atleta, família e comissão técnica.</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ───────────────────────── EMPRESAS ───────────────────────── */
const corp = [
  {
    k: "Desenvolvimento de lideranças", f: "Liderança · equipes", message: whatsappMessages.talks,
    items: ["Capacitação de líderes", "Comunicação assertiva e gestão de conflitos", "Delegação, engajamento e gestão de equipes", "Inteligência emocional", "Motivação e performance", "Palestras, workshops e treinamentos"],
  },
  {
    k: "Consultoria e desenvolvimento organizacional", f: "Consultoria organizacional", message: whatsappMessages.business,
    items: ["Diagnósticos e cultura organizacional", "Gestão de pessoas", "Organização de processos", "Definição de responsabilidades", "Acompanhamento de mudanças", "Prevenção do absenteísmo"],
  },
  {
    k: "Saúde mental e riscos psicossociais", f: "Psicologia ocupacional", message: whatsappMessages.business,
    items: ["Avaliações psicológicas e psicossociais", "Análise de riscos psicossociais", "Adequação à NR-01", "Promoção da saúde mental e prevenção do adoecimento", "Prevenção de estresse e burnout", "Programas de bem-estar · ansiedade e saúde mental"],
  },
];

function Companies() {
  const serviceCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = serviceCardsRef.current;
    if (!grid) return;

    const media = window.matchMedia("(hover: none) and (pointer: coarse)");
    const cards = Array.from(grid.querySelectorAll<HTMLElement>("article"));
    let observer: IntersectionObserver | undefined;

    const clearActive = () => cards.forEach((card) => card.classList.remove("is-active"));
    const updateActive = () => {
      const viewportCenter = window.innerHeight / 2;
      const bandInset = window.innerHeight * 0.38;
      const candidates = cards
        .map((card) => ({ card, rect: card.getBoundingClientRect() }))
        .filter(({ rect }) => rect.bottom > bandInset && rect.top < window.innerHeight - bandInset);
      const active = candidates.reduce<HTMLElement | null>((closest, candidate) => {
        if (!closest) return candidate.card;
        const closestRect = closest.getBoundingClientRect();
        const closestDistance = Math.abs((closestRect.top + closestRect.bottom) / 2 - viewportCenter);
        const candidateDistance = Math.abs((candidate.rect.top + candidate.rect.bottom) / 2 - viewportCenter);
        return candidateDistance < closestDistance ? candidate.card : closest;
      }, null);
      cards.forEach((card) => card.classList.toggle("is-active", card === active));
    };

    const observeCenter = () => {
      observer?.disconnect();
      clearActive();
      if (!media.matches) return;
      const inset = Math.round(window.innerHeight * 0.38);
      observer = new IntersectionObserver(updateActive, {
        rootMargin: `-${inset}px 0px -${inset}px 0px`,
      });
      cards.forEach((card) => observer?.observe(card));
    };

    observeCenter();
    media.addEventListener("change", observeCenter);
    window.addEventListener("resize", observeCenter);

    return () => {
      observer?.disconnect();
      media.removeEventListener("change", observeCenter);
      window.removeEventListener("resize", observeCenter);
      clearActive();
    };
  }, []);

  return (
    <section id="empresas" className="relative bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionTag n="05">Psicologia empresarial</SectionTag>
            <h2 className="display mt-8 text-5xl leading-[0.92] sm:text-6xl lg:text-5xl xl:text-6xl">
              <Lines
                lines={[
                  "EMPRESAS",
                  "EVOLUEM COM",
                  <span className="serif-italic text-emerald">pessoas.</span>,
                ]}
              />
            </h2>
            <p className="fade-up mt-8 max-w-md leading-relaxed text-muted-foreground" style={d(300)}>
              Assim como no esporte, o desempenho profissional não depende apenas de conhecimento técnico. Envolve
              equilíbrio emocional, preparação, disciplina, confiança, comunicação e capacidade de adaptação.
            </p>
          </div>
            <div className="relative lg:col-span-5 lg:col-start-8">
            <div className="reveal-photo aspect-[4/3] overflow-hidden" style={d(150)}>
              <img src={corporate} alt="Treinamento com equipe corporativa" width={1280} height={854} loading="lazy" decoding="async" className="h-full w-full object-cover object-[54%_center] md:object-center" />
            </div>
            <span className="absolute -left-3 -top-3 h-6 w-6 border-l-2 border-t-2 border-brand-gold" />
            <span className="absolute -bottom-3 -right-3 h-6 w-6 border-b-2 border-r-2 border-brand-gold" />
          </div>
        </Reveal>

        <div ref={serviceCardsRef} className="mt-16 grid gap-px bg-ink/15 md:mt-24 lg:mt-16 lg:grid-cols-3">
          {corp.map((c, i) => (
            <Reveal key={c.k} className={i === 1 ? "lg:translate-y-12" : ""}>
              <article className="fade-up group relative h-full overflow-hidden bg-paper p-8 md:p-10" style={d(i * 120)}>
                <span className="absolute inset-0 translate-y-full bg-ink transition-transform duration-700 ease-[cubic-bezier(.2,.8,.1,1)] group-hover:translate-y-0" />
                <div className="relative transition-colors duration-500 group-hover:text-paper">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-brand-gold-deep transition-colors duration-500 group-hover:text-brand-gold-light">0{i + 1}</span>
                    <span className="eyebrow rounded-full border border-current/30 px-3 py-1 opacity-60">{c.f}</span>
                  </div>
                  <h3 className="display mt-12 text-5xl">{c.k}</h3>
                  <ul className="mt-6 space-y-2 text-sm opacity-80">
                    {c.items.map((x) => (
                      <li key={x} className="flex gap-3"><span className="mt-2 h-px w-3 shrink-0 bg-current" />{x}</li>
                    ))}
                  </ul>
                  <a
                    href={whatsappUrl(c.message)}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold"
                  >
                    <span className="sweep">Solicitar proposta</span> →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-20 max-w-2xl text-sm text-muted-foreground md:mt-24">
          As atividades são personalizadas de acordo com o público e os objetivos de cada organização, podendo incluir
          dinâmicas, experiências práticas e metodologias participativas.
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────── ABORDAGEM ───────────────────────── */
const steps = [
  ["Escuta", "humanizada", "Compreensão da história, do contexto e dos objetivos de cada pessoa ou organização."],
  ["Diagnóstico", "das necessidades", "Identificação do que precisa ser desenvolvido, cuidado ou ajustado."],
  ["Intervenção", "prática", "Ações planejadas com conhecimento técnico, respeitando a individualidade."],
  ["Acompanhamento", "contínuo", "Revisão do processo para que o aprendizado se torne mudança real."],
];

function Approach() {
  return (
    <section id="abordagem" className="relative overflow-hidden bg-paper-deep py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionTag n="06">Abordagem</SectionTag>
            <h2 className="display mt-8 text-6xl md:text-8xl">
              <Lines lines={["Um processo,", <span className="serif-italic text-emerald">não um atalho.</span>]} />
            </h2>
          </div>
          <p className="fade-up max-w-sm text-muted-foreground" style={d(300)}>
            A experiência em ambientes clínicos, esportivos e corporativos permite uma compreensão ampliada do comportamento humano.
          </p>
        </Reveal>

        <Reveal className="relative mt-20">
          <svg className="trajectory absolute -top-6 left-0 hidden h-24 w-full md:block" viewBox="0 0 1200 100" preserveAspectRatio="none" fill="none">
            <path d="M0 90 C 200 90, 250 70, 400 60 S 700 40, 800 30 S 1050 10, 1200 5" stroke="var(--brand-gold-deep)" strokeWidth="1.5" strokeDasharray="4 6" vectorEffect="non-scaling-stroke" />
          </svg>
          <ol className="grid gap-0 md:grid-cols-4">
            {steps.map(([a, b, t], i) => (
              <Reveal as="li" centerActive key={a} className="approach-step fade-up group relative border-l border-ink/20 py-6 pl-6 md:pt-24" style={d(i * 150)}>
                <span className="absolute -left-[7px] top-8 h-3 w-3 rounded-full border-2 border-ink bg-paper-deep transition-colors group-hover:bg-emerald md:top-[calc(6rem-6px)]" />
                <span className="approach-step-number display text-8xl text-ink/10 transition-colors duration-500 group-hover:text-emerald md:text-9xl">{i + 1}</span>
                <h3 className="mt-2 text-xl font-semibold">{a}</h3>
                <p className="serif-italic text-xl text-muted-foreground">{b}</p>
                <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">{t}</p>
              </Reveal>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── CONTATO ───────────────────────── */
function Contact() {
  return (
    <section id="contato" className="grain relative overflow-hidden bg-emerald text-paper">
      <div className="relative mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        <SectionTag n="07" light>Contato</SectionTag>
        <Reveal as="h2" className="display mt-10 text-[16vw] md:text-[10vw]">
          <Lines lines={["Vamos construir", <span className="serif-italic text-brand-gold-light">novas possibilidades?</span>]} />
        </Reveal>
        <Reveal className="mt-12 grid gap-10 border-t border-paper/25 pt-10 md:grid-cols-12">
          <p className="fade-up text-lg leading-relaxed md:col-span-5" style={d(200)}>
            Seja para cuidar da sua saúde emocional, fortalecer sua performance esportiva ou desenvolver sua organização,
            a psicologia pode ser uma importante aliada nessa jornada.
          </p>
          <div className="fade-up flex flex-wrap gap-3 md:col-span-6 md:col-start-7 md:justify-end" style={d(320)}>
            <Cta href="https://mail.google.com/mail/?view=cm&fs=1&to=rena.serpsicologia%40gmail.com" variant="solid-white-hover" target="_blank" rel="noopener noreferrer">Enviar e-mail</Cta>
            <Cta href="https://wa.me/5534988452910" variant="ghost-light">WhatsApp</Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── FOOTER ───────────────────────── */
function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <p className="display text-5xl">Renata de<br />Almeida Ramos</p>
          <p className="mt-4 text-paper/70">Psicóloga Clínica, Esportiva e Empresarial</p>
          <p className="eyebrow mt-2 text-brand-gold-light">CRP 04/39275 · 06/001349-IS</p>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow text-brand-gold-light">Contato</p>
          <ul className="mt-4 space-y-2 text-paper/80">
            <li><a href="mailto:rena.serpsicologia@gmail.com">rena.serpsicologia@gmail.com</a></li><li><a href="https://wa.me/5534988452910">+55 (34) 98845-2910</a></li><li>Guarujá – SP · Baixada Santista</li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow text-brand-gold-light">Redes</p>
          <ul className="mt-4 space-y-2 text-paper/80">
            <li><a href="https://www.instagram.com/psi_renataalmeida/" className="sweep">Instagram</a></li><li><a href="https://www.linkedin.com/in/renata-de-almeida-ramos-6893992a/" className="sweep">LinkedIn</a></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow text-brand-gold-light">Projeto</p>
          <ul className="mt-4 space-y-2 text-paper/80">
            <li><Link to="/sistema" className="sweep">Sistema visual</Link></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-2 border-t border-brand-gold-light/25 px-5 py-6 text-xs text-paper/50 md:flex-row md:px-10">
        <span>© {new Date().getFullYear()} Renata de Almeida Ramos — Todos os direitos reservados.</span>
        <span>Este site não oferece atendimento de emergência. Em caso de crise, ligue 188 (CVV).</span>
      </div>
    </footer>
  );
}

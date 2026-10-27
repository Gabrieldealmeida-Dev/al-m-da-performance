import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, type CSSProperties } from "react";
import { Nav } from "@/components/site/Nav";
import { Reveal, Lines } from "@/components/site/Reveal";
import { Cta, SectionTag, Todo } from "@/components/site/ui";
import hero from "@/assets/hero-athlete.jpg";
import portrait from "@/assets/portrait.jpg";
import team from "@/assets/team.jpg";
import corporate from "@/assets/corporate.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Psicologia Esportiva e Desenvolvimento Humano | [Nome da Psicóloga]" },
      { name: "description", content: "Psicologia, preparação mental e desenvolvimento humano para atletas, equipes e empresas." },
      { property: "og:title", content: "A performance vai além do que se vê." },
      { property: "og:description", content: "Psicologia, preparação mental e desenvolvimento humano para os desafios do esporte e da vida profissional." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

function useScrollVar(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const p = Math.min(Math.max(-r.top / r.height, 0), 1);
        el.style.setProperty("--p", p.toFixed(3));
      });
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [ref]);
}

function Index() {
  return (
    <main id="top" className="overflow-x-clip">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Sport />
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
            <span className="h-2 w-2 rounded-full bg-emerald" /> Edição 01 — Mente em movimento
          </span>
        </Reveal>

        <Reveal threshold={0} as="h1" className="display text-[19vw] md:text-[10.4vw]" style={{ translate: "0 calc(var(--p,0) * -30%)" }}>
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
          <div className="fade-up flex flex-wrap gap-3 md:col-span-4" style={d(820)}>
            <Cta href="#sobre" variant="emerald">Conhecer o trabalho</Cta>
            <Cta href="#contato" variant="ghost-light">Entrar em contato</Cta>
          </div>
          <ul className="fade-up eyebrow hidden space-y-1.5 text-right text-paper/60 md:col-span-3 md:block" style={d(940)}>
            <li><a href="#esporte" className="hover:text-emerald-glow">01 — Atletas</a></li>
            <li><a href="#equipes" className="hover:text-emerald-glow">02 — Equipes</a></li>
            <li><a href="#empresas" className="hover:text-emerald-glow">03 — Empresas</a></li>
          </ul>
        </Reveal>
      </div>

      {/* Rotating badge */}
      <div className="absolute right-5 top-28 h-24 w-24 md:right-10 md:top-auto md:bottom-44 md:h-32 md:w-32">
        <svg viewBox="0 0 100 100" className="spin-slow h-full w-full">
          <defs><path id="c" d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" /></defs>
          <text className="fill-paper" style={{ fontFamily: "var(--font-mono)", fontSize: 8.4, letterSpacing: 2.2 }}>
            <textPath href="#c">PREPARAÇÃO MENTAL · FOCO · TRAJETÓRIA ·</textPath>
          </text>
        </svg>
        <span className="absolute inset-0 m-auto h-3 w-3 rounded-full bg-ember" />
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
          <SectionTag n="01">Apresentação</SectionTag>
          <div className="relative mt-10">
            <div className="reveal-photo aspect-[4/5] overflow-hidden" style={d(150)}>
              <img src={portrait} alt="Retrato da psicóloga" width={1024} height={1280} loading="lazy" className="h-full w-full object-cover grayscale transition-[filter] duration-700 hover:grayscale-0" />
            </div>
            <div className="absolute -bottom-6 -right-4 bg-ink px-5 py-4 text-paper md:-right-10">
              <p className="eyebrow text-paper/60">Registro</p>
              <p className="mt-1 font-semibold">CRP <Todo>00/00000</Todo></p>
            </div>
            <span className="eyebrow absolute -left-2 top-0 origin-top-left -rotate-90 -translate-x-full text-muted-foreground">fig. 01 — retrato</span>
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7 md:pt-24">
          <h2 className="display text-6xl md:text-8xl">
            <Lines lines={["Mente,", "corpo", <span className="serif-italic text-emerald">e contexto.</span>]} />
          </h2>
          <p className="fade-up mt-10 font-serif text-2xl leading-snug md:text-3xl" style={d(300)}>
            <Todo>Visão de trabalho em 2–3 frases, escrita pela profissional.</Todo>
          </p>
          <p className="fade-up mt-6 max-w-lg leading-relaxed text-muted-foreground" style={d(400)}>
            Um espaço para contar a trajetória com as próprias palavras: como chegou à psicologia do esporte, o que a move e
            como integra o cuidado clínico ao desenvolvimento de pessoas e organizações.
          </p>

          <dl className="fade-up mt-12 grid grid-cols-1 border-t border-ink/15 sm:grid-cols-2" style={d(500)}>
            {[
              ["Formação", "Graduação · instituição · ano"],
              ["Especialização", "Área · instituição"],
              ["Atuação", "Modalidades / contextos"],
              ["Atendimento", "Presencial · online · cidade"],
            ].map(([k, v]) => (
              <div key={k} className="border-b border-ink/15 py-5 sm:odd:pr-6 sm:even:border-l sm:even:pl-6">
                <dt className="eyebrow text-emerald">{k}</dt>
                <dd className="mt-2"><Todo>{v}</Todo></dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}

/* ───────────────────────── ESPORTE ───────────────────────── */
const sport = [
  ["Concentração", "Treinar a atenção para o que importa no momento da execução, em treinos e competições."],
  ["Confiança", "Construir uma relação mais estável com o próprio desempenho, independente do placar."],
  ["Manejo da pressão", "Compreender e regular as respostas ao estresse competitivo, à expectativa e ao erro."],
  ["Desenvolvimento do atleta", "Acompanhar a carreira em suas transições: base, profissionalização, lesões e pós-carreira."],
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
            <SectionTag n="02" light>Psicologia esportiva</SectionTag>
            <h2 className="display mt-8 text-[17vw] md:text-[8.5vw]">
              <Lines lines={["O jogo", <>também se <span className="serif-italic text-emerald-glow">treina</span></>, "por dentro."]} />
            </h2>
          </div>
          <p className="fade-up self-end leading-relaxed text-paper/70 md:col-span-4 md:col-start-9" style={d(300)}>
            Preparação psicológica para atletas de diferentes modalidades e níveis. Os temas abaixo são pontos de partida —
            ajuste-os aos serviços efetivamente oferecidos.
          </p>
        </Reveal>

        {/* Rows expand on hover/focus: number lights up, description slides in */}
        <ul className="mt-16 border-t border-paper/15 md:mt-24">
          {sport.map(([t, desc], i) => (
            <Reveal as="li" key={t} className="border-b border-paper/15">
              <div tabIndex={0} className="group grid cursor-default grid-cols-12 items-baseline gap-4 py-6 outline-none md:py-8">
                <span className="col-span-2 font-mono text-sm text-paper/40 transition-colors group-hover:text-emerald-glow group-focus:text-emerald-glow md:col-span-1">
                  /{String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display col-span-10 text-4xl transition-transform duration-500 group-hover:translate-x-4 md:col-span-6 md:text-7xl">
                  <span className="fade-up inline-block" style={d(i * 80)}>{t}</span>
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

/* ───────────────────────── EQUIPES ───────────────────────── */
function Teams() {
  const ref = useRef<HTMLElement>(null);
  useScrollVar(ref);
  return (
    <section id="equipes" ref={ref} className="relative bg-ink text-paper">
      <Reveal className="relative h-[80svh] overflow-hidden md:h-[110vh]">
        <div className="reveal-photo absolute inset-0">
          <img src={team} alt="Equipe reunida em círculo antes do jogo" width={1600} height={1008} loading="lazy"
            className="h-full w-full object-cover" style={{ scale: "calc(1 + var(--p,0) * 0.15)" }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/70" />
        <div className="relative mx-auto flex h-full max-w-[1440px] flex-col justify-between px-5 py-16 md:px-10 md:py-24">
          <SectionTag n="03" light>Desenvolvimento de equipes</SectionTag>
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <h2 className="display text-[15vw] md:col-span-8 md:text-[7.5vw]">
              <Lines lines={["Ninguém", <>vence <span className="serif-italic text-emerald-glow">sozinho.</span></>]} />
            </h2>
            <div className="fade-up space-y-4 md:col-span-4" style={d(300)}>
              {["Atletas e elencos", "Comissões técnicas e treinadores", "Clubes e organizações esportivas"].map((x) => (
                <div key={x} className="flex items-center justify-between border-b border-paper/25 pb-3 text-lg">
                  {x} <span className="h-1.5 w-1.5 rounded-full bg-emerald-glow" />
                </div>
              ))}
              <p className="pt-2 text-sm text-paper/70">Comunicação, coesão, liderança e clima de grupo. <Todo>confirmar escopo</Todo></p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ───────────────────────── EMPRESAS ───────────────────────── */
const corp = [
  { k: "Capacitações", f: "Formato contínuo", t: "Programas para lideranças e times sobre comunicação, gestão emocional e tomada de decisão sob pressão." },
  { k: "Palestras", f: "Evento · 60–90 min", t: "Conteúdos que traduzem aprendizados do esporte para o contexto profissional, com rigor e linguagem acessível." },
  { k: "Treinamentos", f: "Workshop · imersão", t: "Encontros práticos e aplicados, desenhados a partir das necessidades reais de cada organização." },
];

function Companies() {
  return (
    <section id="empresas" className="relative bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <SectionTag n="04">Serviços para empresas</SectionTag>
            <h2 className="display mt-8 text-6xl md:text-[6.5vw]">
              <Lines lines={["Do campo", <>para a <span className="serif-italic text-emerald">sala</span></>, "de reunião."]} />
            </h2>
          </div>
          <div className="relative md:col-span-5 md:col-start-8">
            <div className="reveal-photo aspect-[4/3] overflow-hidden" style={d(150)}>
              <img src={corporate} alt="Capacitação com equipe corporativa" width={1408} height={1008} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <span className="absolute -left-3 -top-3 h-6 w-6 border-l-2 border-t-2 border-ember" />
            <span className="absolute -bottom-3 -right-3 h-6 w-6 border-b-2 border-r-2 border-ember" />
          </div>
        </Reveal>

        {/* Service cards: ink fill rises on hover, offset grid on desktop */}
        <div className="mt-16 grid gap-px bg-ink/15 md:mt-24 md:grid-cols-3">
          {corp.map((c, i) => (
            <Reveal key={c.k} className={i === 1 ? "md:translate-y-12" : ""}>
              <article className="fade-up group relative h-full overflow-hidden bg-paper p-8 md:p-10" style={d(i * 120)}>
                <span className="absolute inset-0 translate-y-full bg-ink transition-transform duration-700 ease-[cubic-bezier(.2,.8,.1,1)] group-hover:translate-y-0" />
                <div className="relative transition-colors duration-500 group-hover:text-paper">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-emerald">0{i + 1}</span>
                    <span className="eyebrow rounded-full border border-current/30 px-3 py-1 opacity-60">{c.f}</span>
                  </div>
                  <h3 className="display mt-16 text-5xl md:text-6xl">{c.k}</h3>
                  <p className="mt-4 leading-relaxed opacity-75">{c.t}</p>
                  <a href="#contato" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
                    <span className="sweep">Solicitar proposta</span> →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── ABORDAGEM ───────────────────────── */
const steps = [
  ["Compreensão", "do contexto", "Escuta do atleta, da equipe ou da organização: história, ambiente e momento."],
  ["Identificação", "de necessidades", "Mapeamento conjunto do que precisa ser desenvolvido e por quê."],
  ["Planejamento", "da intervenção", "Definição de objetivos, formato, frequência e responsabilidades."],
  ["Acompanhamento", "contínuo", "Revisão periódica do processo e ajustes ao longo da trajetória."],
];

function Approach() {
  return (
    <section id="abordagem" className="relative overflow-hidden bg-paper-deep py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionTag n="05">Abordagem de trabalho</SectionTag>
            <h2 className="display mt-8 text-6xl md:text-8xl">
              <Lines lines={["Um processo,", <span className="serif-italic text-emerald">não um atalho.</span>]} />
            </h2>
          </div>
          <p className="fade-up max-w-sm text-muted-foreground" style={d(300)}>
            Etapas adaptáveis à metodologia da profissional e às demandas de cada contexto.
          </p>
        </Reveal>

        <Reveal className="relative mt-20">
          {/* Trajectory connects steps on desktop */}
          <svg className="trajectory absolute -top-6 left-0 hidden h-24 w-full md:block" viewBox="0 0 1200 100" preserveAspectRatio="none" fill="none">
            <path d="M0 90 C 200 90, 250 70, 400 60 S 700 40, 800 30 S 1050 10, 1200 5" stroke="var(--ember)" strokeWidth="1.5" strokeDasharray="4 6" vectorEffect="non-scaling-stroke" />
          </svg>
          <ol className="grid gap-0 md:grid-cols-4">
            {steps.map(([a, b, t], i) => (
              <li key={a} className="fade-up group relative border-l border-ink/20 py-6 pl-6 md:pt-24" style={{ ...d(i * 150), marginTop: `calc(${(3 - i)} * 0px)` }}>
                <span className="absolute -left-[7px] top-8 h-3 w-3 rounded-full border-2 border-ink bg-paper-deep transition-colors group-hover:bg-emerald md:top-[calc(6rem-6px)]" style={{ transform: `translateY(${-i * 0}px)` }} />
                <span className="display text-8xl text-ink/10 transition-colors duration-500 group-hover:text-emerald md:text-9xl">{i + 1}</span>
                <h3 className="mt-2 text-xl font-semibold">{a}</h3>
                <p className="serif-italic text-xl text-muted-foreground">{b}</p>
                <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">{t}</p>
              </li>
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
        <SectionTag n="06" light>Contato</SectionTag>
        <Reveal as="h2" className="display mt-10 text-[22vw] md:text-[13vw]">
          <Lines lines={["Vamos", <span className="serif-italic">conversar?</span>]} />
        </Reveal>
        <Reveal className="mt-12 grid gap-10 border-t border-paper/25 pt-10 md:grid-cols-12">
          <p className="fade-up text-lg leading-relaxed md:col-span-5" style={d(200)}>
            Para atletas, equipes, clubes ou empresas: conte um pouco sobre o seu contexto e retornarei para entender como
            posso contribuir.
          </p>
          <div className="fade-up flex flex-wrap gap-3 md:col-span-6 md:col-start-7 md:justify-end" style={d(320)}>
            <Cta href="mailto:contato@exemplo.com" variant="solid">Enviar e-mail</Cta>
            <Cta href="https://wa.me/5500000000000" variant="ghost-light">WhatsApp</Cta>
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
          <p className="display text-5xl">[Nome da<br />Psicóloga]</p>
          <p className="eyebrow mt-4 text-paper/60">Psicóloga · CRP [00/00000]</p>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow text-emerald-glow">Contato</p>
          <ul className="mt-4 space-y-2 text-paper/80">
            <li>[e-mail]</li><li>[telefone]</li><li>[cidade / atendimento online]</li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow text-emerald-glow">Redes</p>
          <ul className="mt-4 space-y-2 text-paper/80">
            <li><a href="#" className="sweep">Instagram</a></li><li><a href="#" className="sweep">LinkedIn</a></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow text-emerald-glow">Projeto</p>
          <ul className="mt-4 space-y-2 text-paper/80">
            <li><Link to="/sistema" className="sweep">Sistema visual</Link></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-2 border-t border-paper/10 px-5 py-6 text-xs text-paper/50 md:flex-row md:px-10">
        <span>© {new Date().getFullYear()} — Todos os direitos reservados.</span>
        <span>Este site não oferece atendimento de emergência. Em caso de crise, ligue 188 (CVV).</span>
      </div>
    </footer>
  );
}

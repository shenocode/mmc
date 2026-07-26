/**
 * MMC - Método Movimento Cotidiano
 * Style: Tessitura Orgânica - Organic, warm, earthy palette
 * Colors: Sand (#F5F0E8), Terracotta (#C4704B), Sage (#7A8B6F), Ochre (#D4A843), Warm Brown (#3D2E1C)
 * Fonts: Playfair Display (headings), DM Sans (body), Cormorant Garamond (accent)
 */
import Header from "@/components/Header";
import FadeIn from "@/components/FadeIn";
import OrganicDivider from "@/components/OrganicDivider";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { site, whatsappUrl, buildInterestMessage } from "@/lib/site";
import { ArrowRight, ChevronDown, Sparkles, Heart, Eye, Music2, Users, Brain, Palette, TreePine, Check, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

/* ─────────── HERO ─────────── */
function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={site.assets.hero}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C2419]/80 via-[#2C2419]/60 to-[#2C2419]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container pt-24 pb-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="text-[#D4A843] font-body text-sm tracking-[0.3em] uppercase mb-6 font-medium">
              Método Movimento Cotidiano
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-6"
          >
            Seu corpo já sabe{" "}
            <span className="italic text-[#D4A843]">dançar.</span>
            <br />
            Venha redescobrir.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="text-white/80 text-lg sm:text-xl font-body leading-relaxed max-w-lg mb-10"
          >
            Uma metodologia autoral de educação corporal que transforma os
            movimentos do cotidiano em experiências de presença, criatividade e
            autorregulação emocional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#programa"
              className="inline-flex items-center gap-2 bg-[#C4704B] text-white px-7 py-3.5 rounded-full text-base font-medium hover:bg-[#B06040] transition-all duration-300 hover:shadow-lg hover:shadow-[#C4704B]/30 active:scale-95"
            >
              Conheça o programa
              <ArrowRight size={18} />
            </a>
            <a
              href="#metodo"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-full text-base font-medium hover:bg-white/10 transition-all duration-300"
            >
              Sobre o método
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs tracking-widest uppercase">
            Explorar
          </span>
          <ChevronDown className="text-white/50 animate-bounce" size={20} />
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────── INTRO / O MÉTODO ─────────── */
function MetodoSection() {
  return (
    <section id="metodo" className="relative bg-[#F5F0E8] py-20 lg:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn direction="left">
            <div>
              <p className="text-[#C4704B] font-body text-sm tracking-[0.2em] uppercase mb-4 font-medium">
                O Método
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#3D2E1C] leading-tight mb-6">
                Educação corporal que nasce do{" "}
                <span className="italic text-[#C4704B]">cotidiano</span>
              </h2>
              <p className="text-[#3D2E1C]/70 text-lg font-body leading-relaxed mb-6">
                O MMC utiliza os movimentos presentes na vida cotidiana como
                ponto de partida para o desenvolvimento da consciência corporal,
                da criatividade, da presença e da autorregulação emocional.
              </p>
              <p className="text-[#3D2E1C]/70 text-lg font-body leading-relaxed mb-8">
                Inspirado na dança contemporânea, na educação somática, na
                arte-educação e em estudos sobre corpo e emoção, o método propõe
                experiências práticas que favorecem o bem-estar.
              </p>
              <blockquote className="border-l-4 border-[#C4704B] pl-6 py-2">
                <p className="font-accent italic text-xl text-[#3D2E1C]/80">
                  "Todo corpo já possui um repertório de movimentos. O método
                  investiga esses gestos cotidianos e os transforma em
                  experiências de criação."
                </p>
              </blockquote>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-[#2C2419]/10">
                <img
                  src={site.assets.metodo}
                  alt="Consciência corporal"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#7A8B6F]/20 rounded-full blur-xl" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#D4A843]/20 rounded-full blur-lg" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─────────── PRINCÍPIOS ─────────── */
function PrincipiosSection() {
  const principios = [
    {
      icon: TreePine,
      title: "O cotidiano como matéria-prima",
      desc: "Todo corpo já possui um repertório de movimentos. O método investiga esses gestos cotidianos e os transforma em experiências de criação.",
    },
    {
      icon: Eye,
      title: "O corpo como lugar de conhecimento",
      desc: "O corpo é compreendido como meio de percepção, aprendizagem e produção de sentido.",
    },
    {
      icon: Music2,
      title: "O movimento como linguagem",
      desc: "O foco não está na técnica, mas na exploração, na expressão e na investigação do movimento.",
    },
    {
      icon: Palette,
      title: "A criação como prática de integração",
      desc: "A composição artística integra percepção, imaginação, emoção e relação com o outro.",
    },
  ];

  return (
    <section className="relative bg-[#2C2419] py-20 lg:py-28 grain-overlay">
      <div className="container relative z-10">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#D4A843] font-body text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            Princípios
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Quatro ideias que{" "}
            <span className="italic text-[#D4A843]">guiam</span> o método
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
          {principios.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-all duration-500 group">
                <div className="w-12 h-12 rounded-xl bg-[#C4704B]/20 flex items-center justify-center mb-5 group-hover:bg-[#C4704B]/30 transition-colors duration-300">
                  <p.icon className="text-[#D4A843] w-6 h-6" />
                </div>
                <h3 className="font-display text-xl text-white mb-3">
                  {p.title}
                </h3>
                <p className="text-white/60 font-body leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── PILARES ─────────── */
function PilaresSection() {
  const pilares = [
    {
      title: "Corpo",
      subtitle: "Consciência e Presença",
      desc: "Consciência corporal, respiração, mobilidade, percepção e presença. A base de toda experiência do MMC.",
      image: site.assets.pilares.corpo,
      color: "#C4704B",
      icon: Heart,
    },
    {
      title: "Movimento",
      subtitle: "Exploração e Criação",
      desc: "Improvisação, exploração, dança contemporânea, criatividade e repertório corporal.",
      image: site.assets.pilares.movimento,
      color: "#7A8B6F",
      icon: Sparkles,
    },
    {
      title: "Integração",
      subtitle: "Conexão e Bem-estar",
      desc: "Autorregulação emocional, colaboração, comunicação não verbal e bem-estar.",
      image: site.assets.pilares.integracao,
      color: "#D4A843",
      icon: Users,
    },
  ];

  return (
    <section id="pilares" className="relative bg-[#F5F0E8] py-20 lg:py-32">
      <div className="container">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#C4704B] font-body text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            Os Três Pilares
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#3D2E1C] leading-tight mb-6">
            Corpo, Movimento e{" "}
            <span className="italic text-[#C4704B]">Integração</span>
          </h2>
          <p className="text-[#3D2E1C]/60 text-lg font-body">
            Três dimensões que se sustentam mutuamente para criar uma
            experiência transformadora.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-8">
          {pilares.map((pilar, i) => (
            <FadeIn key={pilar.title} delay={i * 0.15}>
              <div className="group">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 relative">
                  <img
                    src={pilar.image}
                    alt={pilar.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C2419]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ backgroundColor: pilar.color + "30" }}
                    >
                      <pilar.icon
                        className="w-5 h-5"
                        style={{ color: pilar.color }}
                      />
                    </div>
                    <h3 className="font-display text-2xl text-white mb-1">
                      {pilar.title}
                    </h3>
                    <p className="text-white/70 text-sm font-body">
                      {pilar.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-[#3D2E1C]/70 font-body leading-relaxed">
                  {pilar.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── PROGRAMA ─────────── */
function ProgramaSection() {
  const objetivos = [
    "Desenvolver consciência corporal",
    "Ampliar o repertório de movimentos",
    "Estimular estratégias de autorregulação emocional",
    "Favorecer atenção plena durante o movimento",
    "Fortalecer criatividade e expressão",
    "Promover integração entre corpo, emoção e imaginação",
    "Praticar atividade física com prazer",
    "Construir uma composição coreográfica coletiva",
  ];

  return (
    <section id="programa" className="relative bg-[#3D2E1C] py-20 lg:py-32 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C4704B]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#7A8B6F]/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <FadeIn direction="left">
            <div>
              <p className="text-[#D4A843] font-body text-sm tracking-[0.2em] uppercase mb-4 font-medium">
                Programa de 12 encontros
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
                Dança Cotidiana e{" "}
                <span className="italic text-[#D4A843]">
                  Autorregulação Emocional
                </span>
              </h2>
              <p className="text-white/70 text-lg font-body leading-relaxed mb-8">
                Um programa de 12 encontros semanais de 60 minutos que utiliza
                práticas corporais, improvisação e criação coletiva para
                desenvolver consciência corporal, presença, criatividade e
                estratégias de autorregulação emocional.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-[#C4704B]/20 text-[#D4A843] px-4 py-2 rounded-full text-sm font-medium">
                  12 encontros
                </span>
                <span className="bg-[#7A8B6F]/20 text-[#7A8B6F] px-4 py-2 rounded-full text-sm font-medium">
                  60 minutos cada
                </span>
                <span className="bg-[#D4A843]/20 text-[#D4A843] px-4 py-2 rounded-full text-sm font-medium">
                  Semanal
                </span>
              </div>

              <a
                href="#contato"
                className="inline-flex items-center gap-2 bg-[#C4704B] text-white px-7 py-3.5 rounded-full text-base font-medium hover:bg-[#B06040] transition-all duration-300 hover:shadow-lg hover:shadow-[#C4704B]/30 active:scale-95"
              >
                Inscreva-se
                <ArrowRight size={18} />
              </a>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-10">
              <h3 className="font-display text-xl text-[#D4A843] mb-6">
                Objetivos do programa
              </h3>
              <ul className="space-y-4">
                {objetivos.map((obj, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-white/80 font-body"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#C4704B]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-[#C4704B]" />
                    </span>
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─────────── ESTRUTURA DO ENCONTRO ─────────── */
function EstruturaSection() {
  const etapas = [
    {
      num: "01",
      title: "Chegada",
      desc: "Respiração, aterrissagem e percepção do estado corporal.",
      color: "#C4704B",
    },
    {
      num: "02",
      title: "Despertar Corporal",
      desc: "Mobilidade, alongamentos suaves e ativação.",
      color: "#7A8B6F",
    },
    {
      num: "03",
      title: "Exploração do Movimento",
      desc: "Investigação de temas como peso, apoio, ritmo, fluxo e espaço.",
      color: "#D4A843",
    },
    {
      num: "04",
      title: "Improvisação Guiada",
      desc: "Experimentação e criação individual e coletiva.",
      color: "#C4704B",
    },
    {
      num: "05",
      title: "Construção Coreográfica",
      desc: "Integração das experiências em uma composição compartilhada.",
      color: "#7A8B6F",
    },
  ];

  return (
    <section id="estruturas" className="relative bg-[#F5F0E8] py-20 lg:py-32">
      <div className="container">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#C4704B] font-body text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            Como funciona
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#3D2E1C] leading-tight mb-6">
            A estrutura de cada{" "}
            <span className="italic text-[#C4704B]">encontro</span>
          </h2>
          <p className="text-[#3D2E1C]/60 text-lg font-body">
            Cada sessão é uma jornada de 60 minutos, organizada em cinco
            momentos que conduzem o corpo da presença à criação.
          </p>
        </FadeIn>

        <div className="max-w-3xl mx-auto space-y-6">
          {etapas.map((etapa, i) => (
            <FadeIn key={etapa.num} delay={i * 0.1}>
              <div className="flex items-start gap-6 group">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: etapa.color + "20" }}
                >
                  <span
                    className="font-display text-lg font-bold"
                    style={{ color: etapa.color }}
                  >
                    {etapa.num}
                  </span>
                </div>
                <div className="pt-1">
                  <h3 className="font-display text-xl text-[#3D2E1C] mb-1 group-hover:text-[#C4704B] transition-colors duration-300">
                    {etapa.title}
                  </h3>
                  <p className="text-[#3D2E1C]/60 font-body">
                    {etapa.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── APLICAÇÕES ─────────── */
function AplicacoesSection() {
  const aplicacoes: {
    id?: string;
    title: string;
    desc: string;
    icon: typeof Users;
  }[] = [
    {
      title: "Turmas abertas para adultos",
      desc: "Espaço de criação e desenvolvimento pessoal para quem busca conectar corpo e emoção.",
      icon: Users,
    },
    {
      title: "Empresas e qualidade de vida",
      desc: "Programas de bem-estar e gestão de riscos psicossociais alinhados à NR-1.",
      icon: Brain,
    },
    {
      title: "Instituições culturais",
      desc: "Workshops, residências artísticas e programas de mediação cultural.",
      icon: Palette,
    },
    {
      title: "Universidades e extensão",
      desc: "Projetos de pesquisa, ensino e extensão universitária em dança e educação corporal.",
      icon: Sparkles,
    },
    {
      title: "Projetos sociais e comunitários",
      desc: "Democratização do acesso à prática artística e somática em comunidades.",
      icon: Heart,
    },
    {
      id: "formacao",
      title: "Formação de facilitadores",
      desc: "Programa futuro para formação de profissionais do MMC.",
      icon: Eye,
    },
  ];

  return (
    <section id="aplicacoes" className="relative bg-[#2C2419] py-20 lg:py-28 grain-overlay">
      <div className="container relative z-10">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#D4A843] font-body text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            Aplicações
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Onde o MMC{" "}
            <span className="italic text-[#D4A843]">se encaixa</span>
          </h2>
          <p className="text-white/60 text-lg font-body">
            O método se adapta a diferentes contextos, sempre mantendo sua
            essência de educação corporal e desenvolvimento humano.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aplicacoes.map((app, i) => (
            <FadeIn key={app.title} delay={i * 0.08}>
              <div
                id={app.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 transition-all duration-500 group scroll-mt-20"
              >
                <app.icon className="w-8 h-8 text-[#D4A843] mb-4 group-hover:text-[#C4704B] transition-colors duration-300" />
                <h3 className="font-display text-lg text-white mb-2">
                  {app.title}
                </h3>
                <p className="text-white/50 text-sm font-body leading-relaxed">
                  {app.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── A MEDIADORA ─────────── */
function MediadoraSection() {
  return (
    <section id="mediadora" className="relative bg-[#F5F0E8] py-20 lg:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn direction="left">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-[#2C2419]/10">
                <img
                  src={site.assets.mediadora}
                  alt="Sheila Rocha, mediadora do Método Movimento Cotidiano"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#C4704B]/20 rounded-full blur-xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#7A8B6F]/20 rounded-full blur-lg" />
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <div>
              <p className="text-[#C4704B] font-body text-sm tracking-[0.2em] uppercase mb-4 font-medium">
                A Mediadora
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#3D2E1C] leading-tight mb-6">
                {site.mediadora.name}
              </h2>
              <p className="text-[#7A8B6F] font-body text-base sm:text-lg mb-6">
                Mestre em Educação e Lazer · Artista visual · Mediadora cultural
              </p>
              <p className="text-[#3D2E1C]/70 text-lg font-body leading-relaxed mb-5">
                Criadora do Método Movimento Cotidiano. Investiga práticas
                artísticas participativas com linguagens transdisciplinares em
                ambientes de ensino, corporativos e comunitários.
              </p>
              <p className="text-[#3D2E1C]/70 text-lg font-body leading-relaxed mb-5">
                Formada em Ballet por nove anos e fundadora de uma escola de
                dança aos 16, transitou pelo desenho, pintura, gravura,
                escultura e arte digital. Após uma trajetória corporativa —
                incluindo marketing e trabalho em emissora de TV — dedicou-se
                integralmente às práticas artísticas e à produção cultural.
              </p>
              <p className="text-[#3D2E1C]/70 text-lg font-body leading-relaxed mb-8">
                Mestre em Educação e Lazer pela Escola Superior de Coimbra,
                desenvolve abordagens de educação através das artes
                participativas e transdisciplinares, promovendo espaços de
                encontro com relevância social e educação ao longo da vida.
              </p>
              <a
                href={site.mediadora.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#C4704B]/40 text-[#C4704B] px-6 py-3 rounded-full text-base font-medium hover:bg-[#C4704B] hover:text-white transition-all duration-300"
              >
                Conheça mais em sherocha.com
                <ExternalLink size={16} />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─────────── FUNDAMENTAÇÃO ─────────── */
function FundamentacaoSection() {
  const pilares = [
    {
      title: "Educação, Arte e Experiência",
      refs: ["Paulo Freire", "Ana Mae Barbosa", "John Dewey"],
      desc: "A arte como forma de conhecimento, diálogo e transformação social.",
    },
    {
      title: "Corpo e Movimento",
      refs: ["Rudolf Laban", "Anna Halprin", "Bonnie Bainbridge Cohen", "Klauss Vianna"],
      desc: "O movimento como linguagem, investigação e produção de conhecimento.",
    },
    {
      title: "Somática e Neurociências",
      refs: ["Moshe Feldenkrais", "Peter Levine", "Daniel Siegel", "Bessel van der Kolk"],
      desc: "Consciência corporal, neuroplasticidade e regulação emocional.",
    },
    {
      title: "Perspectivas Decoloniais",
      refs: ["Leda Maria Martins", "Helena Katz", "Antônio Bispo dos Santos", "Germaine Acogny"],
      desc: "Epistemologias brasileiras, latino-americanas e africanas.",
    },
  ];

  return (
    <section className="relative bg-[#F5F0E8] py-20 lg:py-28">
      <div className="container">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#C4704B] font-body text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            Fundamentação
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#3D2E1C] leading-tight mb-6">
            Quatro pilares{" "}
            <span className="italic text-[#C4704B]">teóricos</span>
          </h2>
          <p className="text-[#3D2E1C]/60 text-lg font-body">
            Uma rede de referências que inspira o desenvolvimento do MMC,
            integrando arte, educação, estudos do movimento, educação somática,
            neurociências e perspectivas decoloniais.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-8">
          {pilares.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1}>
              <div className="border-l-4 border-[#C4704B] pl-6 py-4">
                <h3 className="font-display text-xl text-[#3D2E1C] mb-2">
                  {p.title}
                </h3>
                <p className="text-[#3D2E1C]/60 font-body text-sm mb-4">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.refs.map((ref) => (
                    <span
                      key={ref}
                      className="bg-[#3D2E1C]/5 text-[#3D2E1C]/70 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {ref}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── NR-1 ─────────── */
function NR1Section() {
  return (
    <section className="relative bg-[#7A8B6F]/10 py-16 lg:py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-[#7A8B6F]/20 shadow-sm">
          <FadeIn>
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-[#7A8B6F]/15 flex items-center justify-center">
                  <Brain className="w-7 h-7 text-[#7A8B6F]" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl text-[#3D2E1C] mb-4">
                  Alinhado à NR-1
                </h3>
                <p className="text-[#3D2E1C]/70 font-body leading-relaxed mb-4">
                  As atualizações da Norma Regulamentadora nº 1 reforçam a
                  importância da gestão dos fatores de risco psicossociais no
                  ambiente de trabalho. O MMC insere-se como uma proposta de
                  educação corporal e prática artística que pode integrar
                  programas institucionais de promoção da saúde e bem-estar.
                </p>
                <p className="text-[#3D2E1C]/60 font-body text-sm leading-relaxed">
                  Ao proporcionar experiências de escuta corporal, improvisação,
                  cooperação e criação coletiva, o método contribui para o
                  desenvolvimento de competências socioemocionais relevantes
                  para as organizações — comunicação não verbal, empatia,
                  flexibilidade e colaboração.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─────────── CONTATO / INSCRIÇÃO ─────────── */
function ContatoSection() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    interesse: "",
    mensagem: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nome.trim()) newErrors.nome = "Informe seu nome";
    if (!formData.email.trim()) newErrors.email = "Informe seu e-mail";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "E-mail inválido";
    if (!formData.interesse) newErrors.interesse = "Selecione seu interesse";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const message = buildInterestMessage(formData);
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contato" className="relative bg-[#3D2E1C] py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C4704B]/10 rounded-full blur-3xl" />
        <div className="container relative z-10">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-[#7A8B6F]/20 flex items-center justify-center mx-auto mb-8">
                <Check className="w-10 h-10 text-[#7A8B6F]" />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-white leading-tight mb-6">
                Interesse <span className="italic text-[#D4A843]">registrado</span>
              </h2>
              <p className="text-white/70 text-lg font-body leading-relaxed max-w-md mx-auto mb-8">
                Sua mensagem foi preparada no WhatsApp. Envie para concluirmos
                o contato e receber as informações do programa.
              </p>
              <p className="text-white/50 text-sm font-body">
                Enquanto isso, siga-nos nas redes sociais para acompanhar as
                novidades do MMC.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="relative bg-[#3D2E1C] py-20 lg:py-32 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C4704B]/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left column - Info */}
            <FadeIn direction="left">
              <div>
                <p className="text-[#D4A843] font-body text-sm tracking-[0.2em] uppercase mb-4 font-medium">
                  Comece agora
                </p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
                  Demonstre seu{" "}
                  <span className="italic text-[#D4A843]">interesse</span>
                </h2>
                <p className="text-white/70 text-lg font-body leading-relaxed mb-8">
                  Preencha o formulário ao lado para demonstrar interesse no
                  programa Dança Cotidiana e Autorregulação Emocional.
                  Entraremos em contato com informações sobre turmas, valores e
                  calendário.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#C4704B]/20 flex items-center justify-center flex-shrink-0">
                      <span className="w-2 h-2 rounded-full bg-[#C4704B]" />
                    </span>
                    <p className="text-white/70 font-body text-sm">
                      Resposta em até 48 horas
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#7A8B6F]/20 flex items-center justify-center flex-shrink-0">
                      <span className="w-2 h-2 rounded-full bg-[#7A8B6F]" />
                    </span>
                    <p className="text-white/70 font-body text-sm">
                      Sem compromisso — apenas informações
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#D4A843]/20 flex items-center justify-center flex-shrink-0">
                      <span className="w-2 h-2 rounded-full bg-[#D4A843]" />
                    </span>
                    <p className="text-white/70 font-body text-sm">
                      Turmas para adultos e programas corporativos
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right column - Form */}
            <FadeIn direction="right" delay={0.15}>
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-10 space-y-5"
              >
                <h3 className="font-display text-xl text-[#D4A843] mb-2">
                  Formulário de interesse
                </h3>

                {/* Nome */}
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-white/80 text-sm font-body font-medium mb-1.5"
                  >
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white font-body placeholder:text-white/30 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.nome
                        ? "border-red-400/50 focus:ring-red-400/30"
                        : "border-white/10 focus:ring-[#C4704B]/30 focus:border-[#C4704B]/40"
                    }`}
                  />
                  {errors.nome && (
                    <p className="text-red-400 text-xs mt-1 font-body">
                      {errors.nome}
                    </p>
                  )}
                </div>

                {/* E-mail */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white/80 text-sm font-body font-medium mb-1.5"
                  >
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white font-body placeholder:text-white/30 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.email
                        ? "border-red-400/50 focus:ring-red-400/30"
                        : "border-white/10 focus:ring-[#C4704B]/30 focus:border-[#C4704B]/40"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1 font-body">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Telefone */}
                <div>
                  <label
                    htmlFor="telefone"
                    className="block text-white/80 text-sm font-body font-medium mb-1.5"
                  >
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#C4704B]/30 focus:border-[#C4704B]/40 transition-all duration-300"
                  />
                </div>

                {/* Interesse */}
                <div>
                  <label
                    htmlFor="interesse"
                    className="block text-white/80 text-sm font-body font-medium mb-1.5"
                  >
                    Seu interesse *
                  </label>
                  <select
                    id="interesse"
                    name="interesse"
                    value={formData.interesse}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white font-body focus:outline-none focus:ring-2 transition-all duration-300 appearance-none ${
                      errors.interesse
                        ? "border-red-400/50 focus:ring-red-400/30"
                        : "border-white/10 focus:ring-[#C4704B]/30 focus:border-[#C4704B]/40"
                    } ${!formData.interesse ? "text-white/30" : "text-white"}`}
                  >
                    <option value="" className="bg-[#3D2E1C]">
                      Selecione...
                    </option>
                    <option value="turma-adultos" className="bg-[#3D2E1C]">
                      Turma aberta para adultos
                    </option>
                    <option value="empresas" className="bg-[#3D2E1C]">
                      Programa corporativo / Empresas
                    </option>
                    <option value="institucional" className="bg-[#3D2E1C]">
                      Instituição cultural / Universidade
                    </option>
                    <option value="social" className="bg-[#3D2E1C]">
                      Projeto social / Comunitário
                    </option>
                    <option value="facilitador" className="bg-[#3D2E1C]">
                      Formação de facilitadores
                    </option>
                    <option value="outro" className="bg-[#3D2E1C]">
                      Outro
                    </option>
                  </select>
                  {errors.interesse && (
                    <p className="text-red-400 text-xs mt-1 font-body">
                      {errors.interesse}
                    </p>
                  )}
                </div>

                {/* Mensagem */}
                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-white/80 text-sm font-body font-medium mb-1.5"
                  >
                    Mensagem (opcional)
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Conte um pouco sobre seu interesse ou dúvidas..."
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#C4704B]/30 focus:border-[#C4704B]/40 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C4704B] text-white px-6 py-3.5 rounded-full text-base font-medium hover:bg-[#B06040] transition-all duration-300 hover:shadow-lg hover:shadow-[#C4704B]/30 active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  Demonstrar interesse
                  <ArrowRight size={18} />
                </button>

                <p className="text-white/30 text-xs font-body text-center">
                  Ao enviar, você será direcionado ao WhatsApp com sua mensagem
                  pronta. Seus dados não serão compartilhados.
                </p>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── FOOTER ─────────── */
function Footer() {
  return (
    <footer className="bg-[#2C2419] border-t border-white/10 py-12">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="h-8 w-8 rounded-full overflow-hidden bg-[#EBD9A0] flex items-center justify-center flex-shrink-0">
              <img
                src={site.assets.logo}
                alt="MMC"
                className="h-full w-full object-cover"
              />
            </span>
            <div className="text-left">
              <span className="font-logo text-white text-lg font-bold tracking-wide">
                MMC
              </span>
              <span className="block text-white/40 text-xs tracking-wider">
                Método Movimento Cotidiano
              </span>
            </div>
          </div>

          <p className="text-white/40 text-sm font-body text-center">
            Educação corporal para desenvolvimento humano
          </p>

          <p className="text-white/30 text-xs font-body">
            © {new Date().getFullYear()} MMC. Todos os direitos reservados.
          </p>
        </div>

        <p className="mt-8 text-center text-white/30 text-xs font-body">
          <a
            href="https://www.sherocha.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/50 transition-colors"
          >
            She | Abordagens artísticas multidisciplinares
          </a>
        </p>
      </div>
    </footer>
  );
}

/* ─────────── HOME ─────────── */
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <OrganicDivider color="#F5F0E8" />
      <MetodoSection />
      <OrganicDivider color="#2C2419" flip />
      <PrincipiosSection />
      <OrganicDivider color="#F5F0E8" />
      <PilaresSection />
      <OrganicDivider color="#3D2E1C" flip />
      <ProgramaSection />
      <OrganicDivider color="#F5F0E8" />
      <EstruturaSection />
      <OrganicDivider color="#2C2419" flip />
      <AplicacoesSection />
      <OrganicDivider color="#F5F0E8" />
      <MediadoraSection />
      <FundamentacaoSection />
      <NR1Section />
      <ContatoSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

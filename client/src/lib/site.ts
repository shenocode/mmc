/**
 * Contatos e links públicos do Método MOVIC.
 * Ajuste via variáveis de ambiente (veja .env.example) ou edite os defaults.
 */
const whatsappNumber =
  import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, "") || "5511993397398";

export const site = {
  name: "Método MOVIC – Movimento Cotidiano",
  shortName: "MOVIC",
  tagline: "Movimento Cotidiano",
  email: import.meta.env.VITE_CONTACT_EMAIL || "contato@movic-metodo.com",
  whatsappNumber,
  instagramUrl:
    import.meta.env.VITE_INSTAGRAM_URL || "https://instagram.com/movic.metodo",
  assets: {
    logo: "/images/logo-mc-v3.png",
    hero: "/images/hero-dance.jpg",
    metodo: "/images/metodo-grupo.jpg",
    mediadora: [
      {
        src: "/images/sheila-rocha.jpg",
        alt: "Sheila Rocha, mediadora do Método MOVIC",
      },
      {
        src: "/images/sheila-parque.jpg",
        alt: "Sheila Rocha em movimento no parque",
      },
      {
        src: "/images/sheila-grupo.jpg",
        alt: "Sheila Rocha em vivência com grupo de educadoras",
      },
    ],
    pilares: {
      corpo: "/images/pilar-corpo.jpg",
      movimento: "/images/pilar-movimento.jpg",
      integracao: "/images/pilar-integracao.jpg",
    },
  },
  mediadora: {
    name: "Sheila Rocha",
    siteUrl: "https://www.sherocha.com",
    instagramUrl: "https://www.instagram.com/sheila_projects/",
  },
} as const;

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function buildInterestMessage(data: {
  nome: string;
  email: string;
  telefone: string;
  interesse: string;
  mensagem: string;
}) {
  const interesseLabel: Record<string, string> = {
    "turma-adultos": "Turma aberta para adultos",
    empresas: "Programa corporativo / Empresas",
    institucional: "Instituição cultural / Universidade",
    "ensino-formal":
      "Instituições de ensino e professores do Ensino Formal (certificado opcional)",
    social: "Projeto social / Comunitário",
    facilitador: "Formação de facilitadores",
    outro: "Outro",
  };

  const lines = [
    "Olá! Demonstro interesse no Método MOVIC.",
    "",
    `Nome: ${data.nome}`,
    `E-mail: ${data.email}`,
    data.telefone ? `Telefone: ${data.telefone}` : null,
    `Interesse: ${interesseLabel[data.interesse] || data.interesse}`,
    data.mensagem ? `Mensagem: ${data.mensagem}` : null,
  ].filter(Boolean);

  return lines.join("\n");
}

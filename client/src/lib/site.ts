/**
 * Contatos e links públicos do MMC.
 * Ajuste via variáveis de ambiente (veja .env.example) ou edite os defaults.
 */
const whatsappNumber =
  import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, "") || "5511999999999";

export const site = {
  name: "MMC – Método Movimento Cotidiano",
  shortName: "MMC",
  email: import.meta.env.VITE_CONTACT_EMAIL || "contato@mmc-metodo.com",
  whatsappNumber,
  instagramUrl:
    import.meta.env.VITE_INSTAGRAM_URL || "https://instagram.com/mmc.metodo",
  formspreeId: import.meta.env.VITE_FORMSPREE_ID || "",
  assets: {
    logo: "/images/logo-mmc.png",
    hero: "/images/hero-dance.jpg",
    metodo: "/images/pilar-corpo.jpg",
    pilares: {
      corpo: "/images/pilar-corpo.jpg",
      movimento: "/images/pilar-movimento.jpg",
      integracao: "/images/pilar-integracao.jpg",
    },
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
    social: "Projeto social / Comunitário",
    facilitador: "Formação de facilitadores",
    outro: "Outro",
  };

  const lines = [
    "Olá! Demonstro interesse no MMC.",
    "",
    `Nome: ${data.nome}`,
    `E-mail: ${data.email}`,
    data.telefone ? `Telefone: ${data.telefone}` : null,
    `Interesse: ${interesseLabel[data.interesse] || data.interesse}`,
    data.mensagem ? `Mensagem: ${data.mensagem}` : null,
  ].filter(Boolean);

  return lines.join("\n");
}

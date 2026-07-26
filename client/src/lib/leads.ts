import { isSupabaseConfigured, supabase } from "@/lib/supabase";

export type LeadInput = {
  nome: string;
  email: string;
  telefone: string;
  interesse: string;
  mensagem: string;
};

export async function createLead(data: LeadInput) {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error(
      "Supabase não configurado. Defina VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY.",
    );
  }

  const { error } = await supabase.from("leads").insert({
    nome: data.nome.trim(),
    email: data.email.trim().toLowerCase(),
    telefone: data.telefone.trim() || null,
    interesse: data.interesse,
    mensagem: data.mensagem.trim() || null,
    origem: "site",
    status: "novo",
  });

  if (error) throw error;
}

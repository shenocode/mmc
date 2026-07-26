-- Atualiza o check de interesse para incluir 'ensino-formal'.
-- Rode no SQL Editor do Supabase se a tabela leads já existir.

alter table public.leads
  drop constraint if exists leads_interesse_check;

alter table public.leads
  add constraint leads_interesse_check check (interesse in (
    'turma-adultos',
    'empresas',
    'institucional',
    'ensino-formal',
    'social',
    'facilitador',
    'outro'
  ));

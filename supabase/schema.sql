-- Schema Método MOVIC: leads + eventos
-- Rode no SQL Editor do Supabase (uma vez por projeto).

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nome text not null,
  email text not null,
  telefone text,
  interesse text not null check (interesse in (
    'turma-adultos',
    'empresas',
    'institucional',
    'social',
    'facilitador',
    'outro'
  )),
  mensagem text,
  origem text not null default 'site',
  status text not null default 'novo'
    check (status in ('novo', 'contatado', 'inscrito', 'arquivado'))
);

create table if not exists public.eventos (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  titulo text not null,
  descricao text,
  tipo text not null default 'turma'
    check (tipo in ('turma', 'workshop', 'formacao', 'outro')),
  local text,
  cidade text,
  inicio timestamptz,
  fim timestamptz,
  vagas integer,
  ativo boolean not null default true,
  destaque boolean not null default false
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);
create index if not exists eventos_ativo_inicio_idx on public.eventos (ativo, inicio);

alter table public.leads enable row level security;
alter table public.eventos enable row level security;

drop policy if exists "site_pode_inserir_leads" on public.leads;
create policy "site_pode_inserir_leads"
  on public.leads
  for insert
  to anon, authenticated
  with check (true);

drop policy if exists "site_pode_ler_eventos_ativos" on public.eventos;
create policy "site_pode_ler_eventos_ativos"
  on public.eventos
  for select
  to anon, authenticated
  using (ativo = true);

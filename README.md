# Método MOVIC – Movimento Cotidiano

Site institucional do Método MOVIC: educação corporal, dança contemporânea e práticas somáticas para adultos.

## Stack

- React 19 + TypeScript + Vite 7
- Tailwind CSS 4 + Framer Motion
- Express (serve estáticos em produção)
- pnpm

## Como rodar

```bash
pnpm install
cp .env.example .env   # ajuste WhatsApp, e-mail e Instagram
pnpm dev
```

Abre em `http://localhost:3000`.

## Scripts

| Comando        | Descrição                          |
|----------------|------------------------------------|
| `pnpm dev`     | Servidor de desenvolvimento        |
| `pnpm build`   | Build client + server              |
| `pnpm start`   | Serve o build em produção          |
| `pnpm check`   | Typecheck (`tsc --noEmit`)         |
| `pnpm format`  | Prettier                           |

## Configuração de contato

Edite `.env` (ou `client/src/lib/site.ts`):

- `VITE_WHATSAPP_NUMBER` — só dígitos, com DDI (ex.: `5511987654321`)
- `VITE_CONTACT_EMAIL`
- `VITE_INSTAGRAM_URL`
- `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` — grava leads no Supabase; o formulário ainda abre o WhatsApp

Schema SQL: `supabase/schema.sql` (rodar no SQL Editor do projeto).

## Estrutura

```
client/          # frontend (Vite root)
  public/images/ # logo, hero e pilares
  src/pages/     # Home e 404
server/          # Express estático
shared/          # constantes compartilhadas
```

## Deploy

```bash
pnpm build
pnpm start
```

Ou publique a pasta `dist/public` em qualquer host estático (Vercel, Netlify, Cloudflare Pages). O Express em `server/` é opcional para servir o mesmo build.

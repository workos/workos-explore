# AGENTS.md

Guidance for AI coding assistants (Claude, Cursor, Copilot, etc.) working in this repo.

## What this is

A public demo of [WorkOS](https://workos.com), deployed at [explore.workos.com](https://explore.workos.com). Demonstrates SSO, Directory Sync, Audit Logs, and Domain Verification through Admin Portal flows. Magic-link login is wired up but mostly decorative.

## Stack

- **Next.js 15** (Pages Router) on **Node 24** (pinned in `.mise.toml`, also `engines.node` in `package.json`)
- **React 19**, **Tailwind CSS** (PostCSS-compiled — no CDN)
- **`@workos-inc/node`** v8 SDK
- **oxlint** + **oxfmt** for lint/format
- **GitHub Actions** for CodeQL and dependency review

## Dev commands

```sh
mise install         # pulls Node 24 once, if you don't already have it
npm install
npm run dev          # http://localhost:3000
npm run build
npm run lint
npm run format       # writes formatting changes
npm run format:check # CI-friendly check
```

## Environment variables

Set these in a local `.env.local` or in your deployment platform's project settings:

- `WORKOS_API_KEY` — required for every `/api/*` route
- `WORKOS_CLIENT_ID` — used by SSO and magic-link flows

Both come from a WorkOS dashboard environment (https://dashboard.workos.com → API Keys / Configuration).

## How the Admin Portal tiles work

The four tiles on `/app/settings` (SSO, Directory Sync, Audit Logs, Domain Verification) all share one pattern:

1. The tile's form POSTs `{ intent, state }` to `/api/admin-portal`.
2. The API route creates a fresh throwaway WorkOS organization (`demo-${Date.now()}`) so each click gets clean state.
3. It calls `workos.portal.generateLink({ intent, organization, returnUrl })` and returns the link.
4. The client redirects the browser to the WorkOS-hosted Admin Portal.

The Audit Logs intent additionally calls `createAuditLogEvents()` server-side first, so when the visitor lands in the Admin Portal there are already a couple of events to view.

To add a new Admin Portal tile: add a `<form onSubmit={props.onSubmit.bind(this, '<intent>')}>` in `components/Settings.js`, and let `pages/api/admin-portal.js` handle the new intent.

## Conventions

- **`@workos-inc/node` imports**: use the named export (`import { WorkOS } from '@workos-inc/node'`). The v8 SDK has no default export; default-importing it silently produces `undefined` at runtime.
- **Lint + format before committing**: `npm run lint && npm run format`. Latent bugs surfaced by oxlint should be fixed, not silenced.
- **`VERCEL_GIT_COMMIT_SHA`**: exposed to the client through `next.config.js` as `NEXT_PUBLIC_COMMIT_SHA`. Use that, not direct `VERCEL_*` env reads, so the build remains portable to other hosts.

## What not to do

- **Don't add real billing or payment flows.** This is a public demo; anyone on the internet can click anything.
- **Don't send real emails to arbitrary addresses.** Keep magic-link / outbound-mail flows gated to fixed test addresses so the demo can't be used as a spam vector.
- **Don't depend on production WorkOS data.** Each tile click creates a throwaway org by design.
- **Don't reference internal infrastructure, internal team names, or internal tooling** in code, comments, commit messages, or PR descriptions. This repo is public.

## Demo data

- The hardcoded user shown in the app shell (`Whitney Francis`, `whitney@example.com`) is decorative. The displayed user is not authenticated.
- The hardcoded organization ID in `pages/api/sso.js` points at a long-lived WorkOS organization used only for this demo's SSO flow.
- All audit-log seed actors (`Jon Smith`, etc.) are placeholder values.

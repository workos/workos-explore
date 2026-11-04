# Contributing to workos-explore

Thanks for your interest in contributing! This repo is a public demo of [WorkOS](https://workos.com), deployed at [explore.workos.com](https://explore.workos.com). It demonstrates SSO, Directory Sync, Audit Logs, and Domain Verification through Admin Portal flows.

## Prerequisites

- **Node 24** — pinned in `.mise.toml` and `engines.node` in `package.json`. If you use [mise](https://mise.jdx.dev), run `mise install`.
- A [WorkOS account](https://dashboard.workos.com) for API credentials.

## Getting started

1. Fork and clone the repo:

   ```sh
   git clone https://github.com/workos/workos-explore.git && cd workos-explore
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Configure environment variables in a local `.env.local`:

   ```sh
   WORKOS_API_KEY=$YOUR_API_KEY
   WORKOS_CLIENT_ID=$YOUR_CLIENT_ID
   ```

   Both come from a WorkOS dashboard environment (https://dashboard.workos.com → API Keys / Configuration).

4. Run the dev server:

   ```sh
   npm run dev          # http://localhost:3000
   ```

## Development workflow

Useful commands:

```sh
npm run dev          # local dev server
npm run build        # production build
npm run lint         # oxlint
npm run lint:fix     # oxlint with autofix
npm run format       # oxfmt, writes formatting changes
npm run format:check # CI-friendly format check
npm run typecheck    # tsc --noEmit
```

Before committing, run:

```sh
npm run lint && npm run format
```

Latent bugs surfaced by oxlint should be fixed, not silenced.

## Project structure

- `components/` — React components (app shell, settings tiles, etc.)
- `lib/` — shared utilities
- `pages/` — Next.js Pages Router routes, including `/api/*` API routes
- `public/` — static assets
- `styles/` — Tailwind CSS entry points

## Conventions

- **`@workos-inc/node` imports** — use the named export (`import { WorkOS } from '@workos-inc/node'`). The v8 SDK has no default export; default-importing it silently produces `undefined` at runtime.
- **Commit SHA on the client** — use `NEXT_PUBLIC_COMMIT_SHA` (exposed through `next.config.js`), not direct `VERCEL_*` env reads, so the build remains portable to other hosts.
- **Adding an Admin Portal tile** — add a `<form onSubmit={props.onSubmit.bind(this, '<intent>')}>` in `components/Settings.js`, and handle the new intent in `pages/api/admin-portal.js`.

## Things to keep in mind

This is a public demo — anyone on the internet can click anything. Please:

- **Don't add real billing or payment flows.**
- **Don't send real emails to arbitrary addresses.** Keep magic-link / outbound-mail flows gated to fixed test addresses so the demo can't be used as a spam vector.
- **Don't depend on production WorkOS data.** Each Admin Portal tile click creates a throwaway organization by design.
- **Keep demo data placeholder-only.** The displayed user (`Whitney Francis`) and audit-log actors are decorative, not authenticated.

## Submitting changes

1. Create a branch from `main`.
2. Make your changes, then run `npm run lint && npm run format` and verify `npm run build` passes.
3. Open a pull request with a clear description of what changed and why.

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).

---

_Written by TARS._

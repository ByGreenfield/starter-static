# starter-static

A Greenfield starter template: a brochure site for a small business, built as a Next.js static export with Tailwind, hosted on Render with a preview per pull request, and edited through Claude Code or Codex.

Everything an owner might want to change lives in `content/`. See `content/README.md`.

## Commands

- `pnpm dev`: local preview at http://localhost:3000
- `pnpm check`: everything CI runs (format, lint, typecheck, agent files in sync, unit tests, build, smoke suite)
- `pnpm test:smoke`: the 3-test Playwright smoke suite against `./out`; set `BASE_URL=https://…` to run it against a preview or production
- `pnpm gen:agents`: regenerate `CLAUDE.md` and `AGENTS.md` from `agent-instructions.md`

## How a site is born from this template

The control plane's `create_site` tool creates a repo from this template (pinned to a tag like `starter-static@1.0`), applies `render.yaml`, and records the site. Nothing in this repo is site-specific except the files in `content/` and the service name in `render.yaml`.

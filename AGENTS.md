<!-- Generated from agent-instructions.md by scripts/gen-agent-files.mjs. Edit the source, then run pnpm gen:agents. (AGENTS.md) -->

# Working on this site

This is a **Greenfield starter-static** site: a Next.js static export with Tailwind, hosted on Render, managed through the Greenfield Swarm control plane. It is a brochure site for a small business. The owner and their staff describe changes in plain language; you make them.

## Purpose and audience

Read `content/site.json` first: it names the business and says what the site is for. The audience is the business's customers on their phones. Keep pages fast, readable and simple.

## Where things live

- `content/`: text, menu, hours, contact details, images. Most daily edits happen here and nowhere else.
- `src/app/`: pages and layout (Next.js App Router, static export).
- `src/components/`: shared components.
- `src/lib/content.ts`: typed loaders for the content files.
- `tests/`: Vitest unit tests and the Playwright smoke suite.

## How to work

1. Work on a branch named `change/<short-slug>`. Never push to `main`.
2. Make the change. Prefer editing `content/` over components when the request is about words, prices, hours or pictures.
3. Run `pnpm check`. It runs everything CI runs: lint, typecheck, unit tests, build, and the smoke suite against the build. Fix what fails before opening the PR.
4. Open a pull request with:
   - a one-paragraph summary in plain language a business owner understands (what changed and why, no file names),
   - a `## What to look at` section listing the pages to check on the preview link.
5. Render builds a preview for the PR automatically. The owner reviews it there and releases it through the control plane. You do not deploy.

## Rules

- Do not edit `render.yaml`, `.github/workflows/`, `.mcp.json`, or this file's generated copies (`CLAUDE.md`, `AGENTS.md`) unless the person asking holds a platform role; say so and stop if asked.
- Do not add secrets, API keys or tokens anywhere in the repo. Configuration that needs a secret is a platform task.
- Do not change the site's structure (new pages, removed pages, navigation) without saying so explicitly in the PR summary.
- Keep dependencies as they are unless the change needs a new one, and say so in the PR.
- Update Playwright snapshots only when the visual change is intentional, and say so in the PR.

## Talking to the control plane

The repo's `.mcp.json` points at the Greenfield Swarm MCP server. When it is available in your session, use it to check site status, find preview links, and request releases. If it is not available in a coding session, finish the PR and tell the user to ask for the preview or release in their Claude or ChatGPT chat, where the connector is installed.

## Useful commands

- `pnpm dev`: local preview at http://localhost:3000
- `pnpm check`: everything CI runs
- `pnpm test:smoke`: just the Playwright smoke suite against a fresh build
- `pnpm gen:agents`: regenerate `CLAUDE.md` and `AGENTS.md` from `agent-instructions.md`

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

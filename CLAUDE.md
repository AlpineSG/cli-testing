# CLAUDE.md — Project Instructions for Claude Code

## Project Overview

- **Name**: guardian-test
- **Stack**: typescript / react

## Coding Standards

- Follow ESLint + Prettier configuration in this project
- Run `npx eslint --fix` before committing
- Use strict TypeScript — avoid `any` unless justified with a comment
- Prefer `const` over `let`; never use `var`
- Use named exports over default exports
- Prefer async/await over raw Promises
- Use functional components with hooks (no class components)
- Keep components small and focused — extract hooks for shared logic

## Testing

- Use Vitest for all tests — files in `tests/` with `.test.ts` extension
- Use `describe`/`it` blocks with clear descriptions
- Test edge cases and error scenarios, not just the happy path
- Aim for meaningful coverage, not 100% line coverage

## Commits & PRs

- Use Conventional Commits: `feat:`, `fix:`, `chore:`, `refactor:`, `docs:`, `test:`
- Keep commits atomic — one logical change per commit
- Write descriptive PR titles and summaries

## Security

- Never commit secrets, API keys, or credentials
- Use parameterized queries for all database access
- Validate and sanitize all user input
- Follow OWASP guidelines for web applications
- Gitleaks runs on pre-commit and CI — secrets will be caught

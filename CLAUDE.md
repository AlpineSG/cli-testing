# CLAUDE.md — Project Instructions for Claude Code

## Project Overview

- **Name**: guardian-test
- **Language**: go

## Coding Standards

- Run `golangci-lint run` before committing
- Follow standard Go conventions (gofmt, effective Go)
- Use `errors.Is` / `errors.As` for error comparison
- Return errors rather than using panic

## Testing

- Write tests for all new functionality
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

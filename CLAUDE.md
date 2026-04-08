# CLAUDE.md — Project Instructions for Claude Code

## Project Overview

- **Name**: guardian-test
- **Stack**: python / fastapi

## Coding Standards

- Follow Ruff linting and formatting configuration
- Run `ruff check --fix && ruff format` before committing
- Use type hints for all function signatures
- Use `pathlib.Path` over `os.path`
- Prefer f-strings over `.format()` or `%` formatting
- Use Pydantic models for request/response schemas
- Use dependency injection for services

## Testing

- Use pytest — files in `tests/` with `test_` prefix
- Use fixtures for shared setup
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

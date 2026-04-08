# CLAUDE.md — Project Instructions for Claude Code

## Project Overview

- **Name**: guardian-test
- **Stack**: java / spring-boot

## Coding Standards

- Follow Checkstyle and Error Prone rules configured in this project
- Use Optional<T> instead of returning null
- Use try-with-resources for AutoCloseable objects

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

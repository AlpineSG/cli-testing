# guardian-test Constitution

## Core Principles

### I. Test-First Development (NON-NEGOTIABLE)
Every feature starts with tests. Tests are written and approved before implementation begins. Red-Green-Refactor cycle is strictly enforced. No PR merges without passing tests and adequate coverage.

### II. Error Handling
All errors must be explicitly handled — never discard with `_`. Use `errors.Is`/`errors.As` for comparison. Wrap errors with context using `fmt.Errorf("context: %w", err)`. Panics are reserved for truly unrecoverable states.


### III. Security by Default
- Never commit secrets, API keys, or credentials
- Validate and sanitize all user input at system boundaries
- Use parameterized queries for database access — never string concatenation
- Follow OWASP guidelines for the project's domain
- Secret detection runs on every commit and in CI — secrets will be caught

### IV. Code Review Standards
- Every change goes through PR review — no direct pushes to main
- PRs must pass all CI checks (lint, test, static analysis, secret scan) before merge
- At least one human reviewer required
- AI code review supplements but does not replace human review

### V. Simplicity & YAGNI
- Start with the simplest solution that works
- No speculative abstractions — design for current requirements
- Three similar lines of code is better than a premature abstraction
- Refactor when patterns emerge from real usage, not in anticipation

## Quality Gates

- All PRs must pass: lint, test, static analysis, secret detection, AI review
- Code coverage must not decrease on any PR
- No critical or high severity security findings allowed
- Conventional commit format enforced on all commits

## Governance

This constitution supersedes ad-hoc practices. Amendments require:
1. Written proposal with rationale
2. Team discussion and consensus
3. Updated constitution document
4. Migration plan for existing code (if applicable)

**Version**: 1.0.0 | **Ratified**: 2026-04-08

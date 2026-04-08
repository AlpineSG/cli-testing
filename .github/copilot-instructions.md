# guardian-test — Coding Standards

Stack: typescript / react

## Code Quality
- Strict TypeScript, no `any` without justification
- async/await over raw Promises
- Named exports, const over let, never var
- ESLint + Prettier enforced

## Testing
- Vitest for tests in `tests/`
- Cover edge cases and error paths

## Commits
- Conventional Commits: feat:, fix:, chore:, refactor:, docs:, test:

## Security
- Never commit secrets
- Parameterized queries, validate user input


## Workflow: PR Review
When asked to review a PR, follow these steps:
1. Read all changed files using the diff
2. Check for coding standard violations, security issues, missing tests
3. Provide structured feedback: summary, issues found, suggestions

## Workflow: PR Triage
When asked to triage a PR:
1. Check CI status for failed checks
2. Read review comments that need responses
3. Identify merge conflicts
4. Guide through fixing each issue in priority order
5. Remediate issues found:
   - Fix deterministic CI failures (lint, type, build errors) and push
   - Batch review comment changes into a single commit
   - Rebase onto base branch to resolve conflicts
   - Proactively rebase if >10 commits behind base
   - Flag stale PRs (>7 days inactive) and large PRs (>500 lines)
   - Apply status labels: ci-passing/ci-failing, conflicts, approved/changes-requested, stale

## Workflow: PR Creation
When asked to create a PR:
1. Create a feature branch from the current branch
2. Use naming convention: `feat/PROJ-123-short-description`
3. Commit with conventional commit format
4. Push and create PR with template-based description
5. Link to Jira ticket in PR description

## Workflow: Test Generation
When asked to generate tests:
1. Create test file in `tests/` matching source file path
2. Use describe/it blocks with clear names
3. Cover happy path, edge cases, and error scenarios
4. Mock external dependencies

## Workflow: Feature Validation
When asked to validate a feature with Playwright:
1. Identify acceptance criteria from the spec
2. Write Playwright test that exercises each criterion
3. Run the test and report pass/fail for each criterion

## Workflow: Ticket Management
When asked to manage Jira tickets:
1. Use the Jira API to create, update, or transition issues
2. Link PRs to tickets using the branch naming convention


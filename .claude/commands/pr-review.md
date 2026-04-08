---
description: Review a pull request for coding standards, security issues, and best practices
allowed-tools:
  - Bash(gh pr diff *)
  - Bash(gh pr view *)
  - Read
  - Grep
  - Glob
---

# PR Review

Review the pull request specified in $ARGUMENTS (PR number or URL).

## Steps

1. **Fetch the PR metadata and diff**
   - Run `gh pr view $ARGUMENTS` to get the PR title, description, and status.
   - Run `gh pr diff $ARGUMENTS` to get the full diff.

2. **Check coding standards**
   - Verify strict TypeScript usage — flag any `any` types without justification.
   - Confirm `const` is preferred over `let` and `var` is never used.
   - Check for proper async/await usage (no unhandled promises).
   - Ensure named exports are used over default exports.
   - Verify changes align with ESLint + Prettier configuration.
   - Ensure functional components with hooks (no class components).
   - Check that components are small and focused.

3. **Check for security issues**
   Note: This project uses sonarcloud, semgrep, wiz, gitleaks for automated scanning. Focus on issues those tools miss:
   - Check for `eval()`, `Function()`, or `child_process.exec()` with user-controlled input.
   - Check for unsanitized HTML rendering (`innerHTML`, `dangerouslySetInnerHTML`).
   - Verify parameterized queries — no string concatenation in database calls.
   - Check for prototype pollution patterns in object merging.
   - Verify no sensitive data in client-side bundles or `getStaticProps`.
   - Look for hardcoded secrets, API keys, or credentials.
   - Check for missing authentication or authorization on new endpoints.
   - Flag any SSRF risks (unvalidated URLs in server-side requests).

4. **Check for test coverage**
   - Verify new functionality has corresponding tests.
   - Check that edge cases and error scenarios are covered.

5. **Provide structured feedback**
   Report your review in this format:

   ### Summary
   One paragraph overview of the changes and their purpose.

   ### Issues Found
   List each issue with severity (critical / warning / nit):
   - **[severity]** file:line — description of the issue

   ### Suggestions
   List actionable improvement suggestions.

   ### Verdict
   State whether the PR is ready to merge, needs changes, or needs discussion.

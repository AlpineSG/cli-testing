---
description: Validate a feature against acceptance criteria using Playwright end-to-end tests
allowed-tools:
  - Bash(npx playwright *)
  - Read
  - Grep
  - Glob
  - Write
  - Edit
---

# Feature Validation

Validate the feature described in $ARGUMENTS using Playwright end-to-end tests.

## Steps

1. **Parse acceptance criteria**
   - Read the acceptance criteria from $ARGUMENTS. These may be provided inline or as a path to a spec file.
   - If a file path is given, read the file and extract the acceptance criteria.
   - List each criterion as a numbered item.

2. **Write the Playwright test**
   - Create a Playwright test file at `tests/e2e/<feature-name>.spec.ts` (derive the name from the feature description).
   - Write one `test()` block per acceptance criterion.
   - Use descriptive test names that match the criteria.
   - Include proper page navigation, element selectors, and assertions.
   - Add reasonable timeouts and wait conditions for async operations.

3. **Run the test**
   - Run `npx playwright test tests/e2e/<feature-name>.spec.ts --reporter=list` to execute the tests.
   - If tests fail due to environment issues (missing server, etc.), report the setup requirements.

4. **Report results**

   ### Acceptance Criteria Results

   For each criterion, report:
   | # | Criterion | Status | Notes |
   |---|-----------|--------|-------|
   | 1 | ...       | PASS/FAIL | Details if failed |

   ### Failed Tests
   For any failures, include:
   - The assertion that failed
   - Expected vs. actual behavior
   - Screenshot path if available

   ### Summary
   State how many criteria passed out of total and whether the feature is validated.

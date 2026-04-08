---
description: Generate comprehensive tests for a file or module
allowed-tools:
  - Read
  - Grep
  - Glob
  - Write
  - Edit
  - Bash(npx vitest *)
  - Bash(npx jest *)
  - Bash(python -m pytest *)
  - Bash(./gradlew test *)
  - Bash(go test *)
---

# Test Generation

Generate tests for the file or module specified in $ARGUMENTS.

## Steps

1. **Analyze the target**
   - Read the file or module specified in $ARGUMENTS.
   - Identify all public functions, classes, and methods.
   - Identify dependencies that need mocking.
   - Note edge cases: null/undefined inputs, empty collections, boundary values, error conditions.

2. **Generate the test file**

   Create a test file at `tests/<matching-path>.test.ts`:

   ```typescript
   import { describe, it, expect, vi, beforeEach } from 'vitest';
   ```

   - Use `describe` blocks grouped by function/method.
   - Use `it` with clear behavior-focused descriptions (e.g., `it('returns empty array when no items match')`).
   - Use `vi.mock()` for module mocks and `vi.fn()` for function mocks.
   - Use `beforeEach` for shared setup, `afterEach` for cleanup.
   - Use `expect(...).toEqual()` for deep equality, `toBe()` for primitives.

3. **Test categories to cover**
   For each function/method, write tests for:
   - **Happy path** — normal expected usage.
   - **Edge cases** — empty inputs, boundary values, max/min values.
   - **Error handling** — invalid inputs, missing dependencies, network failures.
   - **Integration points** — verify mocks are called with correct arguments.

4. **Run the tests**
   - Run `npx vitest run <test-file>` to execute the generated tests.
   - Fix any compilation or assertion errors.
   - Re-run until all tests pass.

5. **Report**
   - List the tests generated with a brief description of each.
   - Report pass/fail status.
   - Note any functions that were difficult to test and why.

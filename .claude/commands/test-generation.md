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

   Create a test file at `src/test/java/<matching-path>Test.java`:

   ```java
   import org.junit.jupiter.api.*;
   import static org.junit.jupiter.api.Assertions.*;
   import org.mockito.Mock;
   import org.mockito.junit.jupiter.MockitoExtension;
   ```

   - Use `@Nested` classes to group related tests.
   - Use `@DisplayName` for readable test descriptions.
   - Use `@ParameterizedTest` with `@ValueSource` or `@CsvSource` for data-driven tests.
   - Use Mockito `@Mock` and `@InjectMocks` for dependency mocking.

3. **Test categories to cover**
   For each function/method, write tests for:
   - **Happy path** — normal expected usage.
   - **Edge cases** — empty inputs, boundary values, max/min values.
   - **Error handling** — invalid inputs, missing dependencies, network failures.
   - **Integration points** — verify mocks are called with correct arguments.

4. **Run the tests**
   - Run `./gradlew test --tests "<TestClass>"` to execute the generated tests.
   - Fix any compilation or assertion errors.
   - Re-run until all tests pass.

5. **Report**
   - List the tests generated with a brief description of each.
   - Report pass/fail status.
   - Note any functions that were difficult to test and why.

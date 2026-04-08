# Copilot Code Review Instructions

## Review Focus Areas

- Ensure all functions have proper TypeScript types (no `any` unless justified)
- Check for missing error handling in async/await blocks
- Verify imports are used and organized
- Flag potential XSS vulnerabilities (innerHTML, dangerouslySetInnerHTML)

## Testing Requirements

- All new functions must have corresponding tests
- Test edge cases and error scenarios
- Maintain test coverage above configured thresholds

## Security

- Never commit secrets, API keys, or credentials
- Use parameterized queries for database access
- Validate and sanitize all user input
- Follow OWASP guidelines for the project's domain

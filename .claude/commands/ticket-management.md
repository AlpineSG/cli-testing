---
description: Create, update, or transition project management tickets
allowed-tools:
  - Bash(gh *)
  - Bash(curl *)
  - Read
  - Grep
---

# Ticket Management

Manage project management tickets. $ARGUMENTS should specify the action and details.

**Usage:** Provide an action — `create`, `update`, or `transition` — followed by relevant details.

Examples:
- `create: Bug — login form does not validate email`
- `update PROJ-123: add acceptance criteria`
- `transition PROJ-123 to done`

## Steps

### Jira Integration

Requires `JIRA_BASE_URL`, `JIRA_EMAIL`, and `JIRA_API_TOKEN` environment variables.

1. **Create a ticket**
   - Parse the ticket type (Bug, Story, Task) and summary from $ARGUMENTS.
   - Use `curl` to call the Jira REST API:
     ```
     curl -s -X POST "$JIRA_BASE_URL/rest/api/3/issue" \
       -H "Content-Type: application/json" \
       -u "$JIRA_EMAIL:$JIRA_API_TOKEN" \
       -d '{"fields":{"project":{"key":"<PROJECT>"},"summary":"<SUMMARY>","issuetype":{"name":"<TYPE>"}}}'
     ```
   - Report the created ticket key and URL.

2. **Update a ticket**
   - Parse the ticket key and update details from $ARGUMENTS.
   - Use `curl` to update the issue fields:
     ```
     curl -s -X PUT "$JIRA_BASE_URL/rest/api/3/issue/<KEY>" \
       -H "Content-Type: application/json" \
       -u "$JIRA_EMAIL:$JIRA_API_TOKEN" \
       -d '{"fields":{...}}'
     ```
   - Add comments with `curl` to the `/comment` endpoint if needed.

3. **Transition a ticket**
   - Parse the ticket key and target status from $ARGUMENTS.
   - Fetch available transitions: `GET /rest/api/3/issue/<KEY>/transitions`
   - Find the transition ID matching the target status.
   - Execute the transition: `POST /rest/api/3/issue/<KEY>/transitions`
   - Confirm the new status.


## Report

After completing the action, report:
- **Action performed**: What was done.
- **Ticket reference**: Key/number and URL.
- **Current status**: The ticket's current state.

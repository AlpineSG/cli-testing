---
description: Create a pull request from the current branch with conventional formatting
allowed-tools:
  - Bash(gh *)
  - Bash(glab *)
  - Bash(git *)
  - Read
  - Grep
  - Glob
---

# PR Create

Create a pull request from the current branch. If $ARGUMENTS is provided, use it as the task description or ticket reference.

## Steps

1. **Verify branch state**
   - Run `git status` to ensure the working tree is clean. If there are uncommitted changes, commit them first with a conventional commit message.
   - Run `git log --oneline origin/main..HEAD` (or the appropriate base branch) to see what commits will be included.
   - If on `main` or `master`, create a feature branch first:
     - Use naming convention: `feat/PROJ-123-short-description` (derive from $ARGUMENTS or commit messages).

2. **Push the branch**
   - Run `git push -u origin HEAD` to push the branch and set upstream tracking.

3. **Generate PR metadata**
   - **Title**: Derive from the commit messages or $ARGUMENTS. Use conventional format (e.g., `feat: add user authentication`).
   - **Body**: Include:
     - Summary of changes (from commit messages)
     - List of modified files
     - Jira ticket link (extract ticket ID from branch name or $ARGUMENTS)
     - Test plan or verification steps

4. **Create the PR**
   - Show the user a preview of the PR title, body, and target branch.
   - Ask for confirmation before creating.
   - Run `gh pr create --title "<title>" --body "<body>" --draft` to create as a draft PR.
   - Report the PR URL.

5. **Post-creation**
   - If a Jira ticket was referenced, add the PR link as a comment on the ticket.
   - Suggest running `/pr-review` on the new PR as a self-check.

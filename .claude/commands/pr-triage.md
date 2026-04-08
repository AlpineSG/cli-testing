---
description: Triage a pull request — check CI status, reviews, and merge conflicts
allowed-tools:
  - Bash(gh pr checks *)
  - Bash(gh pr view *)
  - Bash(gh pr diff *)
  - Bash(git *)
---

# PR Triage

Triage the pull request specified in $ARGUMENTS (PR number or URL).

## Steps

1. **Check CI status**
   - Run `gh pr checks $ARGUMENTS` to see all CI check results.
   - For each failing check, note the check name, status, and link.

2. **Read review comments**
   - Run `gh pr view $ARGUMENTS --comments` to read all review comments.
   - Identify comments that require action (requested changes, unresolved threads).
   - Categorize them: blocking vs. non-blocking.

3. **Check for merge conflicts**
   - Run `gh pr view $ARGUMENTS --json mergeable,mergeStateStatus` to check merge status.
   - If there are conflicts, identify which files are conflicting.

4. **Produce a triage report**

   ### CI Status
   - List each check with pass/fail status.
   - For failures, summarize the error and suggest a fix.

   ### Pending Reviews
   - List unresolved review comments with file and line references.
   - Suggest how to address each.

   ### Merge Conflicts
   - List conflicting files if any.
   - Suggest a resolution strategy (rebase).

   ### Recommended Next Steps
   Provide a prioritized list of actions to get this PR merged:
   1. Fix critical CI failures first.
   2. Resolve merge conflicts.
   3. Address blocking review comments.
   4. Respond to non-blocking comments.

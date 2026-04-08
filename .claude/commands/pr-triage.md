---
description: Triage a pull request — check CI status, reviews, and merge conflicts, then remediate issues
allowed-tools:
  - Bash(gh *)
  - Bash(glab *)
  - Bash(git *)
  - Bash(npm run *)
  - Bash(npx *)
  - Read
  - Write
  - Edit
  - Grep
  - Glob
---

# PR Triage

Triage the pull request specified in $ARGUMENTS (PR number or URL).

## Steps

1. **Check CI status**
   - Run `gh pr checks $ARGUMENTS` to see all CI check results.
   - For each failing check, note the check name, status, and link.
   - For each failing check, fetch the full log to understand the root cause.
   - Use `gh run view <run-id> --log-failed` to get failure details.

2. **Read review comments**
   - Run `gh pr view $ARGUMENTS --comments` to read all review comments.
   - Identify comments that require action (requested changes, unresolved threads).
   - Categorize them: blocking vs. non-blocking.
   - Further categorize actionable comments as: code change requests, questions, or style/preference issues.

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

## Remediation

After producing the triage report, proceed to fix the issues found.

**Runaway guard**: If you have already pushed a fix commit for a specific failing check in this session, do NOT push another fix for the same check. Instead, comment that the issue persists and needs human attention.

5. **Proactive rebase check**
   - Run `git fetch origin` and check how far behind the base branch the PR branch is.
   - If the branch is more than 10 commits behind, rebase onto the base branch even if no conflict is reported — this prevents conflicts from accumulating.

6. **Remediate CI failures**
   - For each failing check, analyze the failure log.
   - **Lint failures**: Run `npm run lint -- --fix` or `npx eslint --fix <files>` to auto-fix.
   - **Type errors**: Read the error, fix the type issue in the source file.
   - **Test failures**: Read the failing test, understand the assertion, fix the source or test.
   - Commit fixes with a `fix:` prefix (e.g., `fix: resolve lint errors in auth module`).
   - Push the commit to the PR branch.

7. **Address review comments**
   - Process all unresolved actionable comments.
   - For **code change requests**: apply the requested change.
   - For **questions**: analyze the code and reply with an explanation.
   - For **style/preference issues**: apply if aligned with project standards, otherwise reply explaining the rationale.
   - Batch ALL code changes into a single commit: `fix: address review feedback`.
   - Reply to each comment thread individually to maintain context.
   - Push once after all changes are applied.

8. **Resolve merge conflicts**
   - Checkout the PR branch and run `git rebase origin/<base-branch>`.
   - Resolve trivial conflicts (auto-resolvable formatting, import ordering).
   - If conflicts require human judgment (logic changes, overlapping feature work), abort the rebase and add a PR comment explaining which files conflict and why.
   - Force-push the rebased branch: `git push --force-with-lease`.

9. **Stale PR detection**
   - If the PR has had no activity (commits, comments, reviews) for more than 7 days:
     - Proactively rebase to keep the branch current.
     - Add a comment: "This PR has been inactive for X days. Rebased to latest to keep it current."

10. **Size monitoring**
    - Run `gh pr diff $ARGUMENTS --stat` to check the diff size.
    - If the diff exceeds 500 lines changed, add a `large-pr` label via `gh pr edit $ARGUMENTS --add-label large-pr`.
    - Add a comment suggesting the PR be split if it exceeds 500 lines.

11. **Auto-labeling**
    - Based on the triage results, apply status labels via `gh pr edit $ARGUMENTS --add-label <label>`:
      - `ci-passing` or `ci-failing` based on check results
      - `conflicts` if merge conflicts detected
      - `approved` / `changes-requested` based on review state
      - `stale` if inactive for more than 7 days
    - Remove stale labels that no longer apply (e.g., remove `ci-failing` after fixes pass).

### Stacked PR awareness

When resolving conflicts, check if the PR's base branch is another feature branch (not main/master/develop):
- If stacked, process the base PR first before this one.
- Rebase/merge in dependency order to avoid cascading conflicts.

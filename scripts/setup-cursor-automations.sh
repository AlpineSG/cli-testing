#!/usr/bin/env bash
# ──────────────────────────────────────────────────────────────
# Cursor PR Automations — Setup Guide
#
# Cursor automations are configured at cursor.com/automations
# This script describes the 3 automations to create.
# ──────────────────────────────────────────────────────────────

set -euo pipefail

cat <<'GUIDE'

╔══════════════════════════════════════════════════════════════╗
║           Cursor PR Automations — Setup Guide               ║
╚══════════════════════════════════════════════════════════════╝

Cursor automations run as event-driven agents on Cursor's
cloud infrastructure. Each automation triggers on a specific
event and executes the agent instructions you provide.

Navigate to: https://cursor.com/automations

Create the following 3 automations:

══════════════════════════════════════════════════════════════
 Automation 1: PR Opened
══════════════════════════════════════════════════════════════

  Trigger type:  GitHub → Pull Request Opened
  Instructions:  Copy contents of .cursor/agents/pr-opened.md
  Description:   Triage new PRs — auto-label, size check,
                 verify ticket links, suggest reviewers

══════════════════════════════════════════════════════════════
 Automation 2: PR Comment Added
══════════════════════════════════════════════════════════════

  Trigger type:  GitHub → Pull Request Comment
  Instructions:  Copy contents of .cursor/agents/pr-comment.md
  Description:   Respond to review comments — apply code
                 fixes, answer questions, reply to threads

══════════════════════════════════════════════════════════════
 Automation 3: CI Checks Completed
══════════════════════════════════════════════════════════════

  Trigger type:  GitHub → Check Suite Completed
  Instructions:  Copy contents of .cursor/agents/checks-completed.md
  Description:   Auto-remediate CI failures — lint fixes,
                 type fixes, test fixes, conflict resolution

══════════════════════════════════════════════════════════════
 Configuration
══════════════════════════════════════════════════════════════

  Remediation strategy: rebase
    Conflicts resolved by rebasing onto the base branch.
    Uses force-push with lease for safety.

══════════════════════════════════════════════════════════════
 Tips
══════════════════════════════════════════════════════════════

  • Each automation should reference the corresponding agent
    instruction file. Copy-paste the full file content into
    the "Agent instructions" field in the Cursor UI.

  • You can customize the agent instructions after setup.
    The files in .cursor/agents/ are your source of truth.

  • Automations run in Cursor's cloud sandbox — no local
    machine needed.

GUIDE

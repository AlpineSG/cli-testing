#!/usr/bin/env bash
# Setup script for PR Health Monitor — Cloud Scheduled Task (GitHub)
#
# This script registers a cloud scheduled task that monitors all open PRs
# for merge conflicts, CI failures, review comments, and staleness.
#
# Cloud scheduled tasks run on Anthropic's infrastructure — no local machine required.
# Minimum interval: 1 hour. The task gets a fresh clone of your repository each run.
#
# Prerequisites:
#   - Claude Code CLI installed and authenticated
#   - GitHub repository with push access
#
# Usage: bash scripts/setup-pr-monitor.sh
#
# Alternative: run `/schedule` in Claude Code and configure manually.

set -euo pipefail

echo "Setting up PR Health Monitor as a cloud scheduled task..."
echo ""

# Check for Claude CLI
if ! command -v claude &> /dev/null; then
  echo "Error: Claude Code CLI not found. Install it first:"
  echo "  npm install -g @anthropic-ai/claude-code"
  exit 1
fi

# Register the scheduled task
claude schedule create \
  --name "pr-health-monitor" \
  --cron "0 */2 * * *" \
  --prompt "You are the PR health monitor. Check all open PRs in this repository for merge conflicts, CI failures, unaddressed review comments, and staleness. Remediate issues where possible. Use the pr-health-monitor agent." \
  --description "Monitor open PRs for conflicts, CI failures, and review comments every 2 hours"

echo ""
echo "PR Health Monitor scheduled successfully!"
echo ""
echo "The monitor will run every 2 hours and:"
echo "  - Proactively rebase PRs that fall behind main"
echo "  - Fix deterministic CI failures (lint, type, build errors)"
echo "  - Address review comments and reply to threads"
echo "  - Resolve merge conflicts (rebase strategy)"
echo "  - Flag stale PRs (>7 days inactive)"
echo "  - Flag large PRs (>500 lines)"
echo "  - Apply status labels"
echo ""
echo "Manage your scheduled tasks:"
echo "  claude schedule list      — view all scheduled tasks"
echo "  claude schedule delete    — remove a scheduled task"
echo "  /schedule                 — manage from within Claude Code"

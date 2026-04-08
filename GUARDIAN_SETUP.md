# Guardian AI — Setup Guide

> This file lists only the steps Guardian could not automate. Everything else is already configured.

## Remaining Steps

1. Create a Codacy account at https://www.codacy.com and connect your repository
2. Create a DeepSource account at https://deepsource.com and connect your repository
3. Create a Qodana Cloud account at https://qodana.cloud and obtain a project token
4. Enable Copilot Code Review in your GitHub repository settings and assign &#34;Copilot&#34; as a PR reviewer
5. Note: Copilot instructions (.github/copilot-instructions.md) are passive guidance only — Copilot does not support interactive skills like Claude Code or Cursor
6. Run `bash scripts/setup-cursor-automations.sh` for step-by-step instructions on configuring event-driven PR automations at cursor.com/automations

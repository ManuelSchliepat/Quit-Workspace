#!/bin/bash
set -euo pipefail

# Only run in remote (web) environments
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# ── Install Bun (required for PAI TypeScript hooks) ──────────────────────────
if ! command -v bun &>/dev/null; then
  echo "Installing Bun runtime..."
  curl -fsSL https://bun.sh/install | bash 2>/dev/null
  export PATH="$HOME/.bun/bin:$PATH"

  if command -v bun &>/dev/null; then
    echo "Bun installed: v$(bun --version)"
  else
    echo "ERROR: Failed to install Bun" >&2
    exit 1
  fi
else
  echo "Bun already available: v$(bun --version)"
fi

# ── Persist Bun in PATH for the session ───────────────────────────────────────
if [ -n "${CLAUDE_ENV_FILE:-}" ]; then
  echo 'export PATH="$HOME/.bun/bin:$PATH"' >> "$CLAUDE_ENV_FILE"
fi

echo "PAI v3.0 session environment ready."

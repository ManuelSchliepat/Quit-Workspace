#!/bin/bash
set -euo pipefail

# Only run in remote (web) environments
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# ── Async mode: runs in background while session starts ───────────────────────
echo '{"async": true, "asyncTimeout": 300000}'

# ── Install Bun (required for PAI TypeScript hooks) ──────────────────────────
if ! command -v bun &>/dev/null; then
  echo "Installing Bun runtime..."
  curl -fsSL https://bun.sh/install | bash 2>/dev/null
  export PATH="$HOME/.bun/bin:$PATH"

  if ! command -v bun &>/dev/null; then
    echo "ERROR: Failed to install Bun" >&2
    exit 1
  fi
  echo "Bun installed: v$(bun --version)"
else
  export PATH="$HOME/.bun/bin:$PATH"
fi

# ── Persist environment variables for the session ─────────────────────────────
# PAI_DIR must point to the .claude directory so ${PAI_DIR}/hooks/... resolves
if [ -n "${CLAUDE_ENV_FILE:-}" ]; then
  echo 'export PATH="$HOME/.bun/bin:$PATH"' >> "$CLAUDE_ENV_FILE"
  echo "export PAI_DIR=\"${CLAUDE_PROJECT_DIR}/.claude\"" >> "$CLAUDE_ENV_FILE"
fi

echo "PAI v3.0 session environment ready (PAI_DIR=${CLAUDE_PROJECT_DIR}/.claude)"

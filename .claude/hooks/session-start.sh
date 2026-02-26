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

# ── Install Fabric CLI (required for YouTube extraction: fabric -y URL) ───────
export PATH="$HOME/.local/bin:$PATH"
if ! command -v fabric &>/dev/null; then
  echo "Installing Fabric CLI..."
  curl -fsSL https://raw.githubusercontent.com/danielmiessler/fabric/main/scripts/installer/install.sh | bash 2>/dev/null
  if command -v fabric &>/dev/null; then
    echo "Fabric installed: $(fabric --version 2>/dev/null || echo 'ok')"
  else
    echo "WARN: Fabric CLI install failed — native pattern execution still works" >&2
  fi
else
  echo "Fabric already available: $(fabric --version 2>/dev/null || echo 'ok')"
fi

# ── Persist environment variables for the session ─────────────────────────────
# PAI_DIR must point to the .claude directory so ${PAI_DIR}/hooks/... resolves
if [ -n "${CLAUDE_ENV_FILE:-}" ]; then
  echo 'export PATH="$HOME/.bun/bin:$HOME/.local/bin:$PATH"' >> "$CLAUDE_ENV_FILE"
  echo "export PAI_DIR=\"${CLAUDE_PROJECT_DIR}/.claude\"" >> "$CLAUDE_ENV_FILE"
fi

echo "PAI v3.0 session environment ready (PAI_DIR=${CLAUDE_PROJECT_DIR}/.claude)"

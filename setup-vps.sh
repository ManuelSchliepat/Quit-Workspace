#!/bin/bash
set -e

echo "=== PAI VPS Setup ==="

# 1. Node.js installieren (falls nicht vorhanden)
if ! command -v node &> /dev/null; then
  echo "[1/4] Node.js installieren..."
  curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
  sudo apt-get install -y nodejs
else
  echo "[1/4] Node.js bereits installiert: $(node -v)"
fi

# 2. Claude Code installieren
echo "[2/4] Claude Code installieren..."
npm install -g @anthropic-ai/claude-code

# 3. Repo klonen oder aktualisieren
REPO_DIR="$HOME/Quit-Workspace"
if [ -d "$REPO_DIR/.git" ]; then
  echo "[3/4] Repo aktualisieren..."
  git -C "$REPO_DIR" pull origin main
else
  echo "[3/4] Repo klonen..."
  git clone https://github.com/ManuelSchliepat/Quit-Workspace.git "$REPO_DIR"
fi

# 4. Anthropic API Key setzen
echo ""
echo "[4/4] Anthropic API Key"
echo "Den Key findest du unter: https://console.anthropic.com/settings/keys"
read -p "Gib deinen ANTHROPIC_API_KEY ein: " API_KEY

if [ -n "$API_KEY" ]; then
  # In .bashrc / .zshrc eintragen
  SHELL_RC="$HOME/.bashrc"
  [ -f "$HOME/.zshrc" ] && SHELL_RC="$HOME/.zshrc"

  # Alten Eintrag entfernen falls vorhanden
  sed -i '/ANTHROPIC_API_KEY/d' "$SHELL_RC"
  echo "export ANTHROPIC_API_KEY=\"$API_KEY\"" >> "$SHELL_RC"
  export ANTHROPIC_API_KEY="$API_KEY"
  echo "API Key gesetzt."
else
  echo "Kein Key eingegeben — bitte später manuell setzen:"
  echo "  export ANTHROPIC_API_KEY=\"sk-ant-...\""
fi

echo ""
echo "=== Setup abgeschlossen! ==="
echo ""
echo "PAI starten:"
echo "  cd ~/Quit-Workspace"
echo "  claude"
echo ""
echo "Tipp: 'source ~/.bashrc' ausführen damit der API Key aktiv ist."

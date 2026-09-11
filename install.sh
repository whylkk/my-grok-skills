#!/usr/bin/env bash
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEST="${GROK_SKILLS_HOME:-}"
ONLY=""
while [[ $# -gt 0 ]]; do
  case "$1" in
    --dest) DEST="$2"; shift 2 ;;
    --only) ONLY="$2"; shift 2 ;;
    -h|--help) echo "Usage: bash install.sh [--dest DIR] [--only skill1,skill2]"; exit 0 ;;
    *) echo "Unknown: $1"; exit 1 ;;
  esac
done
if [[ -z "$DEST" ]]; then
  if [[ -d /home/workdir/.grok/skills ]]; then DEST="/home/workdir/.grok/skills"
  else DEST="$HOME/.grok/skills"; fi
fi
mkdir -p "$DEST"
echo "Install destination: $DEST"
SKILLS=(legado-book-source quantumult-x surge tampermonkey)
if [[ -n "$ONLY" ]]; then IFS=',' read -ra SKILLS <<< "$ONLY"; fi
for name in "${SKILLS[@]}"; do
  src="$SCRIPT_DIR/$name"
  [[ -d "$src" && -f "$src/SKILL.md" ]] || { echo "Skip: $name"; continue; }
  target="$DEST/$name"
  rm -rf "$target"
  cp -a "$src" "$target"
  echo "Installed: $name -> $target"
done
echo "Done. Restart conversation to load skills."
ls -la "$DEST"

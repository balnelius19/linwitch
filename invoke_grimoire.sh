#!/bin/bash

echo "🔮 Invocation du grimoire dans ce terminal..."

GRIMOIRE="$HOME/Desktop/001_grimoire/grimoire_v1_01.py"

if [ -f "$GRIMOIRE" ]; then
    echo "📜 Grimoire détecté. Lancement en cours..."
    python3 "$GRIMOIRE"
else
    echo "❌ Le grimoire n’a pas été trouvé à l’emplacement prévu."
fi


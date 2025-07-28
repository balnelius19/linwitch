#!/usr/bin/env python3
import tkinter as tk
import random
from datetime import datetime
import os

# Dossier personnalisé
dossier_tirage = "/home/vboxuser/Desktop/002_tarot/Tirage"
os.makedirs(dossier_tirage, exist_ok=True)

# Cartes
majeurs = [
    "Le Mat", "Le Bateleur", "La Papesse", "L’Impératrice", "L’Empereur", "Le Pape",
    "L’Amoureux", "Le Chariot", "La Justice", "L’Hermite", "La Roue de Fortune",
    "La Force", "Le Pendu", "L’Arcane sans nom", "Tempérance", "Le Diable",
    "La Maison Dieu", "L’Étoile", "La Lune", "Le Soleil", "Le Jugement", "Le Monde"
]

mineurs = []
couleurs = ["Coupes", "Deniers", "Épées", "Bâtons"]
valeurs = ["As", "Deux", "Trois", "Quatre", "Cinq", "Six", "Sept", "Huit", "Neuf", "Dix", "Valet", "Cavalier", "Roi"]

for couleur in couleurs:
    for valeur in valeurs:
        mineurs.append(f"{valeur} de {couleur}")

deck = majeurs + mineurs

# Interface
app = tk.Tk()
app.title("🔮 Tirage Tarot Complet")
resultat = tk.StringVar()
resultat.set("Clique pour tirer 12 cartes et sauvegarder...")

def tirer_12_cartes():
    tirage = random.sample(deck, 12)
    texte = "\n".join([f"{i+1}. {carte}" for i, carte in enumerate(tirage)])
    resultat.set(f"🃏 Tirage de 12 cartes :\n\n{texte}")

    # Nom du fichier
    timestamp = datetime.now().strftime("%Y-%m-%d_%Hh%M")
    nom_fichier = os.path.join(dossier_tirage, f"Tirage_{timestamp}.txt")

    # Sauvegarde
    with open(nom_fichier, "w") as f:
        f.write("🔮 Tirage du " + timestamp.replace("_", " à ") + "\n\n")
        f.write(texte)
    print(f"✅ Tirage enregistré dans : {nom_fichier}")

# Widgets
tk.Label(app, textvariable=resultat, font=("Arial", 12), wraplength=400, justify="left").pack(pady=20)
tk.Button(app, text="📥 Tirer et sauvegarder", command=tirer_12_cartes, font=("Arial", 12)).pack(pady=10)

app.mainloop()

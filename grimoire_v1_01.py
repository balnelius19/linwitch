#!/usr/bin/env python3
import tkinter as tk
from tkinter import filedialog, messagebox
import os

DOSSIER_SORTS = os.path.expanduser("~/Desktop/001_grimoire/mes_sorts")
FICHIER_AIDE = os.path.expanduser("~/Desktop/001_grimoire/aide_des_sorts.txt")
os.makedirs(DOSSIER_SORTS, exist_ok=True)

class Grimoire:
    def __init__(self, root):
        self.root = root
        self.root.title("🪄 Grimoire Magique V1.01")
        self.fichier_actuel = None

        self.texte = tk.Text(root, wrap="word", font=("Monospace", 12),
                             fg="red", bg="black", insertbackground="red")
        self.texte.pack(expand=True, fill="both", padx=10, pady=10)

        self.menu = tk.Menu(root)
        root.config(menu=self.menu)

        fichier_menu = tk.Menu(self.menu, tearoff=False)
        self.menu.add_cascade(label="📁 Sortilèges", menu=fichier_menu)
        fichier_menu.add_command(label="Ouvrir un sort...", command=self.ouvrir_sort)
        fichier_menu.add_command(label="Enregistrer le sort", command=self.enregistrer_sort)
        fichier_menu.add_command(label="💾 Enregistrer un nouveau sort", command=self.enregistrer_nouveau)
        fichier_menu.add_separator()
        fichier_menu.add_command(label="📚 Ouvrir l'aide", command=self.ouvrir_aide)
        fichier_menu.add_command(label="❌ Fermer le grimoire", command=self.confirmer_fermeture)

    def ouvrir_sort(self):
        chemin = filedialog.askopenfilename(initialdir=DOSSIER_SORTS,
                                            title="Ouvrir un sort",
                                            filetypes=[("Fichiers texte", "*.txt")])
        if chemin:
            try:
                with open(chemin, "r", encoding="utf-8") as f:
                    contenu = f.read()
                self.texte.delete("1.0", tk.END)
                self.texte.insert(tk.END, contenu)
                self.fichier_actuel = chemin
                self.root.title(f"🪄 Grimoire - {os.path.basename(chemin)}")
            except Exception as e:
                messagebox.showerror("Erreur", f"Impossible d'ouvrir le sort : {e}")

    def enregistrer_sort(self):
        if self.fichier_actuel:
            reponse = messagebox.askyesno("Sauvegarde", "Souhaites-tu écraser le sort existant ?")
            if reponse:
                try:
                    with open(self.fichier_actuel, "w", encoding="utf-8") as f:
                        f.write(self.texte.get("1.0", tk.END))
                    messagebox.showinfo("Sauvegarde", "Sort modifié et enregistré 🧙‍♀️📜")
                except Exception as e:
                    messagebox.showerror("Erreur", f"Impossible d'enregistrer le sort : {e}")
            else:
                self.enregistrer_nouveau()
        else:
            self.enregistrer_nouveau()

    def enregistrer_nouveau(self):
        nom = filedialog.asksaveasfilename(initialdir=DOSSIER_SORTS,
                                           title="Enregistrer un nouveau sort",
                                           defaultextension=".txt",
                                           filetypes=[("Fichiers texte", "*.txt")])
        if nom:
            try:
                with open(nom, "w", encoding="utf-8") as f:
                    f.write(self.texte.get("1.0", tk.END))
                self.fichier_actuel = nom
                self.root.title(f"🪄 Grimoire - {os.path.basename(nom)}")
                messagebox.showinfo("Grimoire", "Nouveau sort inscrit dans le grimoire 🔥")
            except Exception as e:
                messagebox.showerror("Erreur", f"Impossible d'enregistrer le sort : {e}")

    def ouvrir_aide(self):
        try:
            with open(FICHIER_AIDE, "r", encoding="utf-8") as f:
                aide_contenu = f.read()
            messagebox.showinfo("📚 Aide des Sorts", aide_contenu)
        except FileNotFoundError:
            messagebox.showwarning("Erreur", "Le fichier d’aide est introuvable.")

    def confirmer_fermeture(self):
        if messagebox.askokcancel("Quitter le grimoire", "Souhaites-tu vraiment refermer le grimoire ?"):
            self.root.quit()

if __name__ == "__main__":
    root = tk.Tk()
    grimoire = Grimoire(root)
    root.geometry("700x500")
    root.mainloop()

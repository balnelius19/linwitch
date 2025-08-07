const oracleMystique = [
  { nom: "La Voix", message: "Elle t’a déjà parlé. Écoutes-tu encore ?" },
  { nom: "Le Désert", message: "Ce qui semble vide abrite une promesse." },
  { nom: "L'Éclat", message: "Ce qui brille t’attire, mais te révèle-t-il vraiment ?" },
  { nom: "L’Ombre", message: "Elle suit ton pas et connaît ton secret." },
  { nom: "La Porte", message: "Elle ne s’ouvre pas avec les mains." },
  { nom: "Le Chiffre", message: "Le nombre que tu évites te parle en silence." },
  { nom: "L’Étang", message: "Ce qui stagne reflète ta forme mouvante." },
  { nom: "L’Écho", message: "Ce que tu demandes… te demande aussi." },
  { nom: "Le Fil", message: "La trame est déjà cousue. Tire doucement." },
  { nom: "La Graine", message: "Tu ne sais jamais ce qu’elle devient." },
  { nom: "Le Labyrinthe", message: "Tu n’es pas perdu, tu explores." },
  { nom: "La Plume", message: "Ce qui semble léger porte le poids d’un choix." },
  { nom: "Le Vide", message: "Remplis-le ou reste-y." },
  { nom: "La Source", message: "Elle attend que tu cesses de chercher." },
  { nom: "Le Mur", message: "Il est là pour que tu l’écoutes." },
  { nom: "La Clé", message: "Pas toute porte mérite d’être ouverte." },
  { nom: "Le Miroir", message: "La réponse est de l’autre côté du regard." },
  { nom: "Le Souffle", message: "Ce n’est pas ton idée qui compte, c’est le moment de l’exhaler." },
  { nom: "La Nuit", message: "Elle contient ce que le jour oublie." },
  { nom: "L’Oiseau", message: "Tu ne peux pas le capturer, mais il te guide." },
  { nom: "La Rupture", message: "Le lien cassé ne voulait plus être noué." },
  { nom: "Le Feu", message: "Brûle ou purifie — tu choisis l’usage." },
  { nom: "Le Silence", message: "La question était trop bruyante." },
  { nom: "La Marche", message: "Un pas suffit à tout changer. Encore faut-il le faire." },
  { nom: "L’Œil", message: "Quelqu’un regarde… et attend que tu voies." },
  { nom: "La Faille", message: "Ce n’est pas une erreur, c’est une ouverture." },
  { nom: "La Cascade", message: "Une émotion veut descendre. Laisse-la couler." },
  { nom: "Le Croisement", message: "Choisir, c’est aussi laisser partir." },
  { nom: "La Brume", message: "Tu ne vois rien ? Peut-être n’as-tu pas besoin de voir." },
  { nom: "L’Éclipse", message: "Ce qui est caché veut te protéger pour un temps." }
];

function tirerOracleMystique() {
  const index = Math.floor(Math.random() * oracleMystique.length);
  const carte = oracleMystique[index];
  document.getElementById("oracle-resultat").innerHTML =
    `<strong>🔮 ${carte.nom}</strong><br><em>${carte.message}</em>`;
}
function interrogerOracle() {
  const index = Math.floor(Math.random() * oracleMystique.length);
  const carte = oracleMystique[index];

  const question = document.getElementById("question-oracle").value.trim();

  document.getElementById("oracle-reponse").innerHTML =
    `<strong>🔮 ${carte.nom}</strong><br><em>${carte.message}</em><br><br>` +
    (question ? `<small>Ta question : "${question}"</small>` : "");
}



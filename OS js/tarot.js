const arcanesMajeurs = [
  { nom: "Le Mat", signification: "Liberté, imprévisibilité, nouveau départ" },
  { nom: "Le Bateleur", signification: "Potentiel, initiative, commencement" },
  { nom: "La Papesse", signification: "Savoir caché, intuition, mystère" },
  { nom: "L’Impératrice", signification: "Créativité, abondance, féminité" },
  { nom: "L’Empereur", signification: "Stabilité, autorité, structure" },
  { nom: "Le Pape", signification: "Sagesse spirituelle, guidance, tradition" },
  { nom: "L’Amoureux", signification: "Choix, union, tentation" },
  { nom: "Le Chariot", signification: "Volonté, victoire, mouvement" },
  { nom: "La Justice", signification: "Équité, vérité, responsabilité" },
  { nom: "L’Hermite", signification: "Introspection, solitude, sagesse" },
  { nom: "La Roue de Fortune", signification: "Destin, changement, cycles" },
  { nom: "La Force", signification: "Courage, maîtrise de soi, énergie" },
  { nom: "Le Pendu", signification: "Lâcher-prise, pause, nouvelle perspective" },
  { nom: "La Mort", signification: "Transformation, fin, renouveau" },
  { nom: "Tempérance", signification: "Équilibre, patience, harmonie" },
  { nom: "Le Diable", signification: "Attachement, tentation, pouvoir caché" },
  { nom: "La Maison Dieu", signification: "Choc, révélation, reconstruction" },
  { nom: "L’Étoile", signification: "Espoir, inspiration, guidance divine" },
  { nom: "La Lune", signification: "Illusion, intuition, inconscient" },
  { nom: "Le Soleil", signification: "Joie, clarté, succès" },
  { nom: "Le Jugement", signification: "Renaissance, appel intérieur, éveil" },
  { nom: "Le Monde", signification: "Accomplissement, unité, réalisation" }
];

const arcanesMineurs = [
  // 🪄 Bâtons
  { nom: "As de Bâtons", signification: "Inspiration, potentiel, énergie créative" },
  { nom: "Deux de Bâtons", signification: "Décision, planification, vision" },
  { nom: "Trois de Bâtons", signification: "Expansion, anticipation, opportunité" },
  { nom: "Quatre de Bâtons", signification: "Célébration, stabilité, foyer" },
  { nom: "Cinq de Bâtons", signification: "Conflit, compétition, tension" },
  { nom: "Six de Bâtons", signification: "Reconnaissance, victoire, succès" },
  { nom: "Sept de Bâtons", signification: "Défense, persévérance, courage" },
  { nom: "Huit de Bâtons", signification: "Vitesse, mouvement, communication" },
  { nom: "Neuf de Bâtons", signification: "Résilience, prudence, endurance" },
  { nom: "Dix de Bâtons", signification: "Fardeau, responsabilité, surcharge" },
  { nom: "Valet de Bâtons", signification: "Curiosité, découverte, ambition naissante" },
  { nom: "Cavalier de Bâtons", signification: "Aventure, impulsivité, passion" },
  { nom: "Reine de Bâtons", signification: "Charisme, indépendance, créativité" },
  { nom: "Roi de Bâtons", signification: "Leadership, vision, autorité" },

  { nom: "As de Coupes", signification: "Ouverture émotionnelle, amour naissant, bénédiction spirituelle" },
  { nom: "Deux de Coupes", signification: "Union, partenariat, connexion profonde" },
  { nom: "Trois de Coupes", signification: "Célébration, amitié, joie partagée" },
  { nom: "Quatre de Coupes", signification: "Réflexion, ennui, opportunité ignorée" },
  { nom: "Cinq de Coupes", signification: "Perte, regret, tristesse passagère" },
  { nom: "Six de Coupes", signification: "Souvenirs, nostalgie, innocence retrouvée" },
  { nom: "Sept de Coupes", signification: "Illusions, choix multiples, imagination débordante" },
  { nom: "Huit de Coupes", signification: "Abandon, quête intérieure, transition émotionnelle" },
  { nom: "Neuf de Coupes", signification: "Satisfaction, vœu exaucé, bien-être émotionnel" },
  { nom: "Dix de Coupes", signification: "Harmonie familiale, bonheur durable, accomplissement affectif" },
  { nom: "Valet de Coupes", signification: "Curiosité émotionnelle, message d’amour, sensibilité naissante" },
  { nom: "Cavalier de Coupes", signification: "Romantisme, quête du cœur, charme et douceur" },
  { nom: "Reine de Coupes", signification: "Empathie, intuition profonde, guérison émotionnelle" },
  { nom: "Roi de Coupes", signification: "Maîtrise des émotions, sagesse affective, compassion équilibrée" },
{ nom: "As de Deniers", signification: "Nouveau départ matériel, opportunité financière, prospérité" },
  { nom: "Deux de Deniers", signification: "Équilibre, flexibilité, gestion des ressources" },
  { nom: "Trois de Deniers", signification: "Collaboration, compétence, reconnaissance professionnelle" },
  { nom: "Quatre de Deniers", signification: "Stabilité, possession, attachement aux biens" },
  { nom: "Cinq de Deniers", signification: "Manque, exclusion, difficultés financières" },
  { nom: "Six de Deniers", signification: "Générosité, partage, équilibre des échanges" },
  { nom: "Sept de Deniers", signification: "Patience, évaluation, récolte des efforts" },
  { nom: "Huit de Deniers", signification: "Travail acharné, apprentissage, perfectionnement" },
  { nom: "Neuf de Deniers", signification: "Réussite personnelle, indépendance, confort" },
  { nom: "Dix de Deniers", signification: "Héritage, sécurité familiale, accomplissement matériel" },
  { nom: "Valet de Deniers", signification: "Ambition, étude, début d’un projet concret" },
  { nom: "Cavalier de Deniers", signification: "Fiabilité, persévérance, progression lente mais sûre" },
  { nom: "Reine de Deniers", signification: "Nourricière, gestion habile, prospérité domestique" },
  { nom: "Roi de Deniers", signification: "Maîtrise financière, leadership, succès matériel" },
  { nom: "As d'Épées", signification: "Clarté mentale, vérité révélée, percée intellectuelle" },
  { nom: "Deux d'Épées", signification: "Indécision, équilibre fragile, choix à faire" },
  { nom: "Trois d'Épées", signification: "Douleur, séparation, chagrin du cœur" },
  { nom: "Quatre d'Épées", signification: "Repos, guérison, pause nécessaire" },
  { nom: "Cinq d'Épées", signification: "Conflit, tension, victoire amère" },
  { nom: "Six d'Épées", signification: "Transition, départ, passage vers mieux" },
  { nom: "Sept d'Épées", signification: "Stratégie, discrétion, tromperie possible" },
  { nom: "Huit d'Épées", signification: "Blocage mental, peur, illusion d’emprisonnement" },
  { nom: "Neuf d'Épées", signification: "Anxiété, cauchemars, inquiétude profonde" },
  { nom: "Dix d'Épées", signification: "Fin douloureuse, libération, renaissance après chute" },
  { nom: "Valet d'Épées", signification: "Curiosité intellectuelle, vigilance, observation" },
  { nom: "Cavalier d'Épées", signification: "Action rapide, impulsivité, détermination tranchante" },
  { nom: "Reine d'Épées", signification: "Clarté, indépendance, vérité sans détour" },
  { nom: "Roi d'Épées", signification: "Autorité mentale, logique, jugement éclairé" }
];


function tirerCarte() {
  const index = Math.floor(Math.random() * arcanesMajeurs.length);
  const carte = arcanesMajeurs[index];
  document.getElementById("carte-resultat").innerHTML =
    `<strong>${carte.nom}</strong><br><em>${carte.signification}</em>`;
}

function tirerTroisCartes() {
  const indices = [];
  while (indices.length < 3) {
    const i = Math.floor(Math.random() * arcanesMajeurs.length);
    if (!indices.includes(i)) indices.push(i);
  }

  const positions = ["Passé", "Présent", "Futur"];
  let html = "";

  indices.forEach((i, idx) => {
    const carte = arcanesMajeurs[i];
    html += `<strong>${positions[idx]}:</strong> ${carte.nom}<br><em>${carte.signification}</em><br><br>`;
  });

  document.getElementById("trois-cartes-resultat").innerHTML = html;
}
 const toutesLesCartes = [...arcanesMajeurs, ...arcanesMineurs];

function tirerDouzeCartes() {
  const indices = [];
  while (indices.length < 12) {
    const i = Math.floor(Math.random() * toutesLesCartes.length);
    if (!indices.includes(i)) indices.push(i);
  }

  let html = "<h3>🃏 Tirage en 12 cartes :</h3><ul>";
  indices.forEach((i, idx) => {
    const carte = toutesLesCartes[i];
    html += `<li><strong>Carte ${idx + 1}</strong> — ${carte.nom}<br><em>${carte.signification}</em></li>`;
  });
  html += "</ul>";

  document.getElementById("tarot-12-resultat").innerHTML = html;
}


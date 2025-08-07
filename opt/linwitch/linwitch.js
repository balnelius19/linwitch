function afficherSection(id) {
  const sections = [
    "grimoire-section",
    "calendrier-section",
    "tarot-section",
    "oracle-section"
  ];
  sections.forEach(sectionId => {
    document.getElementById(sectionId).style.display = sectionId === id ? "block" : "none";
  });
}

// 📜 Fonctions de navigation
function ouvrirGrimoire() {
  afficherSection("grimoire-section");
}

function ouvrirCalendrier() {
  afficherSection("calendrier-section");
  chargerSolstices();
  chargerFetesFixes();
}


function lancerTarot() {
  afficherSection("tarot-section");
}

function consulterOracle() {
  afficherSection("oracle-section");
}

// 🔮 IndexedDB pour les sorts
let db;
const request = indexedDB.open("GrimoireMagique", 1);

request.onupgradeneeded = (event) => {
  db = event.target.result;
  db.createObjectStore("sorts", { keyPath: "id", autoIncrement: true });
};

request.onsuccess = (event) => {
  db = event.target.result;
  afficherSorts();
  console.log("indexedDB initialisé");
};

request.onerror = (event) => {
  console.error("Erreur IndexedDB :", event.target.error);
};

// ✏️ Gestion des sorts
function enregistrerSort() {
  const nom = document.getElementById("sort-nom").value.trim();
  const description = document.getElementById("sort-description").value.trim();
  if (!nom || !description || !db) return;

  const transaction = db.transaction(["sorts"], "readwrite");
  const store = transaction.objectStore("sorts");
  store.add({ nom, description });

  transaction.oncomplete = () => {
    afficherSorts();
    document.getElementById("sort-nom").value = "";
    document.getElementById("sort-description").value = "";
  };
}

function afficherSorts() {
  const liste = document.getElementById("liste-des-sorts");
  liste.innerHTML = "";

  const transaction = db.transaction(["sorts"], "readonly");
  const store = transaction.objectStore("sorts");
  const request = store.getAll();

  request.onsuccess = () => {
    request.result.forEach(sort => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${sort.nom}</strong>: ${sort.description}
        <button onclick="modifierSort(${sort.id})">✏️</button>
        <button onclick="supprimerSort(${sort.id})">🗑️</button>
      `;
      liste.appendChild(li);
    });
  };
}

function modifierSort(id) {
  const nouveauNom = prompt("Nouveau nom du sort :");
  const nouvelleDesc = prompt("Nouvelle description du sort :");
  if (!nouveauNom || !nouvelleDesc) return;

  const transaction = db.transaction(["sorts"], "readwrite");
  const store = transaction.objectStore("sorts");
  store.put({ id, nom: nouveauNom, description: nouvelleDesc });

  transaction.oncomplete = afficherSorts;
}

function supprimerSort(id) {
  const transaction = db.transaction(["sorts"], "readwrite");
  const store = transaction.objectStore("sorts");
  store.delete(id);

  transaction.oncomplete = afficherSorts;
}

function chargerSolstices() {
  const aujourdHui = new Date();

  if (!solstices || !solstices.evenements) {
    console.error("🌘 Données solstices non disponibles");
    document.getElementById("calendrier-info").innerHTML = "<p>Les astres se sont voilés...</p>";
    return;
  }

  const prochains = solstices.evenements.filter(e => new Date(e.date) > aujourdHui);

  let html = "<h3>🌞 Événements célestes à venir :</h3><ul>";
  prochains.slice(0, 4).forEach(e => {
    const date = new Date(e.date);
    const joursRestants = Math.ceil((date - aujourdHui) / (1000 * 60 * 60 * 24));
    html += `<li><strong>${e.nom}</strong> — ${date.toLocaleDateString()} (dans ${joursRestants} jour${joursRestants > 1 ? "s" : ""})</li>`;
  });
  html += "</ul>";

  const calendrierEl = document.getElementById("calendrier-info");
  calendrierEl.innerHTML = html;
  calendrierEl.style.display = "block";
}

function chargerFetesFixes() {
  const aujourdHui = new Date();
  const annee = aujourdHui.getFullYear();

  const prochainesFetes = solstices.fetesFixes.map(f => {
    const dateStr = `${annee}-${String(f.mois).padStart(2, "0")}-${String(f.jour).padStart(2, "0")}`;
    return { nom: f.nom, date: new Date(dateStr) };
  }).filter(f => f.date >= aujourdHui);

  let html = "<h3>🎊 Fêtes fixes à venir :</h3><ul>";
  prochainesFetes.forEach(f => {
    html += `<li><strong>${f.nom}</strong> — ${f.date.toLocaleDateString()}</li>`;
  });
  html += "</ul>";

  document.getElementById("compte-a-rebours").innerHTML += html;
}





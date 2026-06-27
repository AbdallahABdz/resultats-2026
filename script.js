// =======================
// Liste des niveaux
// =======================

const niveaux = [

    // ---------- INGENIEUR ----------

    {
        name: "1ère Ingénieur",
        global: "pdf/1ere Ing Globale.pdf",
        matiere: "pdf/1ere ING Matière.pdf"
    },

    {
        name: "2ème Ingénieur",
        global: "pdf/2eme ING Globale.pdf",
        matiere: "pdf/2eme ING Matière.pdf"
    },

    {
        name: "3ème Ingénieur",
        global: "pdf/3 eme ING Globale.pdf",
        matiere: "pdf/3 eme ING Matière.pdf"
    },

    // ---------- LICENCE ----------

    {
        name: "L1 Automobile",
        global: "pdf/L1 Automobile Globale.pdf",
        matiere: "pdf/L1 Automobile Matière.pdf"
    },

 

    {
        name: "L2 Automobile",
        global: "pdf/L2 Automobile Globale.pdf",
        matiere: "pdf/L2 Automobile Matière.pdf"
    },
    {
        name: "L2 Automatique",
        global: "pdf/L2 Aut Globale.pdf",
        matiere: "pdf/L2 Aut Matière.pdf"
    },
    {
        name: "L2 Electromécanique",
        global: "pdf/L2 ELM Globale.pdf",
        matiere: "pdf/L2 ELM Matière.pdf"
    },

    {
        name: "L2 Electrotechnique",
        global: "pdf/L2 ELT Globale.pdf",
        matiere: "pdf/L2 ELT Matière.pdf"
    },

    {
        name: "L3 Automatique",
        global: "pdf/L3 Aut Globale.pdf",
        matiere: "pdf/L3 Aut Matière.pdf"
    },

    {
        name: "L3 Electromécanique",
        global: "pdf/L3 ELM Globale.pdf",
        matiere: "pdf/L3 ELM Matière.pdf"
    },

    {
        name: "L3 Electrotechnique",
        global: "pdf/L3 ELT Globale.pdf",
        matiere: "pdf/L3 ELT Matière.pdf"
    },

    // ---------- MASTER 1 ----------

    {
        name: "M1 Automatique",
        global: "pdf/M1 Aut Globale.pdf",
        matiere: "pdf/M1 Aut Matière.pdf"
    },

    {
        name: "M1 Commandes",
        global: "pdf/M1 CMD Globale.pdf",
        matiere: "pdf/M1 CMD Matière.pdf"
    },

    {
        name: "M1 Electromécanique",
        global: "pdf/M1 ELM Globale.pdf",
        matiere: "pdf/M1 ELM Matière.pdf"
    },

    {
        name: "M1 Énergies Renouvelables",
        global: "pdf/M1 ER Globale.pdf",
        matiere: "pdf/M1 ER Matière.pdf"
    },

    // ---------- MASTER 2 ----------

    {
        name: "M2 Automatique",
        matiere: "pdf/M2 Aut Matière.pdf"
    },

    {
        name: "M2 Commandes",
        matiere: "pdf/M2 CMD Matière.pdf"
    },

    {
        name: "M2 Electromécanique",
        matiere: "pdf/M2 ELM Matière.pdf"
    },

    {
        name: "M2 Énergies Renouvelables",
        matiere: "pdf/M2 ER Matière.pdf"
    }

];

// =======================
// Google Form
// =======================

const form = "https://forms.gle/GPhpdWuBqeCitvBz7";

// =======================

const cards = document.getElementById("cards");

// =======================
// Création des cartes
// =======================

function render(list) {

    cards.innerHTML = "";

    list.forEach(n => {

        let html = `
        <div class="card">
            <h3>${n.name}</h3>
        `;

        if (n.global) {

            html += `
            <a class="btn global"
               href="${n.global}"
               target="_blank">
               📄 PV Global
            </a>
            `;

        }

        if (n.matiere) {

            html += `
            <a class="btn matiere"
               href="${n.matiere}"
               target="_blank">
               📑 PV Matière
            </a>
            `;

        }

        html += `
            <a class="btn recours"
               href="${form}"
               target="_blank">
               📝 Déposer un recours
            </a>

        </div>
        `;

        cards.innerHTML += html;

    });

}

// =======================
// Affichage initial
// =======================

render(niveaux);

// =======================
// Recherche
// =======================

document.getElementById("search").addEventListener("input", function () {

    const txt = this.value.toLowerCase();

    const filtre = niveaux.filter(item =>
        item.name.toLowerCase().includes(txt)
    );

    render(filtre);

});

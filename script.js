// =========================
// Google Form
// =========================

const form = "https://forms.gle/LE3S9eEhaBwhakhJ6";

// =========================
// Liste des fichiers
// =========================

const niveaux = [

    // -------- Ingénieur --------

    {
        name: "1ère Ingénieur",
        file: "xlsx/1ere ING.xlsx"
    },

    {
        name: "2ème Ingénieur",
        file: "xlsx/2eme ING.xlsx"
    },

    {
        name: "3ème Ingénieur",
        file: "xlsx/3eme ING.xlsx"
    },

    // -------- ELM Automobile --------

    {
        name: "L1 ELM Automobile",
        file: "xlsx/L1 ELM Automobile.xlsx"
    },

       {
        name: "L2 ELM Automobile",
        file: "xlsx/L2 ELM Automobile.xlsx"
    },
// -------- Licence --------
    {
        name: "L2 Automatique",
        file: "xlsx/L2 Aut.xlsx"
    },

 
    {
        name: "L2 Electromécanique",
        file: "xlsx/L2 ELM.xlsx"
    },

    {
        name: "L2 Electrotechnique",
        file: "xlsx/L2 ELT.xlsx"
    },

    {
        name: "L3 Automatique",
        file: "xlsx/L3 Aut.xlsx"
    },

    {
        name: "L3 Electromécanique",
        file: "xlsx/L3 ELM.xlsx"
    },

    {
        name: "L3 Electrotechnique",
        file: "xlsx/L3 ELT.xlsx"
    },

    // -------- Master 1 --------

    {
        name: "M1 Automatique et Informatique Industrielle",
        file: "xlsx/M1 Aut.xlsx"
    },

    {
        name: "M1 Commandes Electrique",
        file: "xlsx/M1 CMD.xlsx"
    },

    {
        name: "M1 Electromécanique",
        file: "xlsx/M1 ELM.xlsx"
    },

    {
        name: "M1 Énergies Renouvelables",
        file: "xlsx/M1 ER.xlsx"
    },

    // -------- Master 2 --------

    {
        name: "M2 Automatique et Informatique Industrielle",
        file: "xlsx/M2 Aut.xlsx"
    },

    {
        name: "M2 Commandes Electrique",
        file: "xlsx/M2 CMD.xlsx"
    },

    {
        name: "M2 Electromécanique",
        file: "xlsx/M2 ELM.xlsx"
    },

    {
        name: "M2 Énergies Renouvelables",
        file: "xlsx/M2 ER.xlsx"
    }

];

// =========================

const cards = document.getElementById("cards");

// =========================

function render(list){

    cards.innerHTML = "";

    list.forEach(item=>{

        cards.innerHTML += `
        <div class="card">

            <h3>${item.name}</h3>

            <a class="btn global"
               href="${item.file}"
               target="_blank">
               📊 Consulter les résultats
            </a>

            <a class="btn recours"
               href="${form}"
               target="_blank">
               📝 Déposer un recours
            </a>

        </div>
        `;

    });

}

// =========================

render(niveaux);

// =========================

document.getElementById("search").addEventListener("input",function(){

    const txt=this.value.toLowerCase();

    render(

        niveaux.filter(item=>

            item.name.toLowerCase().includes(txt)

        )

    );

});

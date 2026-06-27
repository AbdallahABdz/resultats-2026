
const niveaux=[
{name:"1ère ING",global:"pdf/1ere Ing Globale.pdf",matiere:"pdf/1ere ING Matière.pdf"},
{name:"2ème ING",global:"pdf/2eme ING Globale.pdf",matiere:"pdf/2eme ING Matière.pdf"},
{name:"3ème ING",global:"pdf/3eme ING Globale.pdf",matiere:"pdf/3eme ING Matière.pdf"},
{name:"L1 Automobile",global:"pdf/L1 Automobile Globale.pdf",matiere:"pdf/L1 Automobile Matière.pdf"},
{name:"L2 AUT",global:"pdf/L2 AUT Globale.pdf",matiere:"pdf/L2 AUT Matière.pdf"},
{name:"L2 ELM",global:"pdf/L2 ELM Globale.pdf",matiere:"pdf/L2 ELM Matière.pdf"},
{name:"L2 ELT",global:"pdf/L2 ELT Globale.pdf",matiere:"pdf/L2 ELT Matière.pdf"},
{name:"L3 AUT",global:"pdf/L3 AUT Globale.pdf",matiere:"pdf/L3 AUT Matière.pdf"},
{name:"L3 ELM",global:"pdf/L3 ELM Globale.pdf",matiere:"pdf/L3 ELM Matière.pdf"},
  {name:"M1 Automatique",global:"pdf/M1 Aut Globale.pdf",matiere:"pdf/M1 Aut Matière.pdf"},
{name:"M1 Commandes",global:"pdf/M1 CMD Globale.pdf",matiere:"pdf/M1 CMD Matière.pdf"},
{name:"M1 Electromécanique",global:"pdf/M1 ELM Globale.pdf",matiere:"pdf/M1 ELM Matière.pdf"},
{name:"M1 Énergies Renouvelables",global:"pdf/M1 ER Globale.pdf",matiere:"pdf/M1 ER Matière.pdf"},

{name:"M2 Automatique",global:"",matiere:"pdf/M2 Aut Matière.pdf"},
{name:"M2 Commandes",global:"",matiere:"pdf/M2 CMD Matière.pdf"},
{name:"M2 Electromécanique",global:"",matiere:"pdf/M2 ELM Matière.pdf"},
{name:"M2 Énergies Renouvelables",global:"",matiere:"pdf/M2 ER Matière.pdf"}
];
const form="https://forms.gle/Ueh21xPwFFQRQyTR9";
const cards=document.getElementById("cards");
function render(list){
cards.innerHTML="";
list.forEach(n=>{
cards.innerHTML+=`<div class="card">
<h3>${n.name}</h3>
<a class="btn global" target="_blank" href="${n.global}">PV Global</a>
<a class="btn matiere" target="_blank" href="${n.matiere}">PV Matière</a>
<a class="btn recours" target="_blank" href="${form}?entry.niveau=${encodeURIComponent(n.name)}">أرسل طعن </a>
</div>`;
});
}
render(niveaux);
document.getElementById("search").oninput=e=>{
const q=e.target.value.toLowerCase();
render(niveaux.filter(x=>x.name.toLowerCase().includes(q)));
};

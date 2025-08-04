//exemple 

interface Personne {
    nom: string;
    age: number;
}

interface Élève extends Personne {
    niveau: string; 
    moyenne: number;
}

interface Professeur extends Personne {
    matière: string; 
    annéesExpérience: number;
}

// const eleve1: Élève = {
//     nom: "Jean",
//     age: 15,
//     niveau: "Seconde",
//     moyenne: 14.5
// };

// const prof1: Professeur = {
//     nom: "Dupont",
//     age: 42,
//     matière: "Physique",
//     annéesExpérience: 10
// };

// console.log(`${élève1.nom} (${élève1.niveau}) a ${élève1.moyenne}/20 de moyenne.`);
// console.log(`Prof ${prof1.nom} enseigne ${prof1.matière} depuis ${prof1.annéesExpérience} ans.`);
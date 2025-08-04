// //Interfaces en TypeScript
// Les interfaces définissent des contrats de structure que les classes ou objets doivent implémenter. Elles ne contiennent aucune implémentation.

// Caractéristiques des interfaces :
// Définissent la forme d'un objet

// Peuvent être implémentées par des classes

// Permettent le duck typing (typage structurel)

// Supportent l'héritage multiple


// Classes Concrètes en TypeScript
// Les classes concrètes sont des implémentations complètes qui peuvent :

// Implémenter des interfaces

// Étendre d'autres classes

// Contenir des implémentations de méthodes

// Définir des constructeurs


// Interface = Description du poste

interface Employé {
    nom: string;
    poste: string;
    travailler(): void;
    prendrePause(durée: number): void;
}


// Classe concrète = Employé réel
// class développeurs implements Employé {
//     constructor(
//         public nom: string,
//         public poste: string = "Développeur"
//     ) {}

//     travailler(): void {
//         console.log(`${this.nom} écrit du code TypeScript`);
//     }

//     prendrePause(durée: number): void {
//         console.log(`Pause café de ${durée} minutes`);
//     }

//     // Méthode spécifique au développeur
//     déboguer(): void {
//         console.log("Je cherche le bug...");
//     }
// }


//TypeScript offre une syntaxe concise pour déclarer et initialiser les propriétés d'une classe directement dans les paramètres du constructeur. C'est ce qu'on appelle l'initialisation courte (parameter properties).

// Au lieu d'ecrire ca : 

class Personn {
    private nom: string;
    public age: number;
    
    constructor(nom: string, age: number) {
        this.nom = nom;
        this.age = age;
    }
}

// on peut utiliser ce raccourci :

class Personnee {
    constructor(
        private nom: string, 
        public age: number
    ) {}
}


// Comment ça marche ?
// En ajoutant un modificateur d'accès (public, private, protected ou readonly) devant un paramètre du constructeur, TypeScript :

// Crée automatiquement une propriété de classe avec ce nom

// L'initialise avec la valeur passée au constructeur

// Applique le modificateur d'accès spécifié

// exemple concrete : 
class Employés {
    constructor(
        public nom: string,         // Accessible partout
        private salaire: number,    // Accessible seulement dans la classe
        readonly id: string,        // Lecture seule
        protected departement: string // Accessible dans la classe et sous-classes
    ) {}
}

const emp = new Employés("fatou", 50000, "EMP123", "IT");
console.log(emp.nom);      // OK
// console.log(emp.salaire); // Erreur: private
// emp.id = "NEW_ID";       // Erreur: readonlys

//exemple 2 : 

class CompteBancaire {
    constructor(
        private titulaire: string,
        private _solde: number = 0
    ) {}

    get solde(): number {
        return this._solde;
    }

    deposer(montant: number): void {
        this._solde += montant;
    }
}

const compte = new CompteBancaire("thier", 100);
compte.deposer(50);
console.log(compte.solde); // 150


//Modificateurs d'accès

//Les modificateurs d'accès private, protected, et publicpermettent de contrôler la visibilité et l'accessibilité des membres de classe, tels que les propriétés et les méthodes, dans les classes TypeScript. Ces modificateurs sont essentiels pour appliquer l'encapsulation et établir des limites pour l'accès et la modification de l'état interne d'une classe.

//Le private modificateur restreint l'accès au membre de classe uniquement dans la classe contenante.

//Le public modificateur fournit un accès illimité au membre de la classe, lui permettant d'être accessible de n'importe où.

class Personne2 {
    // Propriétés privées (encapsulation)
    private _surname: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._surname = name;
        this._age = age;
    }

    // Getters (accesseurs) - permettent un accès contrôlé aux propriétés privées
    get surname(): string {
        return this._surname;
    }

    get age(): number {
        return this._age;
    }

   

    // Setters (mutateurs) - permettent une modification contrôlée
    set surname(newName: string) {
        if (newName.length >= 2) { // Validation
            this._surname = newName;
        } else {
            throw new Error("Le nom doit contenir au moins 2 caractères");
        }
    }

    set age(newAge: number) {
        if (newAge >= 0 && newAge <= 120) { // Validation
            this._age = newAge;
        } else {
            throw new Error("L'âge doit être entre 0 et 120");
        }
    }

    // Méthode publique
    sayHello(): void {
        console.log(`Hello, my name is ${this._surname} and I'm ${this._age} years old.`);
    }

   
}

// Utilisation
const personnat = new Personne2("thierno", 30);

// Accès via les getters
console.log(personnat.surname); // "thierno"
console.log(personnat.age);  // 30

// Modification via les setters
personnat.surname = "thierno";      // Valide
personnat.age = 31;          // Valide



// Accès direct impossible (erreur de compilation)
// console.log(person._name);    // Erreur: Propriété privée
// person.generateId();         // Erreur: Méthode privée


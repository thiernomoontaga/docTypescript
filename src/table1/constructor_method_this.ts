//exemple de class : 
class Personne {
    public name: string;
    public age: number;
    //Les constructeurs sont des méthodes spéciales au sein d'une classe qui sont utilisées pour initialiser les propriétés de l'objet lorsqu'une instance de la classe est créée.
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    //Les méthodes sont des fonctions définies à l'intérieur d'une classe.
    sayHello() {
        console.log(
            `Hello, my name is ${this.name} and I'm ${this.age} years old.`
        );
    }
}

const Thierno = new Personne('thierno', 25);
Thierno.sayHello();


//Constructeurs privés : ils ne peuvent être appelés qu'au sein de la classe elle-même. Ils sont souvent utilisés pour appliquer un modèle singleton ou restreindre la création d'instances à une méthode de fabrique au sein de la classe.

class BaseClass {
    protected constructor() {}
}

class DerivedClass extends BaseClass {
    private value: number;

    constructor(value: number) {
        super();
        this.value = value;
    }
}
const derivedObj = new DerivedClass(10);


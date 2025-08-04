class Personneee {
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
// L'héritage désigne le mécanisme par lequel une classe peut hériter des propriétés et des méthodes d'une autre classe, appelée classe de base ou superclasse. La classe dérivée, également appelée classe enfant ou sous-classe, peut étendre et spécialiser les fonctionnalités de la classe de base en ajoutant de nouvelles propriétés et méthodes ou en remplaçant celles existantes.

// class Animal {
//     name: string;

//     constructor(name: string) {
//         this.name = name;
//     }

//     speak(): void {
//         console.log('The animal makes a sound');
//     }
// }

// class Dog extends Animal {
//     breed: string;

//     constructor(name: string, breed: string) {
//         super(name);
//         this.breed = breed;
//     }

//     speak(): void {
//         console.log('Woof! Woof!');
//     }
// }

// const animal = new Animal('Generic Animal');
// animal.speak(); 

// const dog = new Dog('Max', 'Labrador');
// dog.speak(); 

// TypeScript ne prend pas en charge l'héritage multiple au sens traditionnel du terme, mais l'héritage à partir d'une seule classe de base. TypeScript prend en charge plusieurs interfaces. Une interface peut définir un contrat pour la structure d'un objet, et une classe peut implémenter plusieurs interfaces. Cela permet à une classe d'hériter du comportement et de la structure de plusieurs sources.

interface Flyable {
    fly(): void;
}

interface Swimmable {
    swim(): void;
}

class FlyingFish implements Flyable, Swimmable {
    fly() {
        console.log('Flying...');
    }

    swim() {
        console.log('Swimming...');
    }
}

const flyingFish = new FlyingFish();
flyingFish.fly();
flyingFish.swim();
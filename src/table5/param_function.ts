// TypeScript permet de définir des paramètres par défaut dans les fonctions, combinant la flexibilité de JavaScript avec la sécurité du typage. Voici comment les utiliser efficacement.

function greeet(name: string = "ji"): string {
    return `Hello, ${name}!`;
}

console.log(greeet()); // "Hello, ji !"
console.log(greeet("thier")); // "Hello, thier!"

// typage explicite 

function calculateTax(amount: number, rate: number = 0.2): number {
    return amount * rate;
}

console.log(calculateTax(100)); 
console.log(calculateTax(100, 0.3)); 

// 3. instanceof (Classes)
// Vérifie si un objet est une instance d'une classe spécifique.

class Bird {
    fly() {
        console.log("Flying...");
    }
}

class Fish {
    swim() {
        console.log("Swimming...");
    }
}

function movee(animal: Bird | Fish) {
    if (animal instanceof Bird) {
        animal.fly(); // Type: Bird
    } else {
        animal.swim(); // Type: Fish
    }
}

// const tweety = new Bird();
// move(tweety); // "Flying..."
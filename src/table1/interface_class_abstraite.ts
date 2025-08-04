//Les classes abstraites sont principalement utilisées en TypeScript pour l'héritage. Elles permettent de définir des propriétés et des méthodes communes pouvant être héritées par les sous-classes. Ceci est utile pour définir un comportement commun et imposer l'implémentation de certaines méthodes par les sous-classes. Elles permettent de créer une hiérarchie de classes où la classe de base abstraite fournit une interface partagée et des fonctionnalités communes aux sous-classes.

//exemple :

abstract class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract makeSound(): void;
}

class Cat extends Animal {
    makeSound(): void {
        console.log(`${this.name} meows.`);
    }
}

const cat = new Cat('Whiskers');
cat.makeSound(); // Output: Whiskers meows.



//exemple : 

// Interface pure
interface Transport {
    vitesse: number;
    transporter(passagers: number): void;
}

// Classe abstraite
abstract class Vehicule implements Transport {
    constructor(
        public vitesse: number,
        protected marque: string
    ) {}

    abstract transporter(passagers: number): void;

    afficherMarque(): void {
        console.log(`Marque: ${this.marque}`);
    }
}

// Implémentation concrète
class Voiture extends Vehicule {
    transporter(passagers: number): void {
        console.log(`Transporte ${passagers} passagers par route`);
    }
}

class Bateau extends Vehicule {
    transporter(passagers: number): void {
        console.log(`Transporte ${passagers} passagers par mer`);
    }
}

// Utilisation
const maVoiture = new Voiture(120, "Toyota");
maVoiture.transporter(5);
maVoiture.afficherMarque();


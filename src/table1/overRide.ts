// Le mot-clé override est une fonctionnalité introduite dans TypeScript 4.3 qui permet de marquer explicitement lorsqu'une méthode ou propriété redéfinit un membre d'une classe parente.

class Employé {
    constructor(
        public nom: string,
        public département: string,
        protected salaireDeBase: number
    ) {}

    // Méthode à redéfinir dans les classes enfant
    calculerSalaire(): number {
        return this.salaireDeBase;
    }

    // Méthode commune
    sePrésenter(): void {
        console.log(`Je m'appelle ${this.nom} et je travaille en ${this.département}`);
    }
}

class Developpeur extends Employé {
    constructor(
        nom: string,
        département: string,
        salaireDeBase: number,
        private langages: string[]
    ) {
        super(nom, département, salaireDeBase);
    }

    // Redéfinition explicite avec vérification
    override calculerSalaire(): number {
        // Bonus pour les compétences techniques
        const bonus = this.langages.length * 500;
        return this.salaireDeBase + bonus;
    }

    // Nouvelle méthode spécifique aux développeurs
    listerCompétences(): void {
        console.log(`Je maîtrise : ${this.langages.join(', ')}`);
    }

    // Redéfinition de la méthode de présentation
    override sePrésenter(): void {
        super.sePrésenter(); // Appel à la méthode parente
        this.listerCompétences();
        console.log(`Mon salaire est de ${this.calculerSalaire()}€`);
    }
}

// Utilisation
// const dev = new Développeur("Alice", "IT", 3000, ["TypeScript", "js", "php"]);

// dev.sePrésenter();
/* Affiche :
Je m'appelle Alice et je travaille en IT
Je maîtrise : TypeScript, Python, Java
Mon salaire est de 4500€
*/
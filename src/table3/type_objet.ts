// En TypeScript, les types d'objets décrivent la forme d'un objet. Ils précisent les noms et les types de ses propriétés, ainsi que leur caractère obligatoire ou facultatif.

// Dans TypeScript, vous pouvez définir des types d’objets de deux manières principales :

// Interface qui définit la forme d'un objet en spécifiant les noms, les types et le caractère facultatif de ses propriétés.

interface User {
    name: string;
    agee: number;
    email?: string;
}

// Un alias de type, similaire à une interface, définit la forme d'un objet. Cependant, il peut également créer un nouveau type personnalisé basé sur un type existant ou une combinaison de types existants. Cela inclut la définition de types d'union, de types d'intersection et d'autres types complexes.

type Point = {
    x: number;
    y: number;
};



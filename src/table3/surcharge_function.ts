// Surcharge de fonction
// La surcharge de fonction permet de définir plusieurs signatures pour un même nom de fonction, chacune avec des types de paramètres et de retour différents. Lors de l'appel d'une fonction surchargée, TypeScript utilise les arguments fournis pour déterminer la signature correcte :

//exemple : 

function makeGreeting(name: string): string;
function makeGreeting(names: string[]): string[];

function makeGreeting(person: unknown): unknown {
    if (typeof person === 'string') {
        return `Hi ${person}!`;
    } else if (Array.isArray(person)) {
        return person.map(name => `Hi, ${name}!`);
    }
    throw new Error('Unable to greet');
}

makeGreeting('Simon');
makeGreeting(['Simone', 'John']);
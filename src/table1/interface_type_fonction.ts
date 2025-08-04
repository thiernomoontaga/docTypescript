// En TypeScript, les interfaces peuvent également définir des types de fonctions, ce qui est très utile pour typer des callbacks, des handlers d'événements ou des fonctions pures. Voici comment faire :

interface MathOperation {
    (a: number, b: number): number;
}

// Implémentation
const add: MathOperation = (x, y) => x + y;
const multiply: MathOperation = (x, y) => x * y;

console.log(add(2, 3));      // 5
console.log(multiply(2, 3)); // 6


interface FetchData {
    (url: string): Promise<string>; // Signature de la fonction
    timeout: number;                // Propriété supplémentaire
}

// Implémentation
const fetchWithTimeout: FetchData = async (url) => {
    const response = await fetch(url);
    return await response.text();
};
fetchWithTimeout.timeout = 5000; // Assignation de la propriété

// Utilisation
fetchWithTimeout("https://api.example.com")
    .then(data => console.log(data));


    
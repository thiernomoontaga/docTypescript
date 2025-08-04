// Fonctions avec Retours Complexes

function createUser(name: string, age: number): { name: string; age: number } {
    return { name, age };
}
const newUser = createUser("thierno", 25); 


// return un tuple 

function getCoordinates(): [number, number] {
    return [48.8566, 2.3522]; // [latitude, longitude]
}
const [lat, lon] = getCoordinates(); 


//retour d'une fonction

function createMultiplier(factor: number): (x: number) => number {
    return (x: number) => x * factor;
}
const double = createMultiplier(2);
console.log(double(5)); // 10
// TYPE DE RETOUR VOID 
function greett(): string { return "Hello"; }
// a) Fonction avec retour explicite (: type)

// Retourne un nombre
function Add(a: number, b: number): number {
    return a + b;
}
const sum: number = add(2, 3); // 5

// b) Fonction sans retour (void)

// Ne retourne rien (ex: console.log)
function logMessage(message: string): void {
    console.log(message);
}
logMessage("Hello!"); // Affiche "Hello!"


// c) Fonction retournant undefined

// Retourne explicitement `undefined`
function fail(): undefined {
    console.error("Failed!");
    return undefined;
}
const result = fail(); // undefined

// d) Fonction avec retour optionnel (?)

// Peut retourner `string` ou `undefined`
function getName(id: number): string | undefined {
    return id === 1 ? "thierno" : undefined;
}
const Name = getName(1); // "Alice" | undefined

// 2. Méthode find() avec Typage

interface User {
    id: number;
    name: string;
}

// const Isers: User[] = [
//     { id: 1, name: "bakary" },
//     { id: 2, name: "fatie" }
// ];

// // Retourne `User | undefined` (car l'élément peut ne pas exister)
// const user = users.find(u => u.id === 1);
// console.log(user?.name); // "Alice" (safe navigation avec `?.`)


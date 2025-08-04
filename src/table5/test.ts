// Tests de Types avec Unions en TypeScript (typeof, in, instanceof)
// En TypeScript, les type guards (tests de types) permettent d'affiner (narrow) le type d'une variable lors des unions de types. Voici comment utiliser typeof, in et instanceof efficacement.

// 1. typeof (Types Primitifs)
// Utilisé pour distinguer les types primitifs (string, number, boolean, etc.).\


function logValue(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase()); // Type: string
    } else {
        console.log(value.toFixed(2)); // Type: number
    }
}

logValue("hello"); // "HELLO"
logValue(42);      // "42.00"



//  in (Propriétés d'Objets)
// Vérifie la présence d'une propriété dans un objet, utile pour les unions d'objets.

interface Cat {
    meow(): void;
}

interface Dog {
    bark(): void;
}

function handlePet(pet: Cat | Dog) {
    if ("meow" in pet) {
        pet.meow(); // Type: Cat
    } else {
        pet.bark(); // Type: Dog
    }
}


type Admin = { role: "admin"; permissions: string[] };
type Userr = { role: "user"; email: string };

function greet(account: Admin | User) {
    if ("permissions" in account) {
        console.log("Admin permissions:", account.permissions); // Type: Admin
    } else {
        console.log("User email:", account.email); // Type: User
    }
}


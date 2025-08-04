// L'option strictNullChecks ajoute une sécurité supplémentaire en forçant le développeur à gérer explicitement les cas null et undefined. Voici des exemples concrets :

// exemple : 

let nom: string | null | undefined = "Alice";
nom = null;      // OK
nom = undefined; // OK


//exemple sur les fonctions

function greetT(name: string | null) {
    if (name === null) {
        console.log("Hello, stranger!");
    } else {
        console.log(`Hello, ${name.toUpperCase()}!`);
    }
}


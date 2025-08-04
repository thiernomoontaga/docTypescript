// la déclaration const permet de créer une constante qui peut être globale ou locale pour la fonction dans laquelle elle a été déclarée

// 1. const (constant)
// Portée : bloc (comme let)

// Réassignation : impossible

// Mutation : possible pour les objets/tableaux

// Hoisting : oui, mais pas initialisé


const number1 = 42;

try {
  // number1 = 99; error ! 
} catch (err) {
  console.log(err);
  
}

console.log(number1);

// L'instruction let permet de déclarer une variable dont la portée est celle du bloc courant, éventuellement en initialisant sa valeur.

// Portée : bloc

// Réassignation : possible

// Hoisting : oui, mais pas initialisé


//exemple : 

let  number = 1;

if (number === 1) {
  let number = 2;

  console.log(number);
  // Expected output: 2
}

console.log(number);
// Expected output: 1

//L'instruction var (pour variable) permet de déclarer une variable et éventuellement d'initialiser sa valeur.
// var (ancienne méthode)
// Portée : fonction

// Réassignation : possible

// Hoisting : oui, initialisé avec undefined

// Problèmes : fuites de portée
//exemple : 

var xx = 1;

if (xx === 1) {
  var xx = 2;

  console.log(xx);
  // Expected output: 2
}

console.log(xx);
// Expected output: 2

// Zone TDZ (Temporal Dead Zone)
// Avec let et const, la variable existe mais n'est pas initialisée avant sa déclaration :

console.log(x); // undefined (var)
console.log(y); // Erreur: TDZ (let/const)
var ww = 1;
let ss = 2;
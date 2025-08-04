// type primitf vs reference

/*
TypeScript prend en charge sept types primitifs. Un type de données primitif désigne un type qui n'est pas un objet et qui n'a aucune méthode associée. En TypeScript, tous les types primitifs sont immuables, ce qui signifie que leurs valeurs ne peuvent pas être modifiées une fois assignées.

*/

//Le string type primitif stocke des données textuelles et la valeur est toujours entre guillemets doubles ou simples.
// exemple 
const x: string = 'x';
const y: string = 'y';

//Les chaînes peuvent s'étendre sur plusieurs lignes si elles sont entourées du caractère backtick (`) :

//exemple 

let sentence: string = `xxx,
   yyy`;

//booléen

//Le boolean type de données dans TypeScript stocke une valeur binaire, soit trueou false.

const nice: boolean = true;

// number

// Dans TypeScript, un number type de données est représenté par une valeur à virgule flottante de 64 bits. Un number type peut représenter des entiers et des fractions. TypeScript prend également en charge les formats hexadécimal, binaire et octal, par exemple :

const decimal: number = 10;
const hexadecimal: number = 0xa00d; 
const binary: number = 0b1010; 
const octal: number = 0o633; 

//bigint

// A bigIntreprésente des valeurs numériques très grandes (253 – 1) et ne peuvent pas être représentées par un number.

// A bigIntpeut être créé en appelant la fonction intégrée BigInt()ou en ajoutant nà la fin de n'importe quel littéral numérique entier :

const v: bigint = BigInt(9007199254740991);
const w: bigint = 9007199254740991n;

//symbole

//Les symboles sont des identifiants uniques qui peuvent être utilisés comme clés de propriété dans les objets pour éviter les conflits de noms.

type Obj = {
    [sym: symbol]: number;
};

const a = Symbol('a');
const b = Symbol('b');
let obj: Obj = {};
obj[a] = 123;
obj[b] = 456;

console.log(obj[a]); // 123
console.log(obj[b]); // 456

//nul et indéfini

// nullet undefinedles types ne représentent tous deux aucune valeur ou l'absence de toute valeur.

// Le undefinedtype signifie que la valeur n'est pas attribuée ou initialisée ou indique une absence involontaire de valeur.

// Le nulltype signifie que nous savons que le champ n'a pas de valeur, donc la valeur n'est pas disponible, cela indique une absence intentionnelle de valeur.

//Tableau

//Un arrayest un type de données pouvant stocker plusieurs valeurs, du même type ou non. Il peut être défini à l'aide de la syntaxe suivante :

const j: string[] = ['a', 'b'];
const i: Array<string> = ['a', 'b'];
const o: Array<string | number> = ['a', 1, 'b', 2]; // Union


//TypeScript prend en charge les tableaux en lecture seule à l'aide de la syntaxe suivante :

const c: readonly string[] = ['a', 'b']; // Readonly modifier
const p: ReadonlyArray<string> = ['a', 'b'];
const m: ReadonlyArray<string | number> = ['a', 1, 'b', 2];
j.push('x'); // Invalid


//TypeScript prend en charge les tuples et les tuples en lecture seule :
const s: [string, number] = ['a', 1];
const r: readonly [string, number] = ['a', 1];


//Any

// Le anytype de données représente littéralement « n’importe quelle » valeur, c’est la valeur par défaut lorsque TypeScript ne peut pas déduire le type ou n’est pas spécifié.

// Lors de l'utilisation anyde TypeScript, le compilateur ignore la vérification de type, ce qui n'assure pas la sécurité de type any. En règle générale, il ne faut pas utiliser anyTypeScript pour désactiver le compilateur en cas d'erreur, mais plutôt se concentrer sur sa correction, car any cela peut entraîner la rupture de contrats et la perte des avantages de la saisie semi-automatique TypeScript.

// Le anytype pourrait être utile lors d'une migration progressive de JavaScript vers TypeScript, car il peut faire taire le compilateur.

// Le anytype est généralement source d'erreurs pouvant masquer de réels problèmes avec vos types. Évitez de l'utiliser autant que possible.

// type de reference 

// les types de references representent des types plus complexe : 
// Caractéristiques :
// Stockés dans le tas  avec une référence en mémoire

// Comparaison par référence (même contenu ≠ même objet)

// Mutable par défaut

// Copiés par référence lors des assignations
// exemple :
// objet
let person: {name: string,age: number} = {name:'thierno',age: 25}
// tableau
let notes: number[]=[2,10,19]
// objet 
let now: Date = new Date()
//class 
class Person{}
// instance 
let personne = new Person()


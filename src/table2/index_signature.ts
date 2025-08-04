//Les signatures d'index (index signatures) permettent de définir des types pour des objets dont les noms de propriétés ne sont pas connus à l'avance, mais dont on connaît le type des valeurs.
type K = {
    [name: string | number]: string; // Signature d'index
};

const k: K = { x: 'x', 1: 'b' };
console.log(k['x']);  // "x"
console.log(k[1]);    // "b"
console.log(k['1']);  // "b" (identique à k[1])

//exemples : 

type StringDictionary = {
    [key: string]: number;
};

const ages: StringDictionary = {
    "thierno": 25,
    "segnane": 30
};


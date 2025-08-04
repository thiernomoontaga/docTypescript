// Pour définir un type générique, vous utilisez des chevrons ( <>) pour spécifier les paramètres de type, par 

//exemple 

function identity<T>(arg: T): T {
    return arg;
}
const at = identity('x');
const by = identity(123);

const getLen = <T,>(data: ReadonlyArray<T>) => data.length;
const len = getLen([1, 2, 3]);


// EXEMPLE AVEC KEY OF 

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}


const user = {
    id: 1,
    name: 'Thierno',
    age: 25,
};


const namee = getProperty(user, 'name');  // 'Thierno'
const agee = getProperty(user, 'age');    // 25

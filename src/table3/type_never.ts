// Lorsqu'une variable est restreinte à un type qui ne peut contenir aucune valeur, le compilateur TypeScript en déduit que la variable doit être de ce never type. En effet, le type « jamais » représente une valeur qui ne peut jamais être produite.


const printValue = (val: string | number) => {
    if (typeof val === 'string') {
        console.log(val.toUpperCase());
    } else if (typeof val === 'number') {
        console.log(val.toFixed(2));
    } else {
        // val a ici le type never car il ne peut jamais être autre chose qu'une chaîne de caractères ou un nombre.
        const neverVal: never = val;
        console.log(`Unexpected value: ${neverVal}`);
    }
};


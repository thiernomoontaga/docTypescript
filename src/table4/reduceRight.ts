// reduceRight()
// Réduit le tableau à une seule valeur (droite → gauche).

const words = ["Hello", "World"];
const reversed = words.reduceRight((acc, word) => acc + " " + word);
console.log(reversed); // "World Hello"
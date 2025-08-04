// 1. Literal Types (Types Littéraux)
// Un literal type est un type qui représente une valeur exacte (chaîne, nombre, booléen).


type Direction = "north" | "south" | "east" | "west";

function move(direction: Direction): void {
    console.log(`Moving ${direction}`);
}

move("north"); //  Valide
// move("up");    



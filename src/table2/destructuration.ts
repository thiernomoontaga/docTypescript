// Destructuration en TypeScript (Tableaux et Objets)
// La destructuration (destructuring) est une syntaxe qui permet d'extraire des valeurs de tableaux ou de propriétés d'objets dans des variables distinctes. TypeScript améliore cette fonctionnalité avec un typage statique.

//Destruction avec les tableaux : 

const mes_notes: number[] = [10,12,38]

const [note1,note2,note3] = [number,number,number] =  mes_notes

// destruction avec  les objets 

const eleve: {username: string,age: number} = {username: "thierno",age: 25}
const {username,age} : {username: string,age: number} = eleve


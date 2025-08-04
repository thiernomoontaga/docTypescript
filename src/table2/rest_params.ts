// TypeScript permet de gérer un nombre variable de paramètres dans les fonctions grâce à la syntaxe Rest Parameters, qui est fortement typée.


function rest(...args: string[]):void{
  return console.log(args)
}


rest('thierno','modou','samba')


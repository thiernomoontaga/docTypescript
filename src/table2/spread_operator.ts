/*
les spread operator herites de ES6 sont des operateurs qui permettent d'etendre des elements d'un iterable dans des endroits qui attendent plusieurs elements . 

*/

// exemple sur les tableaux 
// exemple de copie 

const eukhloufatie:string[]= ['thierno','cherif','bakary','Barra','Abdoulaye','MomoSnap','fatiaral']
const alea33:string[] = [...eukhloufatie]

// exemple de concatenation

const platNational1: string[] = ['tiebou dieune','lakh']
const platNational2: string[] = [...platNational1,'tiebou keitiakh','lakh']

//exemple de fusion

const EukhlouFatie: string[] = ['thierno','cherif','bakary']

const Alea33: string[] = ['Abdoulaye','Barra','MomoSnap']

const wesh_wesh: string[] = [...Alea33,...EukhlouFatie]

// exemple sur les objets 
// copie d'objet
const thierno = {
  name:'segnane',
  referentiel : 'dev web mobile'
}

const thier = {...thierno}

// ajout de propriete dans un objet avec les spread operators

const thie = {
  ...thierno,
  couleur:'orange',
  age: 25
}

// fusion d'objet avec les spread operators

const thiernoSegnane = {
  ...thierno,...thier
}


// spread operateur avec les fonctions 

function view (a: string,b: string,c: string): string{
  return a + b + c 
}

console.log(...platNational1)

// parametre rest avec spread operateur


function reste(...args: string[]):void{
  return console.log(args)
}


reste('thierno','modou','samba')



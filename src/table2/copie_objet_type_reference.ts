const personnat1 = {
  age: 2
}

const personnat2 = personnat1 // copie par reference  

personnat2.age = 20

console.log(personnat1.age) // output 20 
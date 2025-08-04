// En TypeScript, une énumération numérique est une énumération dans laquelle chaque constante se voit attribuer une valeur numérique, commençant par 0 par défaut.

enum Size {
    Small, // value starts from 0
    Medium,
    Large,
}

// enum Size {
//     Small = 10,
//     Medium,
//     Large,
// }
// console.log(Size.Medium); // 11

enum Language {
    English = 'EN',
    Spanish = 'ES',
}

const enum Languagee {
    English = 'EN',
    Spanish = 'ES',
}
console.log(Language.English);



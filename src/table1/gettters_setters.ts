// Les getters et setters sont des méthodes spéciales permettant de définir un comportement d'accès et de modification personnalisé pour les propriétés de classe. Elles permettent d'encapsuler l'état interne d'un objet et de fournir une logique supplémentaire lors de l'obtention ou de la définition des valeurs des propriétés. En TypeScript, les getters et setters sont définis respectivement par les mots-clés getet set. Voici un exemple :
//exemple
class MyClass {
    private _myProperty: string;

    constructor(value: string) {
        this._myProperty = value;
    }
    get myProperty(): string {
        return this._myProperty;
    }
    set myProperty(value: string) {
        this._myProperty = value;
    }
}


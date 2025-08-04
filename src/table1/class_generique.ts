// Les classes génériques permettent de créer des composants réutilisables qui peuvent fonctionner avec une variété de types plutôt qu'un seul.

class SimpleStorage<T> {
    private value: T;

    constructor(initialValue: T) {
        this.value = initialValue;
    }

    // Getter
    getValue(): T {
        return this.value;
    }

    // Setter
    setValue(newValue: T): void {
        this.value = newValue;
    }
}

// exemple d'utilisation 

// Stocke un nombre
const numberStorage = new SimpleStorage<number>(10);
console.log(numberStorage.getValue()); // 10
numberStorage.setValue(20);
console.log(numberStorage.getValue()); // 20



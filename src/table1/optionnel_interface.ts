interface User {
    id: number;
    name: string;
    email?: string;  // L'email est optionnel
    age?: number;    // L'âge est optionnel
}

// Utilisation valide
// const user1: User = {
//     id: 1,
//     name: "thierno"
// };

// const user2: User = {
//     id: 2,
//     name: "thierno",
//     email: "thier@example.com",
//     age: 25
// };


interface Database {
    connect(): void;
    disconnect(): void;
    backup?(): void;  // Méthode optionnelle
}

class MyDatabase implements Database {
    connect() {
        console.log("Connected");
    }
    
    disconnect() {
        console.log("Disconnected");
    }
    
    // On n'est pas obligé d'implémenter backup()
}

const db = new MyDatabase();
db.connect();

// Vérification avant appel d'une méthode optionnelle
// if (db.backup) {
//     db.backup();
// }


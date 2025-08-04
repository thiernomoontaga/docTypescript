// L'utilisation d'une « Union Discriminée » est un modèle TypeScript qui consiste à ajouter une « étiquette » explicite aux objets pour distinguer les différents types au sein d'une union. Ce modèle est également appelé « union étiquetée ». Dans l'exemple suivant, l'« étiquette » est représentée par la propriété « type » :

type A = { type: 'type_a'; value: number };
type B = { type: 'type_b'; value: string };

const h = (input: A | B): string | number => {
    switch (input.type) {
        case 'type_a':
            return input.value + 100; // type is A
        case 'type_b':
            return input.value + 'extra'; // type is B
    }
};




// Le type unknown est un type sécurisé qui représente n'importe quelle valeur, mais impose une vérification de type avant son utilisation. C'est une alternative plus sûre à any.

function parseUserInput(input: unknown): string {
    if (typeof input === "string") {
        return input;
    }
    throw new Error("Invalid input: expected a string");
}

const userInput = JSON.parse(localStorage.getItem("input")!); // Type: unknown
const parsedInput = parseUserInput(userInput); // Type: string
function calculate(a: number, b: number, operation: (x: number, y: number) => number): number {
    return operation(a, b);
}

const resultat = calculate(5, 3, (x, y) => x + y);
console.log(resultat); // 8
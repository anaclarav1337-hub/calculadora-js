function adicionar(a, b) {
    return a + b;
}

console.log(adicionar(10, 5));

function subtrair(a, b) {
    return a - b;
}

console.log(subtrair(10, 5));

function multiplicar(a, b) {
    return a * b;
}

console.log(multiplicar(10, 5));

function dividir(a, b) {
    if (b === 0) {
        return "Não é possível dividir por zero.";
    }

    return a / b;
}

console.log(dividir(10, 5));
function executar(fn, n1, n2) {
    if (typeof fn === "function") {
        console.log(fn(n1, n2)); 
    }
}

function somar(a, b) {
    return a + b;
}
console.log (somar(28, 10));

function mult(a, b) {
    return a * b;
}
executar(mult, 12, 3);
console.log (mult(12, 2));
executar(somar, 90, 6);
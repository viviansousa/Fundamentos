function somar1 (a, b) { // simples
    return a + b;
}
console.log (somar1(15, 5));

function somar2 (a) { // com duas funções
    return function (b) {
        return a + b;
    }
}
console.log (somar2(90)(6));

const somar_10 = somar2(10); // A fica com valor de 10
console.log (somar_10(22)); // B fica com valor alternado

// maior reuso da função
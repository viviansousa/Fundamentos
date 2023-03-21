// #1: Função com Parâmetro e Retorno;
function somar (a, b) {
    return a + b;
}
console.log(somar(30,56));

let result = somar();
console.log (somar(15, 5));

// #2: Função com Parâmetro sem Retorno;
function exibaMult(a, b) {
    console.log (a * b);
}
exibaMult (12, 2);

// #3: Função sem Parâmetro com Retorno;
function retornarHoje() {
    return new Date();
}
console.log (retornarHoje());

// #4: Função sem Parâmetro sem Retorno
function retornarHAtual() {
    console.log (new Date().getHours());
}
retornarHAtual();
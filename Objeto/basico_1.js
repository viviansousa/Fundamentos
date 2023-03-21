let x = {};
let y = [];

console.log (typeof x);
console.log(Array.isArray(y));

const num = [10, 20, 30];
console.log(num);
console.log(typeof num);
console.log();

const produto = {
    nome: "Caneta",
    preco: 1.25,
    desconto: 0.20,
};
console.log(produto);
console.log(produto['nome']); // ou console.log(produto.nome);
console.log(produto.preco);
console.log(produto.desconto);
console.log(typeof produto);
let temDinheiro = false;
let estaEnsolarado = true;
let carroNaGaragem = true;

let resultadoE = "#1 - Vai pro shopping? ";
resultadoE += temDinheiro && estaEnsolarado;
console.log (resultadoE); // boolean AND

let resultadoOU = "#2 - Vai pro shopping? ";
resultadoOU += estaEnsolarado || carroNaGaragem;
console.log (resultadoOU); // boolean OR

console.log (); // boolean XOR
console.log (true !== true);
console.log (true !== false);
console.log (false != true);
console.log (false !== false);

console.log () // boolean NOT
console.log (!true);
console.log (!false);
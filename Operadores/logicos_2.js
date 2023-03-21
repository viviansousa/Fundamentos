const t1 = false;
const t2 = true;

let comprarTV50 = t1 && t2;   // AND
console.log ('Vamos comprar a TV 50"' , comprarTV50);

let comprarTV32 = t1 !== t2;  // XOR
console.log ('Vamos comprar a TV 32"' , comprarTV32);  

let sorvete = t1 || t2;       // OR
console.log ('Vamos comprar sorvete?' , sorvete)   

let ficaEmCasa = !sorvete     // NOT
console.log ('Vamos ficar em casa?' , ficaEmCasa);    


const num = [1, 2, 3, 4, 5, 8];

num[0] = 100; //muda o valor de [x]
num.push(6); // acrescenta uma última posição
const n = num.concat(7, 8, 9); // cria um 2º array


console.log(num.indexOf(4)); //mostra a posição do valor no ()
console.log(num.indexOf(4, 4));
console.log(num.join(' | ')); // divisoria
console.log(num);
console.log(n);
console.log(num.includes(6)); //procura um valor no array
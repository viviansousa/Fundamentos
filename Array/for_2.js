const notas = [7, 8, 3, 5, 10, 9, 8, 8];

// #1 forma
for (let n of notas) { // foreach
    console.log (n);
}
console.log ();

// #2 forma 
let valores = ' ';
for (let n of notas) {
    valores += n + ' '; // fica lado a lado por causa do ' '
}
console.log (valores);
console.log ();

// #3 forma 
let indices = ' ';
for (let indice in notas) {
    indices += indice + ' ';
}
console.log (indices);
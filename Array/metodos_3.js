const n =  [1, 2, 3, 4, 5, 6];

function cada (elemento, indice) {
    console.log (`[ ${elemento}], [ ${indice}]`);
}
n.forEach(cada);

console.log();
for (let i = 0; i < n.length; i++) {
    console.log(n[i]);
}
for (let i = 1; i <= 3; i ++) {
    console.log (`i = [${i}]`);
    console.log();
    for (let j = 1; j <= 3; j ++) {
        console.log (`j = [${j}]`);
    }
}

console.log();
for (let i = 1; i <= 3; i ++) {
    let linha = ``;
    for (let j = 1; j <= 3; j ++) {
        linha += `[${i}, ${j}] `;
    }
    console.log (linha);    
}

console.log();
for (let i = 1; i <= 3; i ++) {
    let linha = ``;
    for (let j = 1; j <= 3; j ++) {
        if (i !== j) {
            linha += `[${i}, ${j}] `;
        }    
    }
    console.log (linha);    
}
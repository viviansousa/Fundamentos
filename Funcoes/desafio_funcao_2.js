function nota_c(nota) {
    switch(Math.ceil(nota)) { // arredonda pra cima
        case 10: return "A+!";
        case 9: return "A";
        case 8: return "B+";
        case 7: return "B";
        case 6: return "C+";
        case 5: return "C";
        case 4: return "D+";
        case 3: return "D";
        case 2: return "E+";
        case 1: return "E";
        case 0: return "F";
        default: return ("Nulo");
    }    
}

console.log(`Aluna Ana Paula: ${nota_c(6.5)}!`);
console.log(`Aluno Bruno: ${nota_c(6)}!`);
console.log(`Aluno Marcelo: ${nota_c(9.3)}!`);
console.log(`Aluna Wanessa: ${nota_c(4.6)}!`);
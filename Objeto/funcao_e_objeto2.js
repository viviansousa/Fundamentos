function criarData(dia, mes, ano) {
    return {
        dia,              // simplificou
        mes,
        ano,
        exibir() {
            return `${this.dia}/${this.mes}/${this.ano}`;
        }    
    };
};
const d1 = criarData(15, '04', 1996);
const d2 = criarData(28, 10, 1998);
const d3 = criarData(19, '02', 2023);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());
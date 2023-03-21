const data = {
    dia: 15,
    mes: '04',
    ano: 1996,
};
console.log (`${data.dia}/${data.mes}/${data.ano}`);
//-------------------------------------------//

console.log();
const data2 = {
    dia: 28,
    mes: 10,
    ano: 1998,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};
console.log(data2.exibir());

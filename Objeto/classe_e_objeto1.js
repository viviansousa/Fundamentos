class Data {
    constructor(dia = 15, mes = 'Abr', ano = 1996) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    exibir() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};
const d1 = new Data();
d1.dia = 24;
d1.mes = 'Jan';
d1.ano = 2014;

const d2 = new Data();
d2.dia = 19;
d2.mes = 'Set';
d2.ano = 2022;

const d3 = new Data();
const d4 = new Data(31, 'Dez', 2009);

console.log(typeof constructor);
console.log(typeof d1);
console.log(typeof Data);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());
console.log(d4.exibir());
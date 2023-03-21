const data1 = {
    dia: 15,
    mes: '04',
    ano: 1996,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};
console.log(data1.exibir());

const data2 = {
    dia: 28,
    mes: 10,
    ano: 1998,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};
console.log(data2.exibir());

const data3 = {
    dia: 8,
    mes: 12,
    ano: 2022,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};
console.log(data3.exibir());
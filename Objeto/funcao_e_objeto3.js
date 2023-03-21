// Função Construtora (Classe) -> Objeto
// F.C. normalmente são criadas com a 1º Letra Maiuscula
function Data(dia = 1, mes = 1, ano = 2021) { 
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;

    this.exibir = function() {
        return `${this.dia}/ ${this.mes}/ ${this.ano}`;
    }
}

const D1 = new Data();
D1.ano = 1970;
const D2 = new Data(15, 12, 2023);
const D3 = new Data(12, 12, 2012);

console.log (typeof D1);
console.log (D1.exibir());
console.log (D2.exibir());
console.log (D3.exibir());

console.log (D1);
console.log (D2);
console.log (D3);
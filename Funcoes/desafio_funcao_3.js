const n1 = 7.5;
const n2 = 6.5;
const n3 = 0;

function calcularSituacao(n1, n2, n3) {
    const menorNota = Math.min(n1, n2, n3);
    const media = (n1 + n2 + n3 - menorNota) / 2;
    console.log(`O aluno ficou com média: ${media}`);
    
    if (media >= 7) {
      return "Aprovado";
    } else if (media >= 4 && media < 6.9) {
      return "Recuperação";
    } else {
      return "Reprovado";
    }
}
  
const situacao = calcularSituacao(n1, n2, n3);
console.log(situacao);   
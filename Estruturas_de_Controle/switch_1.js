let nota = 13;

switch (Math.ceil(nota)){
    default: 
        console.log ("Nota Inválida!");
        break;
    case 10:
    case 9:    
    case 8:
    case 7:
    case 6:     
        console.log ("Parabéns!");
        break;
    case 5:
    case 4:        
    case 3: 
    case 2:
        console.log ("P3!");  
        break;   
    case 1: 
    case 0:
        console.log ("Reprovado!");  
}

console.log ("Fim!");
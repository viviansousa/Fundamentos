function executar(fn) {
    if (typeof fn === "function") {
        console.log(fn()); // <--- Parte central da Aula
    }
}

function bom_dia() {
    return "Bom dia!";
}
executar(bom_dia); // <--- Parte central da Aula

const y = bom_dia();
console.log (y);
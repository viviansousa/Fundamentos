function retornar() {
    function bom_dia() {
        return "Bom dia!"
    }
    return bom_dia;
}
console.log (retornar);
console.log (retornar());
console.log (retornar()()); // #1 forma

const fn_bd = retornar(); //#2 forma
console.log(fn_bd());
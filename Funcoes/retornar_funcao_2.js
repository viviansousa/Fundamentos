function retornar_fn() {
    return function() {
        return "Boa tarde!";
    }
}
console.log (retornar_fn);
console.log (retornar_fn());
console.log (retornar_fn()()); //#1 forma

const fn_bt = retornar_fn(); //#2 forma
console.log (fn_bt());
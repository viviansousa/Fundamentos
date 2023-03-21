function sempreRetorna1() {
    return 1;
}

function text_num(returntext) {
    if (returntext) {
        return "Texto exemplo!"
    } else {
        return 123;
    }
}

let valor = sempreRetorna1() + 999;
console.log (valor);

let result = text_num(true);
console.log (result);

console.log (text_num(false));

const num = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < num.length; i++) {
    console.log(i, num[i]);
}

console.log ();
for (let i = 0; i < num.length; i+= 2) {
    console.log (num[i]);
}
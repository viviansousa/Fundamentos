let a = 1;
let b = 2;

// "++a" maior precedência em relação ao "a++"
console.log(++a === b++);
console.log(a === b);


a++;
console.log(a === b);
b++;
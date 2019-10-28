/*
    Opera sobre operadores booleanos o sobre operaciones 
    que devuelvan uno.
    op1 && op2 -> devuelve cierto si op1 y op2 son ciertos.
    op1 || op2 -> devuelve cierto si uno de los dos es cierto.
    !op1 -> devuelve lo contrario.
*/
console.log(6 > 5 && 2 > 1) // true

console.log(6 > 5 && 1 > 2) // false

console.log(6 > 5 || 1 > 2) // true

console.log(6 < 5 || 1 > 2) // false

let v = !(2 > 1);
console.log(v); //false
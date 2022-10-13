/* 
 
   Podemos utilizar una variable que contenga un tipo de datos primitivo (principales:number, string, boolean),
   como un objetos, en el sentido de que podemos utilizar métodos y propiedades del tipo de objeto que representan,
   no en el sentido de poder añadir otros atributos y métodos.

*/

let num = 1000;


//No se recomienda en js la utilización de constructor en datos primitivos(optimización memoria)
let num2 = new Number(2);

//Admite notación exponencial
let numexponencial = 1e9;
console.log(numexponencial) //1000000000

/*
   Todos los números se guardan en 64 bits, aunque no se utiliza mucho
   en versiones actuales de js existe un nuevo tipo bigint que permite 
   almacenar números más grnades, añadiendole una n al final del numero
*/

let bignum = 1111n;
console.log(typeof bignum); //bignint

//Admite notación Hexadecimal (0x), binaria(0b) y octal(0o)

let numexadecimal = 0xFF;
console.log(numexadecimal) //255

//Métodos

let numdecimal = 3.1416;

console.log(numdecimal.toExponential(2)) //3.14e+0
console.log(numdecimal.toFixed(3)) //3.142
console.log(numdecimal.toString()) //3.1416 (string)

//Tambien podemos utilizar el propio Number como clase estatica y acceder a propiedades


console.log(Number.MAX_VALUE) //1.7976931348623157e+308
console.log(Number.MAX_SAFE_INTEGER) //9007199254740991
console.log(Number.POSITIVE_INFINITY) //Infinity









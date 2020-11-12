/* 
Expresiones regulares
----------------------

Son patrones que describen como tiene que ser una cadena.

Ejemplo: "Que la cadena empiece por a"

Dos formas de definirlos:

let patron = new RegExp('expresión_regular','modificadores') //mod. opcionales (igm)
let patron = /expresión_regular/modificadores

*/


//El objeto RegExp dispone de un método test para comprobar si una cadena cumple el patrón

let patron1 = /hola/;
let patron2 = /a/g; //modificador g: Devuelve todas las coincidencias del patrón
let cadena = 'amapola';

console.log(patron1.test(cadena)); //false
console.log(patron2.test(cadena)); //true

//El objeto String también tiene métodos relacionados con la expresiones regulares

console.log( cadena.match(patron1) ); //null
console.log( cadena.match(patron2) ); // ['a','a','a']

console.log(cadena.replace(/a/g,'X')); //XmXpolX (Xmapola sin g)
console.log(cadena) //amapola (no modifica la cadena)






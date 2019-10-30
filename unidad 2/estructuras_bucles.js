/*
    Estructuras repetitivas, ejecutan un bloque de código mientras 
    se cumpla una condición dada. Para la ejecución en cuanto la 
    condición deje de cumplirse. Tenemos diferentes tipos, aunque son 
    equivalentes entre ellos (lo que puedo resolver con uno, también 
    lo puedo resolver con otro)
*/

// while : Comprueba la condición y ejecuta el bloque,
// por los que puede ocurrir que no haya ninguna ejecución.

let i = 1;
let final = 10;
console.log('while_____')
while (i < 10){
    console.log(i);
    i++;
}

// do while : Ejecuta el bloque y Comprueba la condición ,
// por los que siempre hay al menos una ejecución del bloque.

i = 1;
console.log('do while_____')
do {
    console.log(i);
    i++; 
} while (i < 10);

// for : Dentro de su declaración, se establece una intrucción inicial,
// la condición a comprobar en cada ejecución, y la actualización despues de cada ejecución.

console.log('for_____')
for (i = 1; i < 10; i++){
    console.log(i);
}
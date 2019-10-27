/*
var ES5. Son variables accesibles desde todo el script
o en el ámbito de las funciones. Permite redeclarar variables.
*/
var nombre='cifpcarlos3';

var f = function(){
    var profe='raul';
    console.log(nombre)
}

f(); //OK

console.log(profe); //error





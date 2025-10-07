/*
var ES5. Son variables accesibles desde todo el script
o en el ámbito de las funciones. Permite redeclarar variables.
*/
var nombre='cifpcarlos3';

function prueba(){

    console.log(nombre)
    
    var profe='raul';
}

prueba(); //OK

console.log(profe); //error




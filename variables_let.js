/*
let ES6. Son variables accesibles desde todo el script
o en el ámbito de los bloques {}. No permite redeclarar variables.
*/
let centro='cifpcarlos3';
//let centro='raul' -> error

if (true){
    let profe='raul';
    console.log(centro)
}

console.log(profe); //error -> profe is not defined
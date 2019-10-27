/*
const ES6. Son constantes accesibles desde todo el script
o en el ámbito de los bloques {}. No permite cambiar su valor
*/
const centro='cifpcarlos3';

// No permite redeclarar
const centro='raul'; // error : Identifier 'centro' has already been declared

// No permite cambiar valor
centro='otro'; //error : Assignment to constant variable.

//Ámbito bloques
if (true){
    let profe='raul';
}
console.log(profe); // error : profe is not defined
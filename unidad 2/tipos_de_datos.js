/*
  El tipo de datos de una variable, no se asigna en la declaración
  dependerá del tipo de datos que asignemos un puede cambiar durante la ejecución
*/
let variable = 7;
console.log('Valor:' + variable +'typeof: ' + typeof(variable));

variable='raul';
console.log(`Valor: ${variable} typeof: ${typeof(variable)}`);//ES6 otra forma de mostrar cadenas

variable=true;
console.log(`Valor: ${variable} typeof: ${typeof(variable)}`);

variable=5;
variable2='hola';
total= variable + variable2;
//Conversión automática de tipos en una operación
console.log(`Valor: ${total} typeof: ${typeof(total)}`);

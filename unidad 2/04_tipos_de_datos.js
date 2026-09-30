/*
TIPOS DE DATOS PRIMITIVOS

Principales
  number: Números enteros y de coma flotante de 64 bits (IEEE 754). 
    Valores especiales: Infinity, -Infinity y NaN (Not a Number).
  string: Cadenas de caracteres alfanuméricos entre comillas simples, dobles o comillas invertidas.
  boolean: true o false.

Otros
  undefined: Variable declarada pero aún sin valor asignado.
  null: Ausencia deliberada de valor (objeto nulo).
  bigint: Enteros con precisión arbitraria para números mayores a 253 - 1 (sufijo n, ej: 9007199254740995n).
*/



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

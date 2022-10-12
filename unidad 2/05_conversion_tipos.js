/* 
    Podemos cambiar los tipos de datos con Number/parseInt, y String/.toString
*/
let variable='5';
console.log(`${variable} tipo: ${typeof(variable)}`)

let variable2 = parseInt(variable);   //Es un método de window
console.log(`${variable2} tipo: ${typeof(variable2)}`)

let variable3 = variable2.toString(); //Es un método del objeto
console.log(`${variable3} tipo: ${typeof(variable3)}`)

// El único tipo de datos numerico es number, aún así podemos 
// usar parseFloat para intercambiar entre reales y enteros.

var num=3.14
console.log('Tipo: '+typeof(num)+' '+parseInt(num))

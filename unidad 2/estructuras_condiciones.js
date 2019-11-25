/*
    if Permite la ejecución de código en dependiendo de una condición
    puede ir acom panado de else o no.
    Podemos usar switch cuando evaluemos varios valores.
*/

if ( 10 > 5) console.log('La condición es cierta');

if ( 10 < 5) console.log('La condición es cierta');
else console.log('La condición es falsa');

//Si ejecutamos más de una instrucción las ponemos en un bloque de contenido {}
let edad=20;
if ( edad >= 18 ){
    console.log('eres mayor de edad');
    console.log('ya puedes conducir');
} else {
    console.log('eres menor de edad');
    console.log('no puedes conducir');
}

let letra='A';
switch (letra) {
    case 'A': console.log('switch dice: la letra es A')
        break;
    case 'B': console.log('switch dice: la letra es B')
        break;
    case 'C': console.log('switch dice: la letra es B')
        break;
    default: 
             console.log('switch dice: la letra no es ni A, ni B, ni C')
    break;
       
}



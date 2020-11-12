/* 
    CONTRUCCIÓN EXPRESIONES REGULARES
*/

    let cadena = 'Desarrollo de aplicaciones web 2020';

/* 
    CLASES DE CARACTERES 

    \d Dígito
    \s Espacio
    \w Caracter (dígito, letra, guión bajo)
    .  Cualquier caracter

    Nota: Si ponemos la letra en mayúscula es la clase inversa

    */

    let patron = /\d/g;

    console.log(patron.test(cadena)) //true
    console.log(cadena.match(patron)) //['2','0','2','0']

    patron = /de\s/; //Podemos combinar caracteres normales on clases de caracteres.

    console.log(patron.test(cadena)) //true

    /* 
        INICIO  ^  Y FIN $ DE CADENA
    */
    
    patron = /^D/;
    console.log(patron.test(cadena)); //true

    patron = /0$/;
    console.log(patron.test(cadena)); //true

    patron = /^D0$/;
    console.log(patron.test(cadena)); //false ¿Reflexiona por que es falso

    /* 
        Conjuntos [...] : Cualquier caracter delos que indica.
    */

    patron = /[DXP]/
    console.log(patron.test(cadena)); //true : Suficiente con que coincida D

    patron = /[0-5]/
    console.log(patron.test(cadena)); //true : El guión nos permite declarar rangos

    patron = /^[0-5]/
    console.log(patron.test(cadena)); //false : ^ Niega el elemento.

    /*
    CUANTIFICADORES : Se aplican al elemento que les precede

    {n} : n veces (también admite rangos)
    
    */

    patron = /20{2}/;
    console.log(patron.test(cadena)); //false. Reflexiona por qué


    patron = /(20){2}/;
    console.log(patron.test(cadena)); //true. Los parentesis permiten agrupar

    patron = /(20){3,5}/;
    console.log(patron.test(cadena)); //false. Los rangos se ponen con comas

    /*  Cuantificadores breviados

    + : 1 o más {1,}
    * : 0 o más {0,}
    ? : 0 o 1   {0,1}

    */

    //nota, si en alguna expresión regular queremos buscar alguno de los caracteres
    //especiales utilizados para crearlas, utilizaremos el operador de escapo \

    // Ejercicio propuesto. Describe un patrón para comprobar si una dirección
    // IP es correcta





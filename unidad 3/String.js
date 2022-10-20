 

    /* 
        Los datos de tipo cadena irán en encerrados entre comillas simples
        o dobles. 
    */

    let cad = 'CADENA1';

    cad = "CADENA2";

    /* 
        También se puede usar comillas hacia atrás, en cuyo caso podemos 
        insertar variables delimitadas por ${}
    
    */

    let num = 3;
    cad = `CADENA${num}`; console.log(cad); //->CADENA3

    //Tambien podemos usar caracteres especiales
    console.log('primera linea \nsegunda linea');

    //Propiedad length

    console.log(cad.length); //->7

    // Métodos: Disponemos de diferentes métodos para trabajar con cadenas, siempre generando otra
    // ya que las cadenas son inmutables. 

    // charAt, toUpperCase, toLowerCase, indexOf, includes, substring, substr 

    cad = 'Cifp Carlos III';

    console.log(cad.charAt(1));//->i

    console.log(cad.toUpperCase());//->CIFP CARLOS III

    console.log(cad.toLowerCase());//->cifp carlos iii

    console.log(cad.indexOf('III'));//->12

    console.log(cad.includes('III'));//->true

    console.log(cad.substring(2,4));//->fp


    /*     
            Tratamiento como array: cuando vamos la unidad de los arrays veremos que tambien
           se pueden tratar las cadenas como un array con un caracter en cada una de sus posiciones.
    
    */

    console.log(cad[0]);//->C





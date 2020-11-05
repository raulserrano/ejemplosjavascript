 

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
    cad = `CADENA${num}`; console.log(cad); //CADENA3

    //Tambien podemos usar caracteres especiales
    console.log('primera linea \nsegunda linea');

    //Propiedad length

    console.log(cad.length);

    // Métodos: Disponemos de diferentes métodos para trabajar con cadenas, siempre generando otra
    // ya que las cadenas son inmutables. 

    // charAt, toUpperCase, toLowerCase, indexOf, includes, substring, substr 

    


    /*     
    
            Tratamiento como array: cuando vamos la unidad de los arrays veremos que tambien
           se pueden tratar las cadenas como un array con un caracter en cada una de sus posiciones.
    
    */





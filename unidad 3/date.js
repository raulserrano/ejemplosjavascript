/* 
    Utilizaremos el objeto Date para cuaquier trabajo con fechas;
    mostrar fecha y hora actual, calcular días que faltan para un evento,
    mostrar reloj,...

    Creamos el objeto con el operador new, utilizando la siguiente sintaxis

    let fecha = new Date(year, month, [date], [hours], [minutes], [seconds], [ms])

*/

    let fecha = new Date(2020,5,10,9);
    console.log('Año: '+fecha.getFullYear());//->Año: 2020
    console.log('Mes: '+fecha.getMonth());//->Mes: 5
    console.log('Horas: '+fecha.getHours());//->Horas: 9

    //modificamos con métodos set
    fecha.setHours(4);
    console.log('Hora modificada: '+fecha.getHours());//->Hora modificada: 4


    //Internamente la variable almacena los milisegundos que han pasado
    //desde 1970.
    console.log(fecha.getTime());

    //Si no pasamos parametros capturamos la hora actual.
    let fechaActual = new Date();
    console.log(fechaActual.toString())

    //Disponemos de métodos que hacen referencia a la hora UTC ya la local.
    console.log(fechaActual.getUTCHours());
    console.log(fechaActual.getHours());





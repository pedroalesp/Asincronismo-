//Esta función va a ser pasada como parámetro, por ende será nuestro callback
function sum (num1, num2) {
return num1 + num2
}

function calc (num1, num2, callback) { //callback es un nombre estandar, puede llevar cualquier nombre realmente
    return callback(num1,num2)
}
//La función calc va a retornar la ejecución de la función sum, que abajo toma el lugar del callback
//PORQUE LA FUNCIÓN SUM ES EL CALLBACK

console.log(calc(30, 30, sum)) //Como vemos aquí, el parámetro de callback corresponde a la función sum 
//--------------------------------------------------------------------------

function date (callback) {
    console.log(new Date) //Mostrará la fecha al instante
    setTimeout( ()=> {
        let date = new Date
        callback(date) //MOstrará la fecha con un delay de 3s
    }, 3000)
}

function printDate (dateNow) { //esta función tomará el lugar de callback
    console.log(dateNow) //Y el paráametro dateNow tomará el lugar de la variable date
}

date(printDate)
//Cuando se ejecuta date(printDate) el parámetro printDate tomará el lugar de callback
//El callback dentro del setTimeOut (ahora printDate) pasará como parámetro la variable date que es la fecha de hoy, y se imprimirá en 3s
//Pero antes se imprime la fecha de hoy por el console.log antes del setTimeOut
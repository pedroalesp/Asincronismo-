//Todo esto lo ejecutamos en node-->consola y terminal, no estamos llevando nada al navegador
//instalar la dependencia xmlhttprequest en nuestro proyecto:

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
//definimos la irl de la api en una variable
let API = 'https://rickandmortyapi.com/api/character/'

//Crear una func para traer la info de la api. le pasamos un callback y desencadenamos los llamados
function fetchData (url_api, callback) { //le pasamos la url de la api y un callback
    let xhttp = new XMLHttpRequest() //Primero debemos generar la referencia al objeto que necesitamos
    xhttp.open('GET', url_api, true) //Hacemos el llamado a la url.Primero le pasamos la petición, o sea el 'GET', luego la url donde queremos obtener la data
                                    //y por ultimo el valor true, que significa que queremos que se maneje de forma asíncrona (por defecto va en true, si no lo escribimos no pasa nada)
    xhttp.onreadystatechange = function (event) //Ahora debemos escuchar el llamado que hace esa petición, cuando suceda ejecutamos una función que recibe un evento
        {                                   //En este espacio vamos a hacer una validación para saber si vamos a ejecutar el callback, si el estado es satisfactorio
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    callback(null, JSON.parse(xhttp.responseText))//Si no se pasa de esta forma, llega un string
                } else {
                    const error = new Error('ERROR' + url_api)
                    return callback(error, null)
                }
            }
        }
    xhttp.send()
}

//callback usa un standar dentro de node que permite pasarle dos valores, el primero será un error y el segundo la información que llega, el resultado del llamado a la API
//Como recibimos un JSON hay que parsearlo porque recibimos una respuesta en texto
//null significa que no mandamos nada

//--------------Haciendo llamados a la api con callbacks---------
//Hacemos el llamado a la función pasandole la api y la función callback (con los parámetros de error y la info resultante)

fetchData(API, function (error1, data1) {
    if (error1) return console.error(error1) //Hacemos una validación porque hay que manejar errores. Se acaba la func si manda un error
    //Si recibimos algo hacemos un segundo llamado a la función, esta vez pasando la api mas el resultado de la llamada anterior, que sería la data1
    //result es un valor de la api, relax. Nos posicionamos en el primer valor de la data [0] (es un array) y obtenemos su id
    //y como segundo parámetro, pasamos de nuevo la función callback, esta vez con error2 y data2
    fetchData(API + data1.results[0].id, function (error2, data2) {
        if (error2) return console.error(error2)
        fetchData(data2.origin.url, function (error3, data3) {
            //igual que result, origin es un valor de la api, en este caso solicitamos su url
            if (error3) console.error(error3)
            console.log(data1.info.count)//Estos valores son referencias a la api
            console.log(data2.name)
            console.log(data3.dimension)
        })
    })
    
}) 
//Todo esto lo ejecutamos en node-->consola y terminal, no estamos llevando nada al navegador
//instalar la dependencia xmlhttprequest en nuestro proyecto:

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest


function fetchData (url_api, callback) {
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
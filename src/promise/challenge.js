const fetchData = require ('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

fetchData (API)
    .then(data => {
        console.log(data.info.count)
        return fetchData(`${API}${data.results[0].id}`)
    })
    .then(data => {
        console.log(data.name)
        return fetchData(data.origin.url)
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch(err => console.error(err))

//Debes entender que data es la información recibida del servidor, results, origin y dimension son elemmentos de la url de rick y morty
//Estamos haciendo múltiples peticiones con promesas, en el primer then monstramos el conteo general de los personajes (info.count)
//y hacemos otro llamado a fetchData pero ahora con la url para obtener una info de personaje específica (data.results[0].id)
//en el 2do then mostramos el nombre y hacemos otro llamado (data.origin.url)
//en el 3er then hacemos llamado a data.dimensension
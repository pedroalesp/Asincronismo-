const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

//esta es la estructura base para trabajar con async-await, usando try-catch
const anotherFunction = async (url_api) => {
    try {
        const data = await fetchData(url_api) //espera q ue esta petición se cumpla y así ya cargo en data esta información
        const character = await fetchData(`${API}${data.results[0].id}`) //usamos los datos previamente obtenidos 
        const origin = await fetchData(character.origin.url)
        console.log(data.info.count)
        console.log(character.name)
        console.log(origin.dimension)
    } catch (error) {
        console.error(error)
    }
}

console.log('before')
anotherFunction(API)
console.log('after')
//Estructura básica para trabajar con promesas
const somethingWillHappen = () => { 
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!!')
        } else {
            reject('Uppsss')
        }
    })
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err))

//---------------------------------------------

const somethingWillHappen2 = () => {
    return new Promise ((resolve, reject) => {
        if (true) {
            setTimeout( () => { resolve('True') }, 2000 )
        } else {
            const error = new Error('Whoopp') //Establecer el error en una constante para luego llamarla en el reject es una buena practica!
            reject(error)
        }
    })
}

somethingWillHappen2() 
    .then(response => console.log(response))
    .catch(err => console.error(err))

//--------Promise.all-------------------
//Método que permite correr varias promesas al mismo tiempo.
//recibe como argumento las promesas en forma de array

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => console.log('array of results', response)) //devuelve un array con las respuestas
    .catch(err => console.error(err))
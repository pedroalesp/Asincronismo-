const doSomethingAsync = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout( () =>  resolve('Do Something Async jeje'), 3000 )
        : reject(new Error('Test Error'))
    })
}

const doSomething = async () => {
    const something = await doSomethingAsync() //await espera a que suceda la promesa
    console.log(something)
}

console.log('before')
doSomething()
console.log('after')
//----try catch--------------
//otra forma de manejar el async await  con mas control de los errores, en el try se va ejecutando la logica y si algo falla caerá en el catch 
const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync()
        console.log(something)
    } catch (error){
        console.error(error)
    }
}

console.log('before1')
anotherFunction()
console.log('after1')
const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data)
            }

            else if (request.readyState === 4)
                reject('could not fetch data')
        })

        request.open('GET', resource)
        request.send()
    })
}


getTodos('data/todos.json')
    .then(data => { console.log(data) })
    .catch(err => console.log(err))



const getSomething = () => {
    return new Promise((resolve, reject) => {
        resolve('some data')
        reject('error data')
    })
}

// getSomething()
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
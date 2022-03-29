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

getSomething()
    .then(data => console.log(data))
    .catch(err => console.log(err))

//chaning promises 
getTodos('data/todos.json')
    .then(data => {
        console.log('promise 1 resolved', data)
        return getTodos('data/article.json')
    })
    .then(data => {
        console.log('promise 2 resolved', data)
        return getTodos('data/category.json')
    })
    .then(data => {
        console.log('promise 3 resolved', data)
    })
    .catch(err => {
        console.log('promise rejected', err)
    })
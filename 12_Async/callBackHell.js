const getTodos = (resources, callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200)
            callback(undefined, JSON.parse(request.responseText))
        else if (request.readyState === 4)
            callback('could not fetch the data', undefined)
    })

    request.open('GET', resources)
    request.send()
}

getTodos('/data/article.json', (err, data) => {
    console.log(data)
    getTodos('/data/category.json', (err, data) => {
        console.log(data)
        getTodos('/data/todos.json', (err, data) => {
            console.log(data)
        })
    })
})
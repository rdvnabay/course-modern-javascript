const getTodos = (callback) => {

    var request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200)
            callback(undefined, JSON.parse(request.responseText))
        else if (request.readyState === 4)
            callback('could not fetch data', undefined)
    })

    // request.open('get', 'https://jsonplaceholder.typicode.com/todos')
    request.open('get', 'todos.json')
    request.send()
}

getTodos((err, data) => {
    if (err)
        console.log(err)
    else
        console.log(data)
})
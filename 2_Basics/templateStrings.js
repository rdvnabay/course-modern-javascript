const title = 'Modern JavaScript Course'
const author = 'Mario'
const likes = 30

//string concatenation
let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes'

//template string
result = `The blog called ${title} by ${author} has ${likes} likes`
console.log(result)

//creating html with template string
let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span>This blog has ${likes} likes</span>
`
console.log(html)

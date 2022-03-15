const message = document.getElementById('message')
console.log(message)

const errors = document.getElementsByClassName('error')
console.log(errors) //HTMLCollection(2)
console.log(errors[0])
// errors.foreach(e => console.log(e)) //HTMLCollection does not loop 

const paragraph=document.getElementsByTagName('p') //HTMLCollection
console.log(paragraph)
console.log(paragraph[2])
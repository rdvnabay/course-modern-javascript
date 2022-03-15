console.log(document)
console.log(document.querySelector('body > h1'))
const paragraph = document.querySelector('p')
console.log(paragraph)

const paragraphAll = document.querySelectorAll('p')
paragraphAll.forEach(p => console.log(p))

const errorClass=document.querySelectorAll('.error')
const divError=document.querySelector('div.error')
console.log(divError)
console.log(errorClass)

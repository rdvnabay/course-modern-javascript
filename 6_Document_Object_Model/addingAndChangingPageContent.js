const paragraph = document.querySelector('p')
paragraph.innerText = 'New Paragraph'
console.log(paragraph)

const paragraphAll = document.querySelectorAll('p')
paragraphAll.forEach(p => {
    p.innerText += ' edit'
})
console.log(paragraphAll)


const content = document.querySelector('.content')
content.innerHTML = '<h1>paragraph content changed</h1>'
console.log(content)

const people = ['mario', 'luigi', 'yoshi']
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
})
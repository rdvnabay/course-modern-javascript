const link = document.querySelector('a')
link.getAttribute('href')
link.setAttribute('href', 'www.udemy.com')
link.innerText = 'Udemy'
console.log(link)

const message = document.querySelector('div.error')
console.log(message.getAttribute('class'))
message.setAttribute('class','success')
message.setAttribute('style','color:green')
console.log(message)
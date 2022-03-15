const title = document.querySelector('h1')
title.setAttribute('style', 'color:orange') //override style attr

console.log(title.style) //CSSStyleDeclaration object
console.log(title.style.color)

title.style.margin = '50px'
title.style.color = 'crimson'
title.style.fontSize = '60px'

title.style.margin = '' //remove margin
console.log(title)
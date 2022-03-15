const title=document.querySelector('.title')
title.classList.add('test')
title.classList.remove('test')
title.classList.toggle('test')
title.classList.toggle('test')
console.log(title)


const paragraphAll = document.querySelectorAll('p')
paragraphAll.forEach(paragraph => {
    console.log(paragraph)
    if (paragraph.innerText.includes('error')) {
        paragraph.classList.add('error')
    }
    if (paragraph.innerText.includes('success')) {
        paragraph.classList.add('success')
    }
})
console.log(paragraphAll)
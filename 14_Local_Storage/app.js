//set localStorage 
//value can be assigned in 2 different ways
localStorage.setItem('name', 'mario')
localStorage.age = 50

//get localStorage
let name = localStorage.getItem('name')
let age = localStorage.age

//updating data
localStorage.name='luigi'
localStorage.setItem('age',29)

console.log(name, age)
//booleans & comparisons
console.log(true, false, 'true', 'false') //true false 'true' 'false'

//methods can return booleans
let email = 'ridvanabay@mail.com'
let names = ['mario', 'luigi', 'toad']

console.log(email.includes('@')) //true
console.log(names.includes('rose')) //false

//comparison operators
let age = 29
console.log(age == 29)//true
console.log(age == 30)//false
console.log(age != 29)//false
console.log(age > 35)//false
console.log(age <= 30) //true

let name = 'rıdvan'
console.log(name == 'rıdvan') //true
console.log(name == 'Rıdvan') //false
console.log('rıdvan' > 'ahmet') //true (first letter compare r>a)
console.log(name > 'Rıdvan') //true (lower case > upper case )
console.log(name > 'zafer') //false
console.log(name > 'Zafer') //true
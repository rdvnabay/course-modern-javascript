//primitive type

let scoreOne = 50
let scoreTwo = scoreOne

console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`)
scoreTwo = 100
console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`)

//reference type
const userOne = { name: 'ryu', age: 30 }
const userTwo = userOne

userTwo.age = 40
console.log(userOne, userTwo)


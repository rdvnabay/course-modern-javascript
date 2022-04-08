//rest parameter
const double = (...numbers) => {
    return numbers.map(number => number * 2)
}

const result = double(1, 3, 5, 2, 4, 6)
console.log(result) //output: [ 2, 6, 10, 4, 8, 12 ]

//spread sytax (arrays)
const people = ['shaun', 'mario', 'luigi']
const members = ['ryu', 'chun-li', ...people]
console.log(members) //output: [ 'ryu', 'chun-li', 'shaun', 'mario', 'luigi' ]  

//spread sytax (objects)
const person = { name: 'mario', age: 30, job: 'software engineer' }
const personClone = { ...person, location: 'istanbul' }
console.log(personClone) //output: { name: 'mario', age: 30, job: 'software engineer',location: 'istanbul'}
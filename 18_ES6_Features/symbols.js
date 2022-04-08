const symbolOne = Symbol('a generic name')
const symbolTwo = Symbol('a generic name')

console.log(symbolOne, symbolTwo, typeof symbolOne) // Symbol(a generic name) Symbol(a generic name) symbol
console.log(symbolOne == symbolTwo) //false

const person = {}

person.age = 30
person['belt'] = 'orange'
person['belt'] = 'black'

person[symbolOne] = 'ryu'
person[symbolTwo] = 'mario'

console.log(person)
/*
{
  age: 30,
  belt: 'black',
  [Symbol(a generic name)]: 'ryu',
  [Symbol(a generic name)]: 'mario'
}
 */
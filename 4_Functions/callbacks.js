//example:1
const myFunc = (callbackFunc) => {
    let value = 50
    callbackFunc(value)
}
myFunc(value => console.log(value))


//example:2
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li']

//callback function 
people.forEach((person, index) => console.log(index, person))

const logPerson = (person, index) => console.log(`${index} - hello ${person}`)
people.forEach(logPerson) //callback function
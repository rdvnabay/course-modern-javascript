let score='100'

console.log(typeof score) //string
console.log(score+1) //1001

score=Number(score)
console.log(typeof score) //number
console.log(score+1) //101

console.log(Number('hello')) //NaN
console.log(String(50)) //'50'

console.log(Boolean(100)) //true
console.log(Boolean(-1)) //true
console.log(Boolean(0)) //false (only 0 number convert to boolean result false)

console.log(Boolean('2')) //true
console.log(Boolean('a')) //true
console.log(Boolean('')) //false (string length is 0 boolean result false)
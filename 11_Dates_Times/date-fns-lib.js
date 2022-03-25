const now=new Date()

console.log(dateFns.isToday(now)) //true

//formatting options
console.log(dateFns.format(now,'YYYY')) //2022
console.log(dateFns.format(now,'MMM')) //Mar
console.log(dateFns.format(now,'dddd')) //Friday
console.log(dateFns.format(now,'Do')) //25th
console.log(dateFns.format(now,'dddd Do MMMM YYYY')) //Friday 25th March 2022

//comparing dates
const before=new Date('February 1 2022 12:00:00')
console.log(dateFns.distanceInWords(now,before,{addSuffix:true}))
//about 2 months ago
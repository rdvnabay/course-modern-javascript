//timestamp 

const before = new Date('February 1 2022 7:30:59')
const now = new Date()

const diff = now.getTime() - before.getTime()
console.log(diff) //4533682811

const mins = Math.round(diff / 1000 / 60)
const hours = Math.round(mins / 60)
const days = Math.round(hours / 24)
console.log(mins, hours, days) //  75563 1259 52

console.log(`the blog was written ${days} ago`)

//converting timestamps into date objects
const timestamp = 1114533682811
console.log(new Date(timestamp)) //2005-04-26T16:41:22.811Z


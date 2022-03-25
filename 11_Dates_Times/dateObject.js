const now=new Date()
console.log(now) //2022-03-25T15:23:12.235Z
console.log(typeof now) //object

console.log('getFullYear',now.getFullYear()) //2022
console.log('getMonth',now.getMonth()) //2 => Months[January,February,March] 
console.log('getDate',now.getDate()) //25
console.log('getDay',now.getDay()) //5 => Weekday[Sunday,Monday,Tuesday,Wednesday,Thursday,Friday]
console.log('getHours',now.getHours()) // //18
console.log('getMinutes',now.getMinutes()) //23
console.log('getSeconds',now.getSeconds()) //12


//timestamp
console.log('timestamp',now.getTime()) //1648221792235

//date to string
console.log(now.toDateString()) //Fri Mar 25 2022
console.log(now.toTimeString()) //18:23:12 GMT+0300 (GMT+03:00)
console.log(now.toLocaleString()) //25.03.2022 18:23:12

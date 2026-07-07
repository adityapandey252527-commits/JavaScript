// Date And Time

let myDate = new Date()
console.log(myDate.toString()) // Tue Jul 07 2026 23:47:01 GMT+0530 (India Standard Time)
console.log(myDate.toISOString()); // 2026-07-07T18:17:01.928Z
console.log(myDate.toJSON()) // 2026-07-07T18:17:01.928Z
console.log(myDate.toLocaleDateString()) // 7/7/2026
console.log(myDate.toLocaleString()) // 7/7/2026, 11:47:01 pm

console.log(typeof myDate)

let myCreatedDate = new Date(2023,0,23)
let myCreatedDate = new Date(2023,0,23,5,3,56)

let myCreatedDate = new Date("01-14-2026")

console.log(myCreatedDate.toLocaleString())

let myTimeStamps = Date.now()
console.log(myTimeStamps)
console.log(myCreatedDate.getTime())

console.log(Math.round(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() +1)
console.log(newDate.getDay())

console.log(`${newDate.getDay()} ${newDate.getMonth()+1}`)

newDate.toLocaleString('dafault',{
    weekday:"long",
})
console.log(newDate)
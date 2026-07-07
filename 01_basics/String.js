const name = "aditya"
const repoCount = 50

// console.log(name + repoCount + " value")

// String interpolasation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String ('Aditya-Pandey')
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('y'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8,8)
console.log(anotherString)




const newStringOne = "   aditya   "
console.log(newStringOne)
console.log(newStringOne.trim())




const url = "https://adityapandey.com/aditya%20pandey"
console.log(url.replace('%20', '-'))
console.log(url.includes('aditya'))




console.log(gameName.split('-'))
const marvelHeros = ["thor", "IronMan", "SpiderMan"]
const dcHeros = ["SuperMan", "Flash", "BatMan"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros)
// console.log(marvelHeros.length)
// console.log(marvelHeros[3][0])

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros)

const allnewHeros = [...marvelHeros, ...dcHeros]
// console.log(allnewHeros)

// const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const realAnotherArr =anotherArr.flat(Infinity)
// console.log(realAnotherArr);

console.log(Array.isArray("Hitesh","Aditya","Pankaj"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "Aditya"})) //interseting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
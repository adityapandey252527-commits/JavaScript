// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
 
}

const greeting = "Hello World!"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`)
    
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('US', "United State Of America")
map.set('FR', "France")
map.set('IN', "India")

// console.log(map)
// for (const key of map) {
//     console.log(key);
    
// }

for (const [key, values] of map) {
    // console.log(key, ':-', values);   
}

const myObj = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// for (const [key, values] of myObj) {
//     console.log(key, ':-', values);   
// }




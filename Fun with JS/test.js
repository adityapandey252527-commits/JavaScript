// const myArr = []
// DebugPrint(myArr)

// Continuous, Holey


// SMI (small, integer)
// PAcked element
// Double (float, string, function)


const arrTwo = [1, 2, 3, 4, 5]
// Packed SMI elements

arrTwo.push(6.0)
// Packed DOUBLE elements

arrTwo.push('7')
// PACKED_ELEMENTS

arrTwo[10] = 11
// HOLEY_ELEMEMTS

console.log(arrTwo);
console.log(arrTwo.length)
console.log(arrTwo[9])


// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

//  holes are very expensive in js


const arrThree = [1,2,3,4,5]
console.log(arrThree[2])

// SMI > Double> PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3)
// just 3 holes HOLEY_SMI_ELEMENTS

arrFour[0] = '1'//Holey elements
arrFour[1] = '2'//Holey elements
arrFour[2] = '3'//Holey elements
console.log(arrFour);

const arrFive = []

arrFive.push('1') // packed elements
arrFive.push('2') // packed elements
arrFive.push('3') // packed elements
console.log(arrFive);

const arrSix = [1,2,3,4,5]
arrSix.push(Infinity)

console.log(arrSix);
// for, for-of , forEach

const coding = ["js", "ruby", "java", "pyhton", "cpp"]

const values = coding.forEach((item)=>{
    // console.log(item);
    return item
})
// console.log(values)

// for each never return value

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNum.filter((num) => {
//     return num > 4
// })

// const newNums = []
// myNum.forEach((num)=>{
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: '1982',
        edition: 2004},
    { title: 'Book Two', genre: 'Non-Fiction', publish: '1992',
        edition: 2008},
    { title: 'Book Three', genre: 'History', publish: '1999',
        edition: 2007},
    { title: 'Book Four', genre: 'Science', publish: '2009',
        edition: 2010},
    { title: 'Book Five', genre: 'Fiction', publish: '1987',
        edition: 2014},
    { title: 'Book Six', genre: 'History', publish: '1986',
        edition: 2010},
    { title: 'Book Seven ', genre: 'Fiction', publish: '1996',
        edition: 2010},
    { title: 'Book Eight', genre: 'Science', publish: '1992',
        edition: 2024},
];
let userBooks = books.filter( (bk) => bk.genre === 'History')
userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre ==="History";
})
console.log(userBooks);
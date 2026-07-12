const myNums = [1, 2, 3, 4, 5]

// const mytotal = myNums.reduce(function (acc, currval ){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const mytotal = myNums.reduce((acc, curr) => acc+curr,0)
// console.log(mytotal);

const shoppingCard = [
    {
        itemName: "Js course",
        price: 2000
    },
    {
        itemName: "python course",
        price: 2100
    },
    {
        itemName: "Mobile Development course",
        price: 7000
    },
    {
        itemName: "Data Science course",
        price: 12999
    }
]
const pricetopay = shoppingCard.reduce((acc, item) => acc+ item.price ,0)
console.log(pricetopay)

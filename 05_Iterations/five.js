const coding = ["js", "ruby", "java", "pyhton", "cpp"]
// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach( (item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding =[{
        languageName: "Javascipt",
        langauageFileName: "Js"
    },

    {
        languageName: "Python",
        langauageFileName: "py"
    },

    {
        languageName: "Java",
        langauageFileName: "Java"
    },

]
myCoding.forEach((item)=>{
    console.log(item.languageName);
})
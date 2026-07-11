// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // named iife
    console.log(`DB Connected`);
})();

( (name)=> {
    console.log(`DB Connected Two ${ name}`);
}) ('Aditya')
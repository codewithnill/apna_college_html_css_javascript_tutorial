function myFunction() {
    console.log("Welcome to Apna College");
    console.log("We are learning JS");
} // semi colon optional here

myFunction(); // calling the function
myFunction();

// redundancy - we are writing the same code again and again to call the function, so we can use loops to call the function multiple times

function myFunction2(msg) {
    console.log(msg);
}

myFunction2("func with parameter.."); // undefined - if we do not pass any argument to the function, it will be undefined

function sum(x,y) {
    console.log(x+y); // or
    return x+y; // return keyword is used to return the value from the function, it will stop the execution of the function and return the value
}

sum(2,3); // 5
let result = sum(2,3); // we can store the return value in a variable
console.log(result); // 5

// callback function - a function that is passed as an argument to another function and is executed after some operation is completed
function abc() {
    console.log("This is a callback function");
}
function myFunction3(abc) {
    return abc(); // we are calling the callback function here
}

myFunction3(abc); // This is a callback function


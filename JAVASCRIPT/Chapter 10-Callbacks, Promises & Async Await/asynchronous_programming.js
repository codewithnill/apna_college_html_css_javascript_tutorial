console.log("one");
console.log("two");


function hello() {
    console.log("hello");
}

setTimeout(hello,2000); // 2000ms=2s

// we can also write the hello func inside setTimeout like this
setTimeout(()=>{
    console.log("Hello");
},4000);

console.log("three");
console.log("Four");
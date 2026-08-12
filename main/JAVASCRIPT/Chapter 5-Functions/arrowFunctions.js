const arrowSum = (a, b) => {
    console.log(a + b);
}; 

arrowSum(5, 10); // 15

const arrowMul=(a,b)=>{
    return a*b;
}
let mulResult=arrowMul(5,10);
console.log(mulResult); // 50

const printHello= () => {
    console.log("Hello from arrow function");
}

printHello(); // Hello from arrow function
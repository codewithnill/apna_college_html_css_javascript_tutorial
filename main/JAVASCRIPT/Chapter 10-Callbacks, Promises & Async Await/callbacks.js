function sum(a,b) {
    console.log(a+b);
}

function calculator(a,b,sumCallBack) {
    sumCallBack(a,b);
}

// Passing the function reference, NOT calling it
calculator(1,2,sum);
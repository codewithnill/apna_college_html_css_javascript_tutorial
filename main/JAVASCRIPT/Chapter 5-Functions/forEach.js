let arr=[1,2,3,4,5];

arr.forEach(function(val) {
    console.log(val);
});

// arrow version
arr.forEach((val) => {
    console.log(val);
});

// callback functions in for each loop has 3 parameters - current value, index and array itself
arr.forEach((val, index, array) => {
    console.log("Value: " + val + " Index: " + index + " Array: " + array);
});
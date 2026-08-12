let nums2=[1,2,3,4,5];

let newArr=nums2.map((val) => {
    return val*val;
})

console.log(newArr); // [1,4,9,16,25]

let evenArr=nums2.filter((val) => {
    return val%2==0;
})

console.log(evenArr); // [2,4]

const output=nums2.reduce((acc, curr) => {
    return acc+curr;
});

console.log(output); // 15

const output2=nums2.reduce((prev, curr) => {
    return prev>curr ? prev : curr;
});
console.log(output2); // 5
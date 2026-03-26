function vowel_count(str) {
    var count=0;
    for(let val of str) {
        if(val=='a' || val=='e' || val=='i' || val=='o' || val=='u') {
            count++;
        }
    }

    console.log("Number of vowels in the string: " + count);    
    return count;
}

let ans = vowel_count("hello world");
console.log(ans); // 3

const vowel_count_arrow = (str) => {
    var count=0;
    for(let val of str) {
        if(val=='a' || val=='e' || val=='i' || val=='o' || val=='u') {
            count++;
        }   
    }

    console.log("Number of vowels in the string by arrow function: " + count);
    
}

vowel_count_arrow("hello world again"); // 3

let arr2=[3,4,5,6,7];

arr2.forEach((val)=> {
    console.log(val*val);
}); // or

let nums=[10,20,30]

let calculateSquare=(val) => {
    console.log(val*val);
}

nums.forEach(calculateSquare);


let marks=[60,98,100,45,78];

let outputmarks=marks.filter((val) => {
    return val>90;
});
console.log(outputmarks); // [98,100]

let oneton=[];
let input=prompt("Enter a number : ");
for(let i=0;i<input;i++) {
    oneton.push(i+1);
}

console.log(oneton);

let onetonsum=oneton.reduce((acc, curr) => {
    return acc+curr;
});

let onetonmul=oneton.reduce((prev, curr) => {
    return prev*curr;
});
console.log(onetonsum); // 15
console.log(onetonmul); // 120
let marks=[10,2,3,4,50];
console.log(marks);
console.log(marks.length);

let countries=['Austria','India','Bangladesh'];
// using for loop
for(let i=0;i<countries.length;i++) {
    console.log(countries[i]);
}

// using for-of loop
for (let country of countries) {
    console.log(country);
}


let num=[2,4,6,8];
console.log(num);

let deletedNum=num.pop();
console.log("Removed",deletedNum);
console.log("updated",num);

let newsize=num.push(100); // returns size after push
console.log("new size",newsize);
console.log("updated",num);

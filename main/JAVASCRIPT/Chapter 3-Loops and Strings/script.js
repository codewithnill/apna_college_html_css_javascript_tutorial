// for(let i=0; i<5; i++) {
//     console.log("Hello world...");
// }

// for of loop
// let str="Apna College";
// for (let val of str) {
//     console.log("i=",val);
// }

// object to use for in loop

let student={
    name:"Rahul",
    age:21,
    cgpa:2.67,
    isPass:false
}
for (let i in student) {
    console.log(i);
}

for (let key in student) {
    console.log("key=",key," value=",student[key]);
}
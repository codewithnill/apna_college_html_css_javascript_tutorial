// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     // to fulfill the promise
//     // resolve("success");
//     reject("rejected");
// });


const getPromise= ()=> {
    return new Promise((resolve,reject)=>{
        console.log("I am a promise");
        // resolve("success");
        reject("error");
    })
};

let promise=getPromise();


promise.then((res)=>{
    console.log("promise fulfilled.",res);
})

promise.catch((err)=>{
    console.log("promise rejected.",err);
})


function asyncFunc1() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        },4000)
    });
}





function asyncFunc2() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        },4000)
    });
}

// console.log("fetching data 1");
// let p1=asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
// })




// promise chaining -> first promise resolve, then search for second data
console.log("fetching data 1");
let p1=asyncFunc1();
p1.then((res)=>{
    
    console.log("fetching data 2");
    let p2=asyncFunc2();
    p1.then((res)=>{
        
    });
})

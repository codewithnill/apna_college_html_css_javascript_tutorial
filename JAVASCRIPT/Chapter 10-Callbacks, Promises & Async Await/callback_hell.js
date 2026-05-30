// function getData(dataId) {
//     setTimeout(()=>{
//         console.log("data : ", dataId);
//     },2000);
    
// }

// data1
// data2
// data3
// they all come together
// getData(1);
// getData(2);
// getData(3);

// if we want delay
function getData(dataId, getNextData) {
    setTimeout(()=>{
        console.log("data : ", dataId);
        if(getNextData) {
              getNextData();
        }
      
    },2000);
    
}

//getData(1,getData(2)); // error -> we dont write like this, we will use arrow function
// this is call back hell
getData(1,()=> {
    getData(2, ()=> {
        getData(3, ()=> {
            getData(4);
        });
    });
});



// above example as promise chaining
function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("data : ", dataId);
            resolve("success");
            if(getNextData) {
                getNextData();
            }
        
        },5000);   
    });  
    
}

// let p1=getData();
// p1.then((res)=>{
//     console.log(res);    
// }); 
// can also be written like
getData(1)
    .then((res)=>{
        return getData(2); 
    })
    .then((res)=>{
        console.log(res);
});
let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("this button was clicked");
//     let a =25;
//     a++;
//     console.log(a);
// }

// btn1.onclick = (e) => { // e is the object of event
//     console.log("this button was clicked");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
//     let a =25;
//     a++;
//     console.log(a);
// }

btn1.addEventListener("click",()=>{
    console.log('Button 1 was clicked - handler 1');
});

btn1.addEventListener("click",()=>{
    console.log('Button 1 was clicked - handler 2');
});



const handler3=()=>{
    console.log('Button 1 was clicked - handler 3');
};

btn1.addEventListener("click",handler3);

btn1.addEventListener("click",()=>{
    console.log('Button 1 was clicked - handler 4');
});

// btn1.removeEventListener("click",()=>{
//     console.log('Button 1 was clicked - handler 3');
// }); // does not work because they are in different memory

btn1.removeEventListener("click",handler3); 


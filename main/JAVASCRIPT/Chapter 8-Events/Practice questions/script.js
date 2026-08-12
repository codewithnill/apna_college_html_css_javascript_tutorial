let btn=document.querySelector("button");
let current_mode="light";
let bg_color=document.querySelector("body");
// bg_color.style.backgroundColor="silver"; commented out if using classList approach, otherwise it wont work because of overriding

// btn.addEventListener("click",()=>{
//     if(current_mode==="light") {
//         current_mode="dark";
//         bg_color.style.backgroundColor="black";
//     } 

//     else {
//         current_mode="light";
//         bg_color.style.backgroundColor="silver";
//     } 

//     console.log(current_mode);
// });


btn.addEventListener("click",()=>{
    if(current_mode==="light") {
        current_mode="dark";
        bg_color.classList.add("dark");
    } 

    else {
        current_mode="light";
        bg_color.classList.add("light");
    } 

    console.log(current_mode);
});
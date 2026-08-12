let div=document.querySelector("div");
console.log(div);

let id=div.getAttribute("id");
console.log(id);

let name=div.getAttribute("name");
console.log(name);

let para=document.querySelector("p");
console.log(para.getAttribute("class"));


console.log(para.setAttribute("class", "newClass"));
console.log(para.getAttribute("class"));

div.style.backgroundColor="green";
div.style.backgroundColor="purple";
// div.style.visibility="hidden";

div.style.fontSize="26px";
div.innerText="Hello";

let newBtn=document.createElement("button");
newBtn.innerText="click me!";
console.log(newBtn);
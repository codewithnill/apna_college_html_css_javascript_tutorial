let fullname=prompt("Enter your full name without spaces : ");
let username=fullname.toLowerCase();
let a="@";
let len=fullname.length;
let username2=a.concat(username);
let username3=username2.concat(len);
console.log("username :",username3);
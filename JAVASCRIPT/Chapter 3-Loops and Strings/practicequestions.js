// q1
for(let i=0;i<=100; i++) {
    if(i%2==0) {
        console.log("Even num :",i);
    }
}

// q2
let ans;
let result=10;
while(ans!=result) {
    ans=prompt("Guess the number : ");
    if(ans!=result) {
        console.log("Wrong! Try again.");
    } else {
        console.log("Correct!");
    }
}
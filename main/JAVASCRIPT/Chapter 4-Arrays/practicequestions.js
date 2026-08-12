let marks=[5,5,5,5,5];
let sum=0;
for(let i=0;i<marks.length;i++) {
    sum+=marks[i];
}

let avge=sum/marks.length;

// let prices=[250,645,300,900,50];
// console.log(prices);
// let offer=90/100;
// for(let price of prices) {
//     prices[price]=price*offer;
// }
// console.log(prices, "after discount...");

let prices = [250, 645, 300, 900, 50];
console.log(prices);

let offer = 0.9; // 90/100 = 0.9 (90% of original price)

for(let i = 0; i < prices.length; i++) {
    prices[i] = prices[i] * offer;
}

console.log(prices, "after discount...");

let companies=['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];
console.log(companies);
// companies.shift();
// console.log(companies);
companies.splice(2,1,'Ola');
console.log(companies);
companies.push('Amazon');
console.log(companies);


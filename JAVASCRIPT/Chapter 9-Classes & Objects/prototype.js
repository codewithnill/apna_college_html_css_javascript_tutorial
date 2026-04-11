const student = { // student obj
    fullname : "Nill", // full name is a property
    marks : 94,
    printMarks : function() {
        console.log("Marks : ",this.marks);
    }
}

// creating our prototypes
const employee = {
    calcTax1() {
        console.log("tax rate is 10%");
    },

    // calctax2 : function() { // same as calcTax1 , we can write in this format too 
    //     console.log("tax rate is 10%");
    // }
};

/* 
PROTOTYPE THEORY EXPLANATION:
- A prototype is a blueprint object that other objects can inherit properties/methods from
- Think of it as a "parent" object that child objects can refer to when they need a property/method
- This enables inheritance in JavaScript - objects can share functionality without duplicating code
*/

// new employee comes, creating object from him
const karanArjun = {
    salary:50000,
};

/* 
__proto__ EXPLANATION:
- __proto__ is a property that sets or gets the prototype of an object
- When we write obj2.__proto__ = obj1, we're saying: "Whenever obj2 needs a property/method 
  it doesn't have, look for it in obj1"
- This creates a prototype chain: karanArjun -> employee -> Object.prototype -> null
*/

karanArjun.__proto__ = employee; // __proto__ is used to set a prototype

/* 
HOW PROTOTYPE LOOKUP WORKS:
1. When karanArjun.calcTax1() is called, JavaScript first checks if karanArjun has this method
2. It doesn't (karanArjun only has 'salary'), so JavaScript looks at its prototype (employee)
3. employee DOES have calcTax1(), so it executes that method
4. This is called "prototype chaining" - JavaScript climbs up the chain until it finds the property
*/

// Now karanArjun can use functions from the employee prototype
karanArjun.calcTax1(); // Output: "tax rate is 10%"

// Even though karanArjun doesn't have calcTax1 defined directly, it works through prototype inheritance
console.log(karanArjun.salary); // 50000 - this is karanArjun's own property

// if two other employees come
const karanArjun2 = {
    salary:50000,
};


const karanArjun3 = {
    salary:50000,
};

karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;


// if object & prototype have same method, object's method will be used
// example
// const karanArjun = {
//     salary:50000,
//     calcTax1() { // this will 
//         console.log("tax rate is 50%"); // this will be executed , not the method in parent object
//     }
// };
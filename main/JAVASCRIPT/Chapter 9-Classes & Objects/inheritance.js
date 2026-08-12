class Parent{
    hello() {
        console.log("Hello...") ;
    }
}


class child extends Parent{}
let obj=new child();


class person{
    constructor() {
        console.log("Enter parent cons...")
        this.species="homo sapiens";
    }
    eat() {
        console.log("eat..");
    }

    sleep() {
        console.log("sleep..");
    }

    work() {
        console.log("do nothing..");
    }

}

class engineer extends person{
    constructor(branch) {
        console.log("Enter child cons...")
        super(); // gives error without this keyword. first access parent cons, then child cons
        this.branch=branch;
        console.log("Exit child constructor..");
    }
    work() {
        console.log("solve problems, build something..");
    }
}

class doctor extends person{
    work() {
        console.log("treat patients..");
    }
}

let nb=new engineer("chem eng");
class toyotaCar{
    constructor(brand,mileage) {
        console.log("creating new object");
        this.brand=brand;
        this.mileage=mileage;
    }
    start() {
        console.log("start...");
    }

    stop() {
        console.log("stop...");
    }

    setBrand(brand) {
        this.brandname=brand;
    }
}

let fortuner = new toyotaCar("fortuner",10);
let lexus = new toyotaCar();
lexus.setBrand("lex");
console.log(lexus);
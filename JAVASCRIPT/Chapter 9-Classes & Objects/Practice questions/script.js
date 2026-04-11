let DATA="secret information";

class user{
    constructor(name,email) {
        this.name=name;
        this.email=email;
    }

    viewData() {
        console.log("data : ", DATA);
    }
}



class admin extends user{
    constructor(name,email) {
        super(name,email);
    }
    editdata() {
        DATA="some new value"
    }
}

let std1=new user("nb","nb.69@gmail.com");
let std2=new user("hetfield","nb.666@gmail.com");

let adm1=new admin("admin","admin@gmail.com");








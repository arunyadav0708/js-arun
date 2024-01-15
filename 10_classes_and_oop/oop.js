const user = {
    username: "hitesh",
    loginCount: 8,
    signedTn: true,

    getUserDetails: function(){
        // console.log("Got user details fron database");
        console.log(this);
    }

}


// console.log(user.username);
// console.log(user.getUserDetails());



function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("arun", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);
// Primitive 

// 7 types : String, Number, Boolean, null,undefined, Symbol, BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);
// const bigNumber = 345645678964115n


// Reference (Non primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "arun",
    age: 21,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);





/////////////////++++++++++++++++++++++++++++++
 
// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "arunyadavdotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "arun@google.com"

console.log(userOne.email);
console.log(userTwo.email);

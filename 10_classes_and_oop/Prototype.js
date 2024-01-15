let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }

}
 
Object.prototype.arun = function(){
    console.log(`arun is present in all objects`);
}

Array.prototype.heyArun = function(){
    console.log(`Arun says hello`);
}

// heroPower.arun()
myHeros.arun()
myHeros.heyArun()
// heroPower.heyArun()


// inheritance


const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment'
    
}
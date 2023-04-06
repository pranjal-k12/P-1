//Arrow functions
const productOfTwo = (a,b) => {
    return a*b;
}
console.log(productOfTwo(5,7));

let person = {
    name: "Max",
    age: "20",
    greet: () => {
        console.log("My name is " + this.name)  
    }
}

person.greet(); //undefined
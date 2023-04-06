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

//Map function
const fruits = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
const newFruits = fruits.map((fruit) => {
    if(fruit === ' '){
        return 'empty string'
    } else {
        return fruit
    }
});

console.log(newFruits);




const obj1 = {'key1': 1 , 'key2' : 2}

const obj2 = { ...obj1, key1: 1000}



console.log(obj1)

console.log(obj2)
//Arrow functions
const productOfTwo = (a,b) => {
    return a*b;
}
// console.log(productOfTwo(5,7));


let person = {
    name: "Max",
    age: "20",
    greet: () => {
        console.log("My name is " + this.name)  
    }
}

// person.greet(); //undefined

//Destructuring
const printName = ({name}) => {
    console.log(name);
}

// printName(person)

//Map function
const fruits = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
const newFruits = fruits.map((fruit) => {
    if(fruit === ' '){
        return 'empty string'
    } else {
        return fruit
    }
});

// console.log(newFruits);


//Async/Await
const printSequence = async () => {
    console.log('a');
    console.log('b');
    await Promise.resolve();
    console.log('c');
    await Promise.resolve();
    console.log('d');
    console.log('e');
  }
  
  printSequence();









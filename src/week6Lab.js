// call stack 
// function

// ES6 function set up
const greetSudent = () => {console.log('Hello student');}
console.log(greetSudent())

//functions using call stack
function firstFunction(){
    console.log("Hello from firstFunction");
   }
   function secondFunction(){
    firstFunction();
    console.log("The end from secondFunction");
   }
   function thirdFunction(){ 
       secondFunction();
       console.log("Third Function");
   }
   thirdFunction();
   function fourthFunction(){
       console.log("Fourth function")
   }
   fourthFunction();

//.push pushes the value into an array eg. myArray.push("A")
//.pop removes last value from an array eg. myArray.pop()

//use const more than let with arrays because the variable name stays 
//the same but you can change the values with .push and .pop
//so let allows you to change memory address and const does not let you change memory address
const numbers = []
numbers.push(100)
numbers.push(200)
numbers.push(300)
console.log(numbers)

//creates empty array
const arr = []
//pushes/adds values onto array
arr.push(1)
arr.push(2)
console.log (arr)
arr.push(3)
console.log (arr)
//removes last value added to array
arr.pop()
console.log(arr)

//call stack works with primitive data types and the heap is for non-primitive data types
//the call stack will store the address for it but the heap will store the same address and the data which can then be manipulated

//declares an empty object which is stored in the call stack
const myObj = {}
//add property and value to object.  These values will be stored in the heap
myObj['newKey'] = 'someValue' 
//
console.log(myObj)


//cracking the coding interview book McDowell
//assessment two is arrays, objects and functions(?)



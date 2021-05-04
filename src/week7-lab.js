//TO DO
// refactoring code from ES5/ES6 to one line - this is often a interview question
//create a function to return two arguments in an array
//example funcTwo Arugs(1,2) = [1,2]
//declaring a function twoArugs and assigning parameters a and b
//function twoArugs(a, b) {
    //declaring a variable and assigning parameters a and b to it
    //let arr = [a, b];
   // use return keyword to return an array
    //return arr
//}
//console.log(twoArugs(1, 2))

//refactor code onto one line
//const twoArugs = (a, b) => [a, b]
//refactor the code onto one line
const twoArugs = (...a) => a
console.log(typeof twoArugs)
//spread operator - explain with examples

// use function to find the odd oe even numbers in an array 
function oddOrEven(arr){ 
let count = 0;
arr.forEach(x => count += x) 
return count%2 === 0 ? "even" : "odd"
}
//not sure the console.log is right
console.log(oddOrEven(arr));
//find out how to get answer and test code works

//check for odd or even numbers using a for loop
// function oddOrEven2(arr2) {
//     let count = 0;
//     for(let i = 0; i < arr2.length; i++)
//     count+=arr2[i];
// }
// if (count % 2 === 0) {
//     return "even"
// } else {
//     return "odd"
// }
// refactor code into one line
const oddOrEven = (arr) => arr.reduce((a, b) => a + b, 0)% 2 === 0? "even" : "odd";
console.log(oddOrEven[2,1])
// % is the ternary operator 
//know what parameters are passing through a function

//write a function takes a string of numbers and returns an array
//arr ["3", "5.8"] arr[3, 5.8] 
function numberDataType(arr){
    //made a placeholder array
    newArr = [];
    //create a for.each loop, using a method
    // x = is the parameter for a call back?
    arr.forEach((x) => {
        // Number keyword converts string to a number?
        newArr.push(Number(x))
    })
    //return the data as an array in NewArr 
    return newArr
}
//refactor code above to one line
const numberDataType = (arr) => arr.map((x) => Number (x))
//.map goes through an array and performs a callback function on each element and puts out the new values (ie. it maps it with new values).  

//create a function takes an array of letters/numbers and returns them in a string
// function arrToString(arr){ 
//     let string = ''
//     for (let i = 0; i < arr.length; i++) {
// string += arr[i]
//     }
//     return typeof string
// }
// console.log(arrToString[2, 3, 4, 5])

//refactor code to ES6 - uses .join to concatenate elements
// function arrToString(arr){
//     return arr.join('');
// }

//refactor to one line
const arrToString = (arr) => arr.join('');

//function to convert object to an array
function objToArray(objarr){ 
     let arr = []
     for (let i in obj) {
         arr.push([i;obj[i]);
     }
    return arr

// refactor to one line
const objToArray2 = obj => object.entries(obj) 
console.log(objToArray2) 

//recursive function
function reverse(str) {
    // makes string into an arrays
    let arr = str.split('')
    //reverse the array
    let revArr = arr.reverse()
    //makes array go back to string
    let joinArr = reArr.join('')
    //joins the string characters back together in one string
    return joinArr
}

//refactor code
function revStr(str) {
    if(str === '') {
        return ''
    }
    else {
        return revStr(stri.subString (1)) + str.charAt(0)
}

//refactor to one line 
const revStr = (str) => str.length < 2 ? str : revStr(str.slice(1, str.length)) +str[0]



//what is .reduce method with examples
//what is forEach with examples
//forEach works like a loop
//what does .join do in javascript
//what is .entries (or maybe object.entries)
// what is object.keys
//look into .slice

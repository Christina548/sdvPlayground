//TO DO
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
const oddOrEven = (arr) => { }



//what is forEach with examples
//forEach works like a loop



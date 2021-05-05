// create a function that concantenate n inout arrays, where n is a variable 
// eg. ([1,2,3], [4,5], [6,7]) -> ([1,2,3,4,5,6,7])
// ... = spread operator
// Spread syntax can be used when all elements from an object or array need to be included in a list of some kind. 
function firstFunction(...args) { 
    //declare empty array variable for result to be stored in 
let result = []
//arguments.length = keyword to check all arguments when not sure how many will be 
//The arguments.length property contains the number of arguments passed to the function.
for(let i = 0; (i < arguments.length); i++) {
    // give result the value of arguments added together in one array
result = result.concat(arguments[i])
}
return result
}
//ES6
function esSixFunc(...arg){
    return [].concat(...args)
}

//create a function that takes two numbers as arguments(num, length)
function firstFuncMulti(num, length){
    let result2 = [];
    //for loop starts at 1 not 0 to multiple the number by 1
    for (let i = 1; i <= length; i++) {
        //.push adds one or more elements to the end of an array and returns the new length of the array.
    result2.push(num*1)
}
//once goes through each number the specified number of times(this is the length number) the loop will stop
return result2
}
//ES6
// function esSixFuncMulti (num, length) {
//     return[...Array(length).keys()].map((e, i) => (e+i)*num)
// }
//The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.

//create a array that takes an array of numbers arr,
//a string str and returns an array of numbers as per the following rules.
//"asc" returns a sorted array in ascending order.
//"Des" returns a sorted array in descending order
//using switch statement instead of for loop - prone to bugs because it is complicated
function ascDesFunc(arr, str) {
    switch (str.charAt(0)) {
        case 'Asc': 
        return arr.sort((a, b) => a - b);
        break;
        case 'Desc':
        return arr.sort((a,b) => b - a);
        break;
        return arr
    }
}

//create a function that returns true if all parameters are truthy and false otherwise
//0, undefined, null, nan are falsey data types
// [5,4,3,2,1,0] -> false
// (true, true, true) -> true
// n number of inputs always use spread operator

//ES6 version
//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
//Boolean is a keyword
const checkTrueOrFalse = (...args) =>args.every(Boolean)
//ES5
// function CheckTrueOrFalse2 (...args){ 
//     let result = Boolean;
//     for(let i = 0; (i < arguments.length); i++) {  
//     if 
// }

//create a 3d array 
//write a function that takes three arguments and return a main array with sub arrays
//(3,2,3)// 3 is how many arrays needed, 2 is how many values needed in each array, 3 is value for each index 
// so will make [[3,3], [3,3], [3,3]]
//creates a matrix
function subArrays(x, y, z) { 
    //x is main array, y is how many sub arrays, z is value for each array 
    return Array(x).fill(Array(y).fill(z));
}
console.log(subArrays(3,2,3))
//Array keyword creates empty arrays

//create a function that takes an array of names and returns an array where only the first letter of each name is capitalised
// eg. (["samuel", "MABELLE", "Letitia", "meredith"]) -> (["Samuel", "Mabelle", "Letitia", "Meredith"])
function firstCapFunc (arr){
    //for loop to loop through items in an array
    for (let i = 0; i < arr.length; i++){
        //arr[i] = means go through same array and use same values but different format
        //arr[i].charAt(0) = take first letter 
        // + concatenate adds first letter to other charaacters in String
        //arr toLowerCase changes characters
        //.substring = from index 1 change everything to lower case (index 0 is first letter)
        //The substring function returns a part of a given string.
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].toLowerCase().subString(1)
    }
    //return arr with updated names
    return arr
}
// use this for case sensitive information like names on web apps, keeps format of data the same

//create a function that takes a string of duplicated letters and return an array of letters without duplications
//eg (AAAAABBBBBBBCCCCCCCCDDDDD") -> ["A", "B", "C", "D"]
// ([1, 1, 2, 3, 4, 4]) -> [1,2,3,4]
// create a function named with the parameters x to cover different data types
//ES6
// function removeFunc(x) {
//     //make sure returning an array
//     //.filter separates values and filters out duplicates
//     //Array. generates an empty array
//     //Array.from creates a new, shallow-copied Array instance from an array-like or iterable object.
//     return Array.from(x).filter(e, i, a) => x !== a(i-1)

// }
// let es5Func = function(x) {
//     //create a variable to store result
//     let newArr = []
//     //for loop accesses all elements in the array
//     for (let i = 0; i < x.length; i++){
//         //x[i] iterates through x, !== not equal value or type so if x is not equal
//         //x[i+1] moves on to check next item to see if its equal to last item
//         if (x[i]) !== x[i + 1]; {
//             // .push adds new values to the variable newArr
//             //(x[i]) only adds non duplicated values to newArr
//         newArr.push(x[i])
//     }
// }
// //return the updated variable newArr
// return newArr
// }

//write a function that checks if the values in the first array are present in the second array.
//if they are present its true, if not its false
// eg. ([1, 3], [1, 3, 3, 5]) -> true
//eg. ([1, 3, 10], [10, 8, 8, 8]) -> false
function comparing(a,b) {
    //
    for (let i = 0; i <a.length; i++){
        if (a[i] ===b[i]) { 
            return true
        }
        return false
    }
}
console.log(comparing([1, 3], [1, 3, 3, 5]))
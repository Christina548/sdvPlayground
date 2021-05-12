// create a function that takes two numbers and a mathmatical operator
//and will perform a calulation with the given numbers.
//eg. calFunc(3, "+", 4)
//function with three parameters
function calFunc (num1, operator, num2) { 
    operations = {
        //property key with property value that has callback function
        //object inside a function
        '+': (a, b) => a + b, 
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    }
    //return the operator parameter with two arguments to pass function
    return operations[operator](num1, num2);
}
//refactor weather lab with this method

//create a function that takes an array and returns the sum of all its items in an arrays
//the item in an array can be another array
//sumFunc([1, [2], [1], 3]) -> 7
//1 + 2 + 1 + 3 = 70

function sumFunc(arr) {
    //.flat creates a new array with sub arrays concatenated together
    //put infinity in brackets to go through all the arrays if there are a lot of arrays
    //.reduce creates a reducer function that works on each element in an array to produce a single output value
    // can add the values in an array plus any values you add in the array which is added here with the a,b => a+b
    return arr.flat(infinity).reduce((a,b)=> a+b)
}

//create a function that takes a multidimensional array, converts into one array and
//and returns using recursion
//flatFunc ([[[[[2, 14, "SDV503"]]], 2, 3, 4]]) -> [2, 14, "SDV503", 2, 3, 4]
//parameter names are placeholders
//flatten nested array to one array
const flatFunc = (arr) => {
    //variable to store result  which is one array
    const result = [];
    //loop through the array with forEach
    arr.forEach(element => {
        //? tenary operator = conditional statement
        //forEach lopps through with callback function 
        //if every element in the array is an array push it to the result.push
        //then call the function inside the function to push the element into the result
        //spread operator loops through all the elements and puts them in a list
        // if is not an array the elements are pushed the array result
        //if is an array pushes the result to the final array
        //pushes all the values in the arrays into one array
        Array.isArray(element) ? result.push(...flatFunc(element)) : result.push(element);
    })
}

//create a function that takes an object or array as an argument and returns
//the maximum depth of that object or array 
//getDepth ({a: 1}) -> 1
//getDepth([1, [2, [3, [4, [5]]]]]) -> 5

const getDepth =obj => {
    //level will be counter
    // don't start at index 0 because it won't add up correctly 
    // set index 0 as 1 so that it will add up correctly
    let level = 1
    //object.keys will get the 
    //method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
    object.keys().forEach(key => {
        //if its typeof is an object do the following(?)
        if (typeof obj[key] === 'object'){
            //const depth is a recursion function = calling the function again and adding 1 
            const depth = getDepth(obj[key]) + 1
            //math.max = returns largest (depth) number the counter finds and returns it in level
            level = math.max(depth, level)
        }
    })
    return level
}

//create a function that can nest a flat array to represent an incremental depth level sequence
//the elements do not matter to the function, you should increment by index
//expect the array length to be from 2-20
//createDepth([1,2]) -> [1,[2]]
//createDepth([1,2,3]) -> [1,[2,[3]]]

function createDepth(arr){
    //if arr has one element in it return the element 
    //if array length is = to 1 no go to next step
    if(arr.length === 1) return arr
    //.slice creates a shallow copy of the array
    //recursion so that after the if statement it goes back to loop through
    //recursion creates like a loop to go through the elements
    //[arr[0], the comma shows to go onto the next index
    //.slice(1) means take out one element in the array which will be the value at index 0 
    //.slice makes it possible to move onto the next element by removing the last element(?)
    return [arr[0], createDepth(arr.slice(1))]
}

//one line
const esSixDepth = arr => arr.length === 1 ? arr : [arr[0], esSixDepth(arr.slice(1))] 

//create a function that takes an array.  This array can have all kinds of items,
//even other arrays
//The function should return a single, flat, one-dimensional array with all
//elements: Here are the conditions:
/** 
 if the item is an array, include each item in it and the following still apply
 if the item is a function, include the functions output, not the function itself.
 if the item  is a plain object or primitive include it as is
 */
// flatArray([1, "2", [3, function(){return 4;}, ["five"], ["six", true. {prop: "val"}]]) 
// -> [1, "2", 3, 4, "five", "six", true, {prop: "val"}]

//when have mixed data types can flatten them
// function flatArray (arr) {
    // store result in an array
//     let result = [];
    //if arr is undefined return arr
//     if (arr === undefined){
//         return arr;
//     }
    //use forEach to loop through looking for function
//     arr.forEach(function (e) {
    // if the array is an array add it to result
//         if (Array.isArray(e))
//         result = result.concat(flatArray(e))
//     } else {
        //if its a function add the value produced by the function to the array
//         if (typeof e === 'function') {
    //(e()) the brackets calls the function to add the value from the function to the array
//         result.push(e())
//     } else {
    //if it is anything else add it to the array
//         result.push(e)
//     }
// }
//     })
// }

//says is it an array yes push it to flat array, no is it a function yes push teh value to the end of the array, else push the values to the array
//result.concat can add values to the array


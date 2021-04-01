// formula for calculating area of rectangle - Area = length * width / height

let length = 3
let width = 5
function calculateAreaRectangle (length, width) { 
    return (length * width)
    console.log(length * width)
} 
// return error??
if (length * width === typeof 'string') {
    return console.error();
}

//another idea 
const area = function (){
    let length = 3
    let width = 4
    let result = length * width;
    if (result === 'String') {
    return ('error')
}

const rectangle = function(area){ 
    return (length * width) 
}

// Create a function that takes in an array of numbers and returns the sum of its cubes.
//Example: sumOfCubes([1, 5, 9]) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
const array = [1, 5, 9]
function sumOfCubes (array) { 
    return array*array*array*
}
console.log (sumOfCubes(array)) 

var cube = function([array) { return array*array*array; }

//another idea 
const array = [1, 5, 9];
    
    // Getting sum of numbers
    var sum = array.reduce(function(a, b, c){
        return a^3 + b^3 + c^3;
    }, 0);
    
    console.log(sum);

//more ideas
const array1 = [1, 2, 3]
var sumOfCubes = function([array1]) { return array1*array1*array1; }
    console.log (sumOfCubes)

let g = 1
let h = 5
let i = 9
    var sum = array.reduce(function(g, h, i){
    return g^3 + h^3 + i^3;
    }, 0);
    console.log(sum);
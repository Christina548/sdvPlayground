// create a function that concantenate n inout arrays, where n is a variable 
// eg. ([1,2,3], [4,5], [6,7]) -> ([1,2,3,4,5,6,7])
// ... = spread operator
function firstFunction(...args) { 
    //declare empty array variable for result to be stored in 
let result = []
//arguments.length = keyword to check all arguments when not sure how many will be 
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

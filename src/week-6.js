// Prototypal Inheritance Visualized
let arr = [1,2,3,4,5]
console.log (arr.length)
// used to debug code (?)

/*constructor function - creates a second object by default which is a prototype
 which gives you more access to change the code this doesn't negatively affect the code
 the constructors prototype has a reference to the original constructor function
*/
// way of using same object over and over for different data
function Dog(name, breed, color) {
    this.name = name
    this.breed = breed
    this.color = color
    this.bark = function () { 
        return 'woof'
    }
}
const Dog1 = new Dog (
    "Daisy",
    "labrador",
    "Black"
    )
Dog1.name
console.log (Dog1.name)
Dog1.bark ()
console.log (Dog1.bark)
//Dog1.tostring ()

const student = {
    name: 'Bob',
    year: 'one',
    class: 'SDV503'
}
console.log (student.name)
student.name = 'matt'
console.log(student)

// create object, add propertys and property names, contain functions and arrays

//creates new empty object
const newOb = {}

//creates object with property names and values
const info = {
    firstName: "John",
    lastName: "Smith",
    dateOfBirth: "1st DEC 2000",
    friends: ["Bob", "Tom"]
}
// finds specific value of array.  Info is object name, friends is specific property want and 1 is the index of which value want within that property value.
console.log(info.friends[1])

const example = {
    nestedObj: {
        name: "Alex"
    }
}
console.log (example)

const propsName = "firstName"

const objOne = {
    [propsName.toUpperCase()]: 'Alex'
}
console.log (objOne)

//key values in objects
const objTwo = {
    firstName: 'Alex',
    lastName: 'Ali',
    printFullName () { 
        return `${this.firstName} ${this.lastName}`
    }
}
console.log (objTwo.printFullName())

console.log(objTwo['firstName'])

console.log (objTwo.hasOwnProperty('lastName'))
console.log (objTwo.hasOwnProperty ('address'))
console.log (objTwo)
console.log (objTwo.keys)

//can delete a property like below
console.log(delete objTwo.firstName)
//check if property is deleted as below - if says false the property is deleted because its not there anymore
console.log(objTwo.hasOwnProperty('firstName'))

// this deletes it too but above way is better
const newProps = delete objTwo.firstName
console.log (newProps)

//look up prototype methods in MDN and try out each one

//call a function 
console.log('Hello!')
function greet () { 
    return 'Hello from function '

}
const print = 'My name'
console.log (greet ())
another var = 5
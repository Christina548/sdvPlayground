// // formula for calculating area of rectangle - Area = length * width / height


// let length = 3
// let width = 5
// function calculateAreaRectangle (length, width) { 
//     return (length * width)
//     console.log(length * width)
// } 
// // return an error
// if (length === string) {
//     console.log('error');
//   } else if (width === String) {
//     console.log('error');
//   } else if (length === boolean) {
//     console.log('error');
//   } else if (width === boolean) {
//     console.log('error');
//   }

// //return error
// function isNumber(evt) {
//     evt = (evt) ? evt : window.event;
//     var charCode = (evt.which) ? evt.which : evt.keyCode;
  
//     if (charCode > 31 && (charCode < 48 || charCode > 57)) {
//       alert("only input numbers");
//       return false;
//     }
  
//     return true;
//   }

// // return error??
// if (length * width === typeof 'string') {
//     return console.error();
// }
// if (length * width === typeof 'boolean') {
//     return console.error();
// }

// //another idea 
// const area = function (){
//     let length = 3
//     let width = 4
//     let result = length * width;
//     if (result === 'String') {
//     return ('error')
// }

// // Create a function that takes in an array of numbers and returns the sum of its cubes.
// //Example: sumOfCubes([1, 5, 9]) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// // way of getting sum of cubes for each number in an array eg. myArray.
// var a = [1,2,3,4,5];
//    for ( var i = 0; i < a.length;i++) {
//       a[i] = a[i]*a[i]*a[i];
//    }
//    console.log(a);

// //first idea
// const array = [1, 5, 9]
// function sumOfCubes (array) { 
//     return array*array*array*
// }
// console.log (sumOfCubes(array)) 


// var cube = function([array) { return array*array*array; }

// //another idea 
// const array = [1, 5, 9];
    
//     // Getting sum of numbers
//     var sum = array.reduce(function(a, b, c){
//         return a^3 + b^3 + c^3;
//     }, 0);
    
//     console.log(sum);

// //more ideas
// const array1 = [1, 2, 3]
// var sumOfCubes = function([array1]) { return array1*array1*array1; }
//     console.log (sumOfCubes)

//     let g = 1
//     let h = 5
//     let i = 9
//     array = [g, h, i]
//     function sum([g, h, i]){
//             return g^3 + h^3 + i^3;
//             };
//             console.log(sum);

// //another idea
// def sum_cubes (n):
//     b, c, sum = 1, 0, 0
//     for a in range(0, 6*n, 6):
//         sum += (c := c + (b := b + a))
//     return sum

// //another idea 
// function sum_Of_Cubes(n) {
//     var sumn = 0;
  
//     for (var i = 1; i <= n; i++) {
//       sumn += Math.pow(i, 3);
//     }
//     return sumn;
//   }
  
//   console.log(sum_Of_Cubes(3));
//   console.log(sum_Of_Cubes(4));
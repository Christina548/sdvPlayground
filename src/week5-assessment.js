const vegetable = 'Tomatoe';
switch (vegetable) {
    case 'Banana':
    console.log ('Bananas are $6');
    break;
    case 'Tomatoe':
        console.log ('Tomatoes are $3')
        break;
    case 'Potatoe':
        console.log ('Potatoes are $5')
        break;
    default:
        console.log ('please choose a fruit or vegetable');
}

for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log('Walking east one step');
  }

//for (let walk = 0; walk < 6; walk++) {
  //  console.log ('walk west')
//}

for (let run = 0; run < 3; run++) { 

    console.log ('run east') 
}

let person = {firstName:"John", lasName:"Doe", age:25};

let output = "";
let x;
for (x in person) {
  output += person[x];
}
console.log (output);

let object = { a: 1, b: 2, c: 3, method: () => { } };
for (let value in object)
console.log(value, object);

let string = 'NMIT';
for (let value of string)
  console.log(value);

  let array = [0, 1, 2, 3];
  for (let value of array)
  console.log (value);


let Y = 10;
while (Y++ < 15)
console.log(Y);
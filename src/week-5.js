let arr = [1,2,3,4,5,6,7]
console.log (arr.length)

for (let i = 0; i <= 5; i++) {
    console.log ('This is a loop')
}

for (let a = 0;; a++) {
    console.log ("loop, a = " + a);
    if (a > 1)
break;
};

//function counter
let counter = 0;
function inc() { counter++; }for (let i = 0; i < 10; i++, inc());
console.log(counter);

for (var i = 0; i < 10; i++) {let x = i;}

for (let y = 0; y <2; y++)
for (let x = 0; x < 2; x++)
console.log (y, x);

for (let i = 0; i < 3; i++) { if (i == 10) continue; console.log (i); }

for (let i = 0;; i++) {console.log ("loop"); break; };

let string = 'text'
for (let value of string)
console.log (value);

let array = [0,1,2]
console.log (array.length)

let enumerable = { property : 1, method : () => {} };for (let key of Object.keys( enumerable )) console.log(key);

let c = 0;
while (c++ <5)
console.log (c);


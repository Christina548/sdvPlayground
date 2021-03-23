const grade = 70;
switch (grade) {
  case 100:
    console.log('a = 100');
    break;
  case 90:
    console.log('b = 90');
    break;
  case 70:
    console.log('c = 70');
    break;
  case 40:
    console.log('f = 40');
    break; 
    default:
    console.log('please enter a number value');
    break;
}

const foo = 5;
let output = '';
switch (foo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'How ';
    output += 'Old ';
  case 2:
    output += 'Are ';
  case 3:
    output += 'You';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}

let gradStudent = 90;
switch (true) {
    case (gradStudent >= 90):
        console.log ('My grade is A+')
        break
    case (gradStudent >= 80):
        console.log ('My grade is B+')
        break
    case (gradStudent >= 70):
        console.log ('My grade is C+')
        break
    case (gradStudent <= 40):
        console.log ('My grade is fail')
        break
    default:
        console.log ('Please enter a string')
        break;
}

let person = { 
    name: 'tony', 
    age: 20, 
    driver: null
};
console.log (person)

if (person.age >= 16) {
    person.driver = 'yes';
    } else {
        person.driver = 'no';
    }
console.log (person);

person.driver = person.age >= 16 ? 'yes' : 'no';
console.log (person);

let isStudent = false;
let isSenior = true;
let price = isStudent ? 8 : isSenior ? 6 : 12
console.log (price);


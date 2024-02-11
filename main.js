// Block Scope

function example() {
  if (true) {
    let bS = "Hello";
    console.log(bS);
  }
  // console.log(bS) //--> error
}
example();
// console.log(bS) //--> error

// ->>>>>> Primitive Data Types
// Number Data Types
let x = "Sword";
console.log(typeof x);

let learning = true;

console.log(learning);
console.log(typeof learning);

// Undifined Data Types
let age;
console.log(age);

// ->>>> Referance Data Types
// Object

let person = {
  firstName: "Vladilena",
  lastName: "Mileze",
  age: 19,
};

console.log(person);
console.log(typeof person);

//Array

let number = [1, 2, 3, 4, 5];
console.log(number);

function msg() {
  console.log("Hello");
}

console.log(typeof msg);

// Control Flow

let umur = 15;

if (umur >= 18) {
  console.log("You are an adult");
} else if (umur >= 16) {
  console.log("You are a teenager");
} else {
  console.log("You are a minor");
}

let value = 42;

switch (typeof value) {
  case "number":
    console.log("Number");
    break;
  case "string":
    console.log("string");
    break;
  case "boolean":
    console.log("boolean");
    break;
  default:
    console.log("other");
    break;
}

let dayName = 2;

switch (dayName) {
  case 1:
    dayName = "Ahad";
    break;
  case 2:
    dayName = "Senin";
    break;
  case 3:
    dayName = "Selasa";
    break;
  case 4:
    dayName = "Rabu";
    break;
  case 5:
    dayName = "Kamis";
    break;
  case 6:
    dayName = "Jumat";
    break;
  case 7:
    dayName = "Sabtu";
    break;
  default:
    dayName = "Invalid day Number";
    break;
}
console.log("The day is : " + dayName);

let hariArray = ["Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

for (let i = 0; i < hariArray.length; i++) {
  console.log(hariArray[i]);
}

for (let i = 1; i <= 5; i++) {
  console.log(i);

  for (let j = 1; j <= 3; j++) {
    console.log("inner loop " + j);
  }
}

let s = 0;
while (s <= 10) {
  console.log("Mileze");
  s++;
}

let i = 1;

do {
  console.log("Asuna");
  i++;
} while (i <= 5);

for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}
for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    continue; //skip
  }
  console.log(i);
}

function print(firstName, lastName) {
  console.log("Hello " + firstName + " " + lastName);
}

print("Agaam", "Prasetya");
print("Agaam");
print("Agaam", "Prasetya", "MAster");

export function evenOrOdd(x) {
  if (x % 2 == 0) {
    console.log("Genap");
  } else {
    console.log("Ganjil");
  }
}
evenOrOdd(2);

// Default parameters
function sum(x, y = 0) {
  console.log(x + y);
}

sum(2);

// Fuction return

function fn1(x) {
  function fn2(y) {
    return x * y;
  }
  return fn2;
}

let result = fn1(5);

console.log(result(2));

console.log(fn1(6));

// Callback Function
function display(result) {
  console.log(result);
}

function add(num1, num2) {
  let sum = num1 + num2;
  display(sum);
}

add(10, 20);

// Anonymous functions
let saas = function (x) {
  return x;
};

(function () {
  console.log("Agaam");
})();

setTimeout(function () {
  console.log("Hello, Agaam");
}, 2000);

// Recursive Function

function countDown(num) {
  console.log(num);
  num--;
  if (num !== 0) {
    countDown(num);
  }
}

countDown(10);

let personName = {
  firstName: "Vladilena",
  lastName: "Mileze",
  age: 19,
};

personName.firstName = "Major Vladilena";
personName.bestFriend = "Shinei Nouzen";
delete personName.age;

console.log(personName["firstName"]);
console.log(personName);

function stringToNumber(str) {
  if (str !== NaN) {
    console.log(parseInt(str));
  }
}

stringToNumber("11");

function cubeChecker(volume, side) {
  if (volume <= 0 || side <= 0) {
    console.log("false");
    return false;
  }

  if (volume === side ** 3) {
    console.log("true");
    return true;
  } else {
    return false;
  }
}

cubeChecker(125, 5);

function countSheep(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += i + " sheep...";
  }

  return result;
}

console.log(countSheep(2));

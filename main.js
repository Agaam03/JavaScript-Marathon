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
function sumd(x, y = 0) {
  console.log(x + y);
}

sumd(2);

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

function positiveSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

let arr = [2, 3, 4, 4];
console.log(positiveSum(arr));

function makeNegative(num) {
  if (num <= 0) {
    return num;
  } else {
    return num - num * 2;
  }
}

console.log(makeNegative(8));

function solution(str) {
  let buffer = "";
  for (let i = str.length - 1; i >= 0; i--) {
    buffer += str[i];
  }
  return buffer;
}
console.log(solution("agam"));

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}
console.log(boolToWord(true));

function numberToString(num) {
  let buffer = "";
  for (let i = 1; i <= 1; i++) {
    buffer += num;
  }
  return buffer;
}

console.log(numberToString(5));

// function opposite(number) {
//   if (number > 0) {
//     return number * -1;
//   } else {
//     return number * -1;
//   }
// }

function opposite(number) {
  return number > 0 ? number * -1 : number * -1;
}
console.log(opposite(-3));

function removeChar(str) {
  return str.slice(1, -1);
}

console.log(removeChar("Agam"));

function sumArray(array) {
  if (array === null || array.length <= 2) return 0;
  const sorted = array.sort((a, b) => a - b).slice(1, -1);
  let result = 0;
  for (let i = 0; i <= sorted.length - 1; i++) {
    result += sorted[i];
  }
  return result;
}

// function sumArray(array) {
//   return const sorted = array.sort((a, b) => a - b).slice(1, -1);
// }

console.log(sumArray([-6, 20, -1, 10, -12]));

let makanan = [1, 2, 3, 4, 5];

// Buat kode kamu di bawah ini
const gorengMakanan = makanan.filter((item) => {
  return item > 2;
});

console.log(gorengMakanan);

// const word = 'Saya sangat menginginkan PS5 dari 2 bulan yang lalu';
// const regex = /\W\d/gi;

// console.log(word.match(regex));

const regex = /\0x1f604/gu;
const word = "PS5 seharga $499";

console.log(word.match(regex));

let no = "23";
let reee = no.length;
console.log(reee);

function multiply(number) {
  if (number !== "") {
    let str = "";
    if (number <= 0) {
      let temp = number * -1;
      let buff = (temp += str);
      const result = number * 5 ** buff.length;
      return result;
    } else {
      let buff = (number += str);
      const result = number * 5 ** buff.length;
      return result;
    }
  }
}

console.log(multiply(0));

function multiplyy(number) {
  if (number !== "") {
    let str = "";
    let buff = (number += str);
    console.log(buff);
    return number <= 0
      ? number * 5 ** (buff.length - 1)
      : number * 5 ** buff.length;
  }
}

console.log(multiplyy(-10));

function yearDays(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? `${year} has 366 days`
    : `${year} has 365 days`;
}

console.log(yearDays(2000));

// function invert(array) {
//   const result = array.map(item => {
//     return item * -1
//   })
//   return result
// }

const invert = (array) => array.map((item) => item * -1);

console.log(invert([1, 2, 3, 4, 5]));

function fixTheMeerkat(arr) {
  return arr.reverse();
}

const sum = (numbers) =>
  numbers.reduce((total, item) => {
    return total + item;
  }, 0);

console.log(sum([1, 5.2, 4, 0, -1]));

const grow = (x) =>
  x.reduce((a, b) => {
    return a * b;
  });

const maps = (x) => x.map((item) => item * 2);

function flickSwitch(arr) {
  const filter = arr.map((item) => {
    if (item === "flick") {
      return false;
    }
  });
  return filter;
}

console.log(flickSwitch(["codewars", "flick", "code", "wars"]));

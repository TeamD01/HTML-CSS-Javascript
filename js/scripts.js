console.log("Hello world!");

const myName = "David";
console.log("My name is: " + myName);

const number = 9;
console.log("Number is: " + typeof number);

const trueOrFalse = true;
console.log("True of false: " + typeof trueOrFalse);

let floatingPointNumber = 2.71828;
console.log("Floating point number is: " + typeof floatingPointNumber);

let string = "Hello";
console.log("String is: " + typeof string);

let date = new Date();
console.log("Date is: " + typeof date);

let boolean = true;
console.log("Boolean is: " + typeof boolean);

let object = {};
console.log("Object is: " + typeof object);

let array = [];
console.log("Array is: " + typeof array);

let mName = 'Colt' + ' ' + 'Steele';
console.log(myName); // 'Colt Steele'

let name = 'Nicholas Cage';
let age = 54;
let job = 'actor';
let bio = `${name} is a ${age} year-old ${job}.`;
console.log(bio);

if (true) {
    console.log("This was true")
  } else {
    console.log("This was false")
  }

  if (false) {
    console.log("This was true")
  } else {
    console.log("This was false")
  }

  if (1) {
    console.log("1This was true")
  } else {
    console.log("1This was false")
  }
  if (0) {
    console.log("0This was true")
  } else {
    console.log("0This was false")
  }

  if (999999) {
    console.log("99999This was true")
  } else {
    console.log("99999This was false")
  }

  if ("a") {
    console.log("aThis was true")
  } else {
    console.log("aThis was false")
  }

  if (!false) {
    console.log("!falseThis was true")
  } else {
    console.log("!falseThis was false")
  }

  let x = 10;
  
  if (x > 10) {
    console.log('x is greater than 10');
  
  } else if (x === 10) {
    console.log('x is equal to 10');
  
  } else {
    console.log('x is less than 10');
  
  }

  let x1 = 20;

  // only one of the branches below will run
  
  if (x1 > 10) {
    console.log('x is greater than 10');
  
  } else if (x1 === 10) {
    console.log('x is equal to 10');
  
  } else {
    console.log('x is less than 10');
  
  }

  let x2 = 10;

  // only one of the branches below will run
  
  if (x2 > 10) {
    console.log('x is greater than 10');
  
  } else if (x2 === 10) {
    console.log('x is equal to 10');
  
  } else {
    console.log('x is less than 10');
  
  }
  
  let x3 = 10;
  console.log(x3/0);
  
  let x4 = "A";
  console.log(x4 + 1);

  let b = 11;

if (b > 10) {
  console.log('x is greater than 10');

} else if (b === 11) {
  console.log('x is equal to 11');

} else {
  console.log('x is less than 10');

}

let xx = 11;

if (xx > 10) {
  console.log('x is greater than 10');
}

if (xx === 11) {
  console.log('x is equal to 11');

} else {
  console.log('x is less than 10');

}

let a = true;

console.log(!!!!!!a); 

let aaaa = true;
let bb = false;

console.log(aaaa || bb); // true
console.log(aaaa || aaaa); // true
console.log(bb || bb); // false
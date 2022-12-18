"use strict";

/* 

My code looks terrible I know. I've found solutions like this:

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}

But I still don't understand how it works. Namely this : "n * factorial(n - 1)" and this: "return 1". 
How those codes return factorial when at the last step they should return 1.


I absolutely don't understand this: n * factorial(n - 1)

Both cases refers to stack so I'll try to get to know about this if I get enough time

But for now I offers a solution to the task as I understand it
 */

const somefunction = () => {
  let factorial = 1;
  return function getFn(number) {
    factorial = factorial * number;
    --number;
    if (number === 1) return factorial;
    return getFn(number);
  };
};

const getFactorial_4 = somefunction();
const getFactorial_8 = somefunction();
const getFactorial_5 = somefunction();

console.log(getFactorial_4(4));
console.log(getFactorial_8(8));
console.log(getFactorial_5(5));

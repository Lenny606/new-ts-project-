console.log("Your code goes here...");

import { person2 } from "./basics";

person2;
const test = 5;
const num1 = 4;

function add(n1: number, n2: number): number {
  return n1 + n2;
}

function addAndHandle(
  n: number,
  m: number,
  callback: (num1: number, num2: number) => void
) {
  const result = n + m;
  callback(result, 5);
}

addAndHandle(12, 2, add);

add(1, 5);

let combine: Function;
combine = add;

let newCombine: (a: number, b: number) => string; //defines number of arguments and their types and return as string

console.log(combine(5, 5));

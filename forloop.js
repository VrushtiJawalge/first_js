// 1. Print numbers from 1 to 10
// Write a program to print numbers from 1 to 10 using a loop.
console.log("Numbers from 1 to 10");
for (let a = 1; a <= 10; a++) {
  console.log(a);
}

// 2. Print even numbers between 1 and 20
// Use a loop to print all even numbers from 1 to 20.
console.log("Even numbers from 1 to 20");
for (let b = 1; b <= 20; b++) {
  if (b % 2 == 0) {
    console.log(b);
  }
}

// 3. Sum of first N natural numbers
// Ask the user to enter a number N. Use a loop to calculate the sum from 1 to N.
console.log("Sum of first N natural numbers");
let n = prompt("Enter a number (N):");
let sum = 0;
for (let c = 1; c <= n; c++) {
  sum += c; // fixed: was 'i' which was undefined
}
console.log("Sum from 1 to", n, "is:", sum);

// 4. Print multiplication table of a number
// Ask the user to enter a number and print its table
console.log("Multiplication Table");
let num = prompt("Enter a number to print its table:");
for (let d = 1; d <= 10; d++) {
  console.log(num + " × " + d + " = " + (num * d));
}

// 5. Factorial of a number
// Ask the user to input a number and print its factorial using a loop.
console.log("Factorial of a number");
let f = prompt("Enter a number to find its factorial:");
let fact = 1;
for (let e = 1; e <= f; e++) {
  fact *= e;
}
console.log("Factorial of", f, "is:", fact);

// 6. Print numbers in reverse order from N to 1
// Ask the user to enter N and print numbers in reverse order from N to 1.
console.log("Numbers in reverse from N to 1");
let rev = prompt("Enter a number (N):");
for (let g = rev; g >= 1; g--) {
  console.log(g);
}

// 7. Count digits of a number
// Ask the user for a number and use a loop to count how many digits it has.
console.log("Count the digits of a number");
let h = prompt("Enter a number:");
console.log("Number of digits in", h, "is:", h.length);

// 8. Find the sum of digits of a number
// Take a number as input and find the sum of its digits using a loop.
console.log("Sum of digits of a number");
let num2 = prompt("Enter a number:");
let digitSum = 0;
for (let i = 0; i < num2.length; i++) {
  digitSum += parseInt(num2[i]);
}
console.log("Sum of digits of", num2, "is:", digitSum);

// 9. Check whether a number is prime
// Ask the user to input a number and check if it's a prime number using a loop.
console.log("Check whether a number is prime");
let p = prompt("Enter a number to check prime:");
let isPrime = true;
if (p < 2) {
  isPrime = false;
} else {
  for (let i = 2; i < p; i++) {
    if (p % i === 0) {
      isPrime = false;
      break;
    }
  }
}
if (isPrime) {
  console.log(p + " is a Prime Number");
} else {
  console.log(p + " is Not a Prime Number");
}

// 10. Fibonacci series up to N terms
// Print the first N terms of the Fibonacci series (0, 1, 1, 2, 3, 5...).
console.log("Fibonacci Series up to N terms");
let fib = prompt("Enter how many terms of Fibonacci series:");
let num3 = 0, num4 = 1;
console.log("Fibonacci Series:");
for (let i1 = 0; i1 < fib; i1++) {
  console.log(num3);
  let next = num3 + num4;
  num3 = num4;
  num4 = next;
}

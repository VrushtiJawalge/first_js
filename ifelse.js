/* ✅ 1. Even or Odd Checker
Write a program to take a number from the user and check whether it is even or odd.
*/
let num1 =prompt("1. Enter a number:");
if (num1 % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

/* ✅ 2. Positive, Negative or Zero
Ask the user to input a number and check if it's positive, negative, or zero.
*/
let num2 = parseFloat(prompt("2. Enter a number:"));
  if (num2 > 0 || num2 < 0) {
    console.log("Number is either Positive or Negative");
  } else {
    console.log("Number is Zero");
  }


/* ✅ 3. Vowel or Consonant
Take a single alphabet as input and check whether it's a vowel or a consonant.
(Hint: vowels = a, e, i, o, u)
*/
let char = prompt("3. Enter a single alphabet:");
if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
  console.log("Vowel");
} else {
  console.log("Consonant");
}

/* ✅ 4. Greater of Two Numbers
Take two numbers as input and print the greater number.
*/
let a = prompt("Enter first number:");
let b = prompt("Enter second number:");
if (a > b) {
  console.log(a+"is greater");
} else {
  console.log(b+"is greater");
}

/* ✅ 5. Grade Calculator
Take marks (0–100) as input and print the grade based on:
>=90 → A
>=75 and <90 → B
>=50 and <75 → C
<50 → Fail
*/
let marks =prompt("Enter marks (0–100):");
if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 50) {
  console.log("Grade: C");
} else {
  console.log("Fail");
}

/* ✅ 6. Leap Year Checker
Ask the user to enter a year and check if it's a leap year or not.
(Leap year rule: divisible by 4 and not 100, or divisible by 400)
*/
let year =prompt("6. Enter a year:");
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}

/* ✅ 7. Age Eligibility for Voting
Take age as input and check if the user is eligible to vote (age ≥ 18).
*/
let age =prompt("7. Enter your age:");
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

/* 
✅ 8. Absolute Value
Take an integer input and print its absolute value.
(If negative, convert it to positive)
*/
let num3 = prompt(" Enter an integer:");
if (num3 < 0) {
  console.log("Absolute value:", -num3);
} else {
  console.log("Absolute value:", num3);
}

/* 
✅ 9. Triangle Type Checker
Take three angles as input. Check if they form a valid triangle (sum = 180).
Then check the type of triangle:
All angles equal → Equilateral
Any two equal → Isosceles
All different → Scalene
*/
let angle1 = prompt("Enter first angle:");
let angle2 = prompt("Enter second angle:");
let angle3 = prompt("Enter third angle:");

let sum = angle1 + angle2 + angle3;

if (sum === 180) {
  if (angle1 === angle2 && angle2 === angle3) {
    console.log("Equilateral Triangle");
  } else if (angle1 === angle2 || angle2 === angle3 || angle1 === angle3) {
    console.log("Isosceles Triangle");
  } else {
    console.log("Scalene Triangle");
  }
} else {
  console.log("Not a valid triangle");
}

/* 
✅ 10. Smallest of Three Numbers
Take three numbers from the user and print the smallest one using only if and if-else.
*/
let x = prompt("10. Enter first number:");
let y = prompt("10. Enter second number:");
let z = prompt("10. Enter third number:");

if (x <= y && x <= z) {
  console.log("Smallest is: " + x);
} else if (y <= x && y <= z) {
  console.log("Smallest is: " + y);
} else {
  console.log("Smallest is: " + z);
}

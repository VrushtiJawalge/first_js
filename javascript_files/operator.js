/* 1. Swap Two Numbers Without Using a Third Variable
  Use only arithmetic and assignment operators.*/
let a=10;
let b=20;
a=a + b;
b=a - b;
a=a - b;
console.log("a =", a, "b =", b);

// 2. Check If a Number is Even or Odd Use the modulus (%) operator and logical operators, without using if or ternary (? :).
let c=7;
let d=!(c % 2);
console.log("Even:", d);

// 3. Find the Maximum of Three Numbers Use only comparison and logical operators.
let num1=15, num2=25, num3=20;
let num=(num1 > num2 && num1 > num3 && num1) || (num2 > num3 && num2 || num3);
console.log("Max:", num);

// 4. Write a Simple Calculator Function That takes two numbers and an operator (+, -, *, /, %) and returns the result.
function i(e, f, g) {
    return g === '+' ? e + f :
           g === '-' ? e - f :
           g === '*' ? e * f :
           g === '/' ? e / f :
           g === '%' ? e % f :
        "Invalid operator";
}
console.log(i(10, 5, '*'));

// 5. Check if a Character is a Vowel or Consonant  Use logical (||) and comparison (==) operators.
let char = 'e';
let vowel = char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ||
        char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U';
console.log("Vowel:", vowel);

// 6. Calculate Square of a Number Using Assignment Operator Use *= operator only.
let h=6;
h *= h;
console.log("Square:", h);

// 7. Return true Only if Both Inputs Are Non-Zero Numbers Use logical AND (&&) operator.
let i1=4, j=2;
let k= i1 && j;
console.log("Non-zero both:", Boolean(k));

// 8. Check if a Number Lies Between Two Given Numbers Use only < and > operators (no if or function).
let l=15;
let m=10;
let n=20;
let o=(l > m && l < n);
console.log("Is between:", o);

/* 9. Evaluate the Result of Postfix and Prefix Operators
  let w = 5; 
 let x = w++ + ++w;
What are the values of w and x? */
let p=5;
let q=p++ + ++p;
console.log("p =", p, "q =", q);

/*10. Predict the Output Using Logical Operators
    let y = 0; let z = 10;
     let result1 = y && z; let result2 = y || z;
     What are result1 and result2?*/
let r=0;
let s=10;
let result1 = r && s;
let result2 = r || s;
console.log("result1:", result1);
console.log("result2:", result2); 

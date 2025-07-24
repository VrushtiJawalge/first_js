// ✅ 1. Ternary Operator (?:)

// 1. Take a number from the user and check whether it is even or odd using the ternary operator.
let num1 = prompt("Enter a number:");
let result1 = num1 % 2 === 0 ? "Even" : "Odd";
console.log(result1);

// 2. Check whether a user is eligible to vote (age >= 18) using the ternary operator.
let age = prompt("Enter your age:");
let result2 = age >= 18 ? "Eligible to vote" : "Not eligible to vote";
console.log(result2);

// 3. Take two numbers and print the greater one using the ternary operator.
let a = prompt("Enter first number:");
let b = prompt("Enter second number:");
let result3 = a > b ? "a is greater" : "b is greater";
console.log(result3);

// 4. Check if a number is divisible by 5 using the ternary operator.
let num2 = prompt("Enter a number:");
let result4 = num2 % 5 === 0 ? "Divisible by 5" : "Not divisible by 5";
console.log(result4);

// 5. Take a character input and check whether it's a vowel or consonant using ternary logic.
let ch = prompt("Enter a character:");
let result5 = "ch==aeiou" ? "Vowel" : "Consonant";
console.log(result5);

// ✅ 2. Nested if else
// 1. Take a number and check if it's positive, negative, or zero using nested if else.
let n = prompt("Enter a number:");
if (n > 0) {
    console.log("Positive");
} else {
    if (n < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}

// 2. Take three numbers and print the largest among them using nested if else.
let x = prompt("Enter first number:");
let y = prompt("Enter second number:");
let z = prompt("Enter third number:");
if (x > y) {
    if (x > z) {
        console.log(`${x} is largest`);
    } else {
        console.log(`${z} is largest`);
    }
} else {
    if (y > z) {
        console.log(`${y} is largest`);
    } else {
        console.log(`${z} is largest`);
    }
}

// 3. Take a character and check if it is a letter. If yes, check if it's a vowel.
let chr = prompt("Enter a character:");
if ((chr >= 'a' && chr <= 'z') || (chr >= 'A' && chr <= 'Z')) {
    if ("aeiouAEIOU".includes(chr)) {
        console.log("Vowel");
    } else {
        console.log("Consonant");
    }
} else {
    console.log("Not a letter");
}

// 4. Take a number and check if it's even. If yes, check if it's divisible by 4.
let n1 = prompt("Enter a number:");
if (n1 % 2 === 0) {
    if (n1 % 4 === 0) {
        console.log("Even and divisible by 4");
    } else {
        console.log("Even but not divisible by 4");
    }
} else {
    console.log("Not even");
}

// 5. Take marks of 3 subjects and print grade: A (>=90), B (>=75), C (>=50), else Fail.
let m1 = prompt("Enter marks of Subject 1:");
let m2 = prompt("Enter marks of Subject 2:");
let m3 = prompt("Enter marks of Subject 3:");
let avg = (m1 + m2 + m3) / 3;
if (avg >= 90) {
    console.log("Grade: A");
} else {
    if (avg >= 75) {
        console.log("Grade: B");
    } else {
        if (avg >= 50) {
            console.log("Grade: C");
        } else {
            console.log("Fail");
        }
    }
}

// ✅ 3. else if Ladder

// 1. Input a day number (1-7), print the corresponding day name using else if.
let day = prompt("Enter day number (1-7):");
if (day === 1) {
    console.log("Sunday");
} else if (day === 2) {
    console.log("Monday");
} else if (day === 3) {
    console.log("Tuesday");
} else if (day === 4) {
    console.log("Wednesday");
} else if (day === 5) {
    console.log("Thursday");
} else if (day === 6) {
    console.log("Friday");
} else if (day === 7) {
    console.log("Saturday");
} else {
    console.log("Invalid day number");
}

// 2. Input marks (0-100), assign grade: A, B, C, D, or F using else if.
let marks = prompt("Enter marks (0–100):");
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else if (marks >= 40) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// 3. Input month number (1–12), print the number of days in that month.
let month = prompt("Enter month number (1-12):");
if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
    console.log("31 days");
} else if ([4, 6, 9, 11].includes(month)) {
    console.log("30 days");
} else if (month === 2) {
    console.log("28 or 29 days");
} else {
    console.log("Invalid month number");
}

// 4. Input temperature and display message: Very Hot (>=40), Hot (>=30), Warm (>=20), Cold (>=10), Very Cold (<10).
let temp = prompt("Enter temperature:");
if (temp >= 40) {
    console.log("Very Hot");
} else if (temp >= 30) {
    console.log("Hot");
} else if (temp >= 20) {
    console.log("Warm");
} else if (temp >= 10) {
    console.log("Cold");
} else {
    console.log("Very Cold");
}

// 5. Input a number and check: If divisible by 2 and 3, only 2, only 3, or neither.
let num = prompt("Enter a number:");
if (num % 2 === 0 && num % 3 === 0) {
    console.log("Divisible by both 2 and 3");
} else if (num % 2 === 0) {
    console.log("Divisible only by 2");
} else if (num % 3 === 0) {
    console.log("Divisible only by 3");
} else {
    console.log("Not divisible by 2 or 3");
}

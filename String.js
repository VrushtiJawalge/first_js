// 1. Take a string input and convert it to uppercase using a string method.
let str1 = "hello world";
console.log("Uppercase:", str1.toUpperCase());

// 2. Take a string input and convert it to lowercase using a string method.
let str2 = "HELLO WORLD";
console.log("Lowercase:", str2.toLowerCase());

// 3. Ask the user for a string and print its length using a method.
let str3 = prompt(" Enter a string to find length:");
console.log("Length of the string:", str3.length);

// 4. Ask the user to enter a sentence and count how many times the word 'the' appears using a string method.


// 5. Take a string input and check if it ends with a particular word using endswith().
let str5 = "This is a test sentence.";
let endWord = "sentence.";
console.log("Ends with '" + endWord + "':", str5.endsWith(endWord));

// 6. Input a string and check whether it starts with a specific word using startswith().
let str6 = "JavaScript is awesome";
let startWord = "JavaScript";
console.log("Starts with '" + startWord + "':", str6.startsWith(startWord));

// 7. Ask the user to input a string and remove leading and trailing spaces using strip().
let str7 = prompt("Enter a string with spaces before/after:");
console.log("Trimmed string:", str7.trim());

// 8. Take a string and replace all spaces with hyphens (-) using replace().
let str8 = "replace all spaces with hyphens";
console.log("Hyphenated string:", str8.replace(/ /g, "-"));

// 9. Ask the user to input their name and print each character on a new line using a loop.
let str9 = prompt("Enter your name:");
console.log("Characters in your name:");
for (let i = 0; i < str9.length; i++) {
  console.log(str9[i]);
}

// 10. Take a string input and split it into a list of words using split().
let str10 = "Split this sentence into words";
let wordList = str10.split(" ");
console.log("List of words:", wordList);

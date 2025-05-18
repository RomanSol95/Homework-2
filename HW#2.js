//JavaScript String Methods - Tasks 1to16

//Task 1
let str = "Hello world!";
console.log(str.length);
//Task 2
let str = "Hello";
console.log(str.charAt(0));
console.log(str.charAt(4));
//Task 3
let str = "World";
console.log(str[0]);
console.log(str[3]);
//Task 4
let str = "JavaScript";
console.log(str.charAt(str.length - 1));
//Task 5
let str = "banana";
console.log(str.indexOf("a"));
//Task 6
let str = "banana";
console.log(str.lastIndexOf("a"));
//Task 7
let str = "hello world";
console.log(str.indexOf("z"));
//Task 8
let str = "I love JS!";
console.log(str.includes("love"));
console.log(str.includes("Love"));
//Task 9
let str = "Frontend";
console.log(str.startsWith("Front"));
console.log(str.startsWith("End"));
//Task 10
let str = "Backend";
console.log(str.endsWith("end"));
console.log(str.endsWith("Back"));
//Task 11
let str = "apple";
console.log(str.toUpperCase());
//Task 12
let str = "BANANA";
console.log(str.toLowerCase());
//Task 13
let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2);
console.log(str1.concat(" ", str2));
//Task 14
let str = "  spaced string  ";
console.log(str.trim());
//Task 15
let str = "Frontend Developer";
console.log(str.slice(0, 8));
console.log(str.slice(9));
//Task 16
let str = "I love JavaScript";
console.log(str.replace("love", "like"));

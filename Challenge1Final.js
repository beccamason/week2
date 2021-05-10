// //CHALLENGE 1
// let password = prompt("Enter a password:");
// let passwordLength = password.length;

// if (passwordLength < 8) {
//     console.log(`Sorry, that password isn't long enough, it is only ${passwordLength} characters! Please try again`);
// }
// else {
//     console.log(`That's great, thanks! Your password is ${password}`);
// }

// //CHALLENGE 2 
// let num = prompt("Pick a number!"); 

// if (num % 5 === 0 || num % 3 === 0) {
//     console.log("This number is divisible by 3 or 5");
// }
// else { 
//     console.log("This number is not divisible by 3 or 5");
// }

// //CHALLENGE 3 
// let num = prompt("Pick a number!");  

// if (num % 3 === 0 && num % 5 !== 0) {
//     console.log("fizz");
// }
// if (num % 3 !== 0 && num % 5 === 0) {
//     console.log("buzz");
// }
// if (num % 3 === 0 && num % 5 === 0) {
//     console.log("fizz buzz");
// }
// else {
//   console.log(`Sorry, ${num} isn't divisible by 3 or 5`);
// }

// //CHALLENGE 4 
// let num = 1456; 

// let num2 = Array.from(String(num), Number);

// console.log(num2)

// let reverseNum2 = num2.reverse();

// let num3 = Array.from(String(num), Number);

// console.log(reverseNum2);
// console.log(num3);
// let num4 = reverseNum2.join();
// let num5 = num3.join();

// console.log(num4); 
// console.log(num5);

// if (num5 == num4){ 
//   console.log("Yes! That's a palindrome!");
// }
// else {
//   console.log("Nope, that's not a palindrome!");
// }

let num = 20552;
if (num.toString().split("").reverse().join("") === num.toString()) {
    console.log("Yes it's a palindrome");
}
else {
    console.log("nope, it's not a palindrome");
}

// //CHALLENGE 5
// let time = prompt("Pick a time of day in 24 hour clock to see what I'm up to! e.g. 0-24"); 
// let placeOfWork = "The Office";
// let townOfHome = "Cheadle";
// time = parseInt(time);
// switch(time){
//     case 8:
//     case 17:
//         console.log("I'm commuting!")
//         break;
//     case 9:
//     case 10: 
//     case 11: 
//     case 13: 
//     case 14: 
//     case 15: 
//     case 16: 
//         console.log(`I'm at ${placeOfWork}!`);
//         break;
//     case 12: 
//         console.log("I'm at lunch!")
//         break;
//     default:
//         console.log(`I'm at home in ${townOfHome}!`);
 
// }

// //CHALLENGE 6 
// let string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"; 

// let stringArray = Array.from(string); 

// let reverseArray = stringArray.reverse();

// reverseArray = reverseArray.join();

// let i;
// for (i = 0; i < reverseArray.length; i++) {
// if (reverseArray.charAt(i) == "a" || reverseArray.charAt(i) == "e" || reverseArray.charAt(i) == "i" || reverseArray.charAt(i) == "o" || reverseArray.charAt(i) == "u"){
//     console.log(`The first vowel is character ${i / 2} in the reverse array!`);  
//     break;
// }
// }
// let stringLength = parseInt(string.length);
// let vowelPosition = stringLength - (i /2);
// console.log(`Therefore, out of all the characters in the string the index of the last vowel is ${vowelPosition}.`);

// //CHALLENGE 7
// let word = prompt("Enter a word!");
// let wordLength = word.length; 
// wordLength = wordLength - 1;

// if (word.charAt(0) == word.charAt(parseInt(wordLength))) {
//   console.log(true);
// }
// else {
//   console.log(false);
// }

// //CHALLENGE 8
// let num1 = prompt("Enter a number");
// let num2 = prompt("Enter anohter number");
// let sum = parseInt(num1) + parseInt(num2);
// let product = parseInt(num1) * parseInt(num2);

// if (sum % 2 === 0) {
//     console.log(`The sum of those are even so here's the sum: ${sum}`);
// }
// else {
//   console.log(`The sum of those numbers is not even, so here's their product instead: ${product}`);
// }

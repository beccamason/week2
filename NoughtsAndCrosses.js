// let space = ["x", "o", " ", "x", "x", " ", "o", " ", " ", "x"]; 
// let generalLine = "   |   |   ";
// let boundary = "- - - - - - ";

// console.log(generalLine);
// console.log(" " + space[0] + " | " + space[1] + " | " + space[2] +" ");
// console.log(generalLine);
// console.log(boundary)
// console.log(generalLine);
// console.log(" " + space[3] + " | " + space[4] + " | " + space[5] +" ");
// console.log(generalLine);
// console.log(boundary)
// console.log(generalLine);
// console.log(" " + space[6] + " | " + space[7] + " | " + space[8] +" ");
// console.log(generalLine);

// if (space[0] === space[1] && space[0] === space[2]) {
//     console.log("WIN!");
// }
// else {
//     console.log("Top row isn't the same yet!");
// }

// let age = 15;
// let childTicket = 8;
// let adultTicket = 10.95;
// let seniorTicket = 7.5; 

// switch(true){
//     case age < 18:
//         console.log(`Your ticket price is £${childTicket}`);
//         break;
//     case age < 60:
//         console.log(`Your ticket price is £${adultTicket}`);
//         break;
//     case age > 59:
//         console.log(`Your ticket price is £${seniorTicket}`);
//         break;
// }

// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds");
// }

// pressGrindBeans();

// let coffeeIsGrinding = false; 

// const pressGrindBeans = ( ) => {
//     if (coffeeIsGrinding) {
//         console.log("stopping the grind"); 
//         coffeeIsGrinding = false;
//     } else {
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true; 
//     }
// }

// let coffeeIsGrinding = false;
// const pressGrindBeans = () => {
// if (coffeeIsGrinding){
//     console.log("testA");
//     coffeeIsGrinding = false;
// } else {
//     console.log("testB");
//     coffeeIsGrinding = true;
// }
// }

// let coffeeIsGrinding = false;
// const pressGrindBeans = () => {
// if (coffeeIsGrinding){
// } else {
// }
// }


// let accnumber = 50449921;
// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing £${amount} from ${accnum}`);
// }

// cashWithdrawal(300, accnumber);
// cashWithdrawal(30, 50449921);
// cashWithdrawal(200, 50447291);

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// addUp(7,3);
// console.log(addUp);
// console.log(addUp(2,5));


// const multiplyByNineFifths = (celsius) => {
//     return celsius * (9/5); 
// };
// const getFahrenheit = (celsius) => {
//     return multiplyByNineFifths(celsius) + 32;
// };
// console.log(`The temp is ${getFahrenheit(15)} F`);

// function square(number) {
//     return number * number;
// };
// console.log(square(5));



// const coffeeOrder = (size, typeOfDrink) => {
//     return console.log(`Thanks, we'll get started making your ${size} ${typeOfDrink}!`);
// }

// coffeeOrder("large","americano");

// const factorial = (n) => {
//     if ((n===0) || (n===1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(5));

// //Activity 1
// let orderCount = 0;

// const takeOrder = (topping, size) => {
//     console.log(`${size} pizza with ${topping}`);
//     orderCount++; 
//  }
// takeOrder("pineapple", "Large");
// console.log(orderCount);
// takeOrder("pepperoni", "Large");
// console.log(orderCount);

// //Activity 2
// let pin = 5555;
// let balance = 150;
// const cashWithdrawal = (amount, pinInput) => {
//     if (amount <= balance && pin == pinInput) {
//         console.log(`Thank you. Withdrawing £${amount} from you account.`);
//     }
//     else if (amount > balance && pin == pinInput) {
//         console.log(`Sorry, your balance is only £${balance}, so you have insufficient funds to withdraw £${amount}`);
//     }
//     else if (amount <= balance && pin != pinInput) {
//         console.log(`Please enter the correct PIN number`);
//     }
//     else {
//         console.log(`Sorry, your PIN number was incorrect, and you have insufficient funds to withdraw £${amount}`);
//     }
// }
// cashWithdrawal(149, 5545);

// // Activity 3
// let space = ["o", "x", "x", "o", "x", " ", "o", " ", " ", "x"]; 
// let generalLine = "   |   |   ";
// let boundary = "- - - - - - ";

// console.log(generalLine);
// console.log(" " + space[0] + " | " + space[1] + " | " + space[2] +" ");
// console.log(generalLine);
// console.log(boundary)
// console.log(generalLine);
// console.log(" " + space[3] + " | " + space[4] + " | " + space[5] +" ");
// console.log(generalLine);
// console.log(boundary)
// console.log(generalLine);
// console.log(" " + space[6] + " | " + space[7] + " | " + space[8] +" ");
// console.log(generalLine);

// if ((space[0] === space[1] && space[0] === space[2] && space[0] != " ") || (space[0] === space[4] && space[4] === space[8] && space[0] != " ") || (space[0] === space[3] && space[3] === space[6] && space[0] != " ") || (space[2] === space[4] && space[4] === space[6] && space[2] != " ") || (space[6] === space[7] && space[7] === space[8] && space[6] != " ") || (space[2] === space[5] && space[5] === space[8] && space[2] != " ")) {
//     console.log("WIN!");
// }
// else {
//     console.log("You haven't won yet!");
// }

// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - whatever's new"
// ];
// coffeeOrder[1] = "Ann - Vanilla Latte";
// console.log(coffeeOrder);

// let string = ["a", "b", "c"];
// string.splice(2);
// console.log(string);

// let string = ["a", "b", "c"];
// string.shift();
// console.log(string);

//ACTIVITY 1 
// let songs = [
//     "Changes",
//     "Panic", 
//     "Dare"
// ]
// songs.push("Stan");
// songs.push("Done")
// console.log(songs);

//ACTIVITY 2
// let songs = ["Changes", "Panic", "Dare"];
// console.log(`These are my favourite songs: ${songs}`);
// console.log(`Actually, I don't really like ${songs[2]} anymore.`);
// songs.splice(2);
// console.log(`So my favourite songs now are ${songs}`);
// console.log(`And I'm actually not that keen on ${songs[0]} either`);
// songs.shift();
// console.log(`So now all i'm left with is ${songs}`);
// console.log(`But I do really like John Doe`);
// songs.unshift("John Doe");
// console.log(`So now i've got... ${songs}`);
// console.log("If you want to make a copy of my favourites so you can add your own and remove any you don't like, you can use slice.");
// let yourSongs = songs.slice();
// console.log(`Here you go... ${yourSongs}`);

// console.log("That's enough about music.  I've defined my weekly spending into budget1.  Can you help me cut my spending by 50%?")
// let budget1 = [50, 5, 19, 24, 16];
// let newBudget = budget1.map(x => x * 0.5);
// console.log(`Sure.  Here's your new daily budget for Monday-Friday, saving 50%! ${newBudget}! Happy saving.`);


// const takeOrder = (topping = "cheese and tomato") => {
//     console.log(`Pizza: ${topping}`);
// }
// takeOrder();
// takeOrder("Mushroom");
// takeOrder();

// const takeOrder = (topping, base = "cheese and tomato") => {
//     console.log(`You ordered ${topping} on a ${base}`);
// }
// takeOrder("Mushroom");
// takeOrder("Mushroom", "cheese and bbq");
// takeOrder();

// const takeOrder = (topping, base = "cheese and tomato", ...extras) => {
//     console.log(`You ordered ${topping} on a ${base} base with ${extras}`);
// }
// takeOrder("mushroom", base = "cheese and bbq", "peppers", "chillis", "doritoes");
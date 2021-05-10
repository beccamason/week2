//Activity 1 
let films = ["Bad Boys 2", "The Dark Knight", "Pulp Fiction", "Good Will Hunting", "A Clockwork Orange"];
films.push("Captain America: Civil War", "The Grand Budapest Hotel");

for(let i=0; i < films.length; i++) {
    console.log(films[i]);
}

//Activity 2 (rounded because the long real numbers didn't look very nice...)
for(let i=0; i < 6; i++) {
    console.log(Math.round(Math.random() * 49 + 1));
}

//Activity 3

for(let i=9; i > -1; i--) {
    console.log(i);
}

//Activity 4
let films = ["Bad Boys 2", "The Dark Knight", "Pulp Fiction", "Good Will Hunting"];
for(let i=0; i < films.length; i++) {
    console.log(films[i]);
}

const filmCheck = (film) => {
    if (film == films[2]) {
        console.log(`yey it's ${film}`);
    }
    else {
        console.log(`booo, we want ${film}`);
    }
}
filmCheck("Ghostbusters");

//Activity 5
let maths = 0

for(let i=0; i<7; i++) {
    maths = Math.round(Math.random()*29 + 1);
    if (maths % 7 === 0) {
        console.log(`Yep, ${maths} is divisible by 7.`)
    }
    else {
        console.log(`Don't you know your seven times tables? Obviously ${maths} isn't divisible by 7...`)
    }
}

//Activity 6 
let text = "The number is "; 
let i = 0; 
do {
    console.log(text + i);
    i++;
} 
while (i < 5);

// Do/while loops will run through the code once before checking the condition, meaning there will always be an output 

let text2 = "The number is ";
for( let i2 = 5; i2 < 11; i2++) {
    console.log(text2 + i2);
}

// For loops will go through a block of code a specified number of times

let text3 = "The number is ";
let number = 11
while(number < 15) {
    console.log(text + number);
    number++;
}
console.log(text + "15");

//while loops go through a block of code whilst the specified condition is true 

//Activity 7 

let notPrime = [1];
let prime = [];

for(i=2; i<21; i++) {
    for(j=2; j<20; j++) {
        
        if (i % j == 0 && i != j) {
            notPrime.push(i);
            j=20;
        }
        else {
        }
    }
}

for(i=1; i<21; i++) {
    if (notPrime.includes(i, 0)) {
    }
    else {
        prime.push(i);
    }
}
console.log("The prime numbers between 1 and 20 are: " + prime);

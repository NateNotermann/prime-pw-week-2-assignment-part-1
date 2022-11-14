// REQUIRED FEATURES:

console.log("Hello world!");

// 1 - Create a variable called `firstName` and assign it the value of your first name

let firstName = 'Nate '; //let equals variable.  "firstName is name of variable //added space at the end for console when console logging whole name
console.log(firstName);
// 2 - Create a second variable called `lastName` and assign it the value of your last name
let lastName = 'Notermann';
console.log(lastName);
// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)

let fullName = firstName + lastName;


// 4 - Console log the value of `fullName`

console.log(fullName);
console.log("My full name is", fullName);

// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
let luckyNumber = 3;
console.log(luckyNumber);

// 6 - Console log this sentence, adding in the variables you created above: 
// 'My name is (full name), and I think (lucky number) is a winner!'.
// Refer back to the videos if you need help with this one.

console.log("My name is", (fullName + ","), "and I think", luckyNumber, "is a winner!");

// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
let adventurous = true;
console.log(adventurous);

// 8 - Create a variable named `food`, and set its value to a string of your favorite food
let food = ["pizza", "burger", "chicken fingers", "fried chicken", "beer"];
console.log(food);


// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
let pets = 1;
console.log(pets);

// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
let friendsPets = 2;
console.log(friendsPets);


// 11 - Add two pets to your `pets` variable
console.log("the total number of pets I have was", (pets + ".")); // not sure if there is a better or more elegant way to add punctuation after a variable
pets = pets + 2;
console.log(pets);
console.log("But now that I added 2 I have", pets, "which is TOO many.");


// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const allowedPets = 1;
console.log(allowedPets);


// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!", 
// if it's not true, console log "How about we stay home?"

// adventurous = false; //testing the false option. it worked
// if ( adventurous == true ) {
//     console.log( 'Adventures are great');
// }
//     else {
//         console.log( "How about we stay home?" );
//     }  // I realized after writing this, i only had half of what the questions was asking. Gonn leave it here to show why.


// adventurous = false; // again just testing the false version
if (adventurous == true) {
    console.log('Adventures are great!');
} else if (adventurous == false) {
    console.log("How about we stay home?");
}





// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"
// luckyNumber = 2; //testing if "I can have more pets" condition works when lucky number is 2. it works!
// luckyNumber = 2; //testing if code if lucky number is 2. it works
if (luckyNumber == 2 && adventurous == true) { //it is a "compound" conditional becasue it requires 2 coniditons be equal to a value.
    console.log("Roll the dice!");
}



// 15 - Write a conditional that console logs "I can have more pets!" 
// if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.

console.log(pets);
// (pets equals 3 right now, tests the greater than condition. It works.
// pets = 0; //testing less than condition, it works
// pets = 1; //testing equal to condition. works 

if (pets < allowedPets) {
    console.log('I can have more Pets!');
} else if (pets == allowedPets) {
    console.log('I have enough pets');
} else {
    console.log('I have too many pets!');
}


// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios. 
// console.log `mostPets` after the conditional has run.


const pets16 = 4;
const friendsPets16 = 3;

let mostPets16;
console.log('most pets right now is:', mostPets16);

if (pets16 > friendsPets16) {
    //if pets is greater than friends pets, 
    mostPets16 = pets;
    console.log('pets 16 is greater');
    //then we want to assign pets to mostPets
} else if (friendsPets16 > pets16) { // if firends pets is greater
    mostPets16 = friendsPets16;
    console.log('friendsPets 16 is greater');
    //then assign friendsPet to pets
} else if (pets16 === friendsPets16) {
    mostPets16 = pets16;
    l
}

console.log(mostPets16);
console.log(friendsPets);
console.log(pets);

console.log('test', mostPets16);


// -- Switch Statement: -- //
const pet = "mark";
switch (pet) {
    case "bob":
        console.log("My pets name is Bob");
        break;
    case "Erick":
        console.log("My pets name is Erick");
        break;
    case "Jacob":
        console.log("My pets name is Jacob");
        break;
    default:
        console.log("My pet has no name");
        break;
}

// -- Multiple Cases for one operation -- //
const state = "MN";

switch (state) {
    case "MN":
    case "WI":
    case "IL":
        console.log("this stats is in the midwest");
        break;
    case "NY":
    case "NJ":
    case "NH":
        console.log("the state is in the east coast");
        break;
    case "CA":
    case "NM":
    case "WA":
        console.log("the state is in the west coast");
        break;
    default:
        console.log("the state is", state);
        break;
}

// let mostPets = 1       // might come back to this

// if ( pets < friendsPets ) {
//     mostPets = pets;

// }
// console.log( mostPets );


// 17 - Write a *switch* statement that logs:
//      "First is the worst" if your lucky number is 1
//      "Second is the best" if your lucky number is 2
//      "Third is the one with the polka dot dress" if your lucky number is 3
//      Otherwise, log "Luck is what happens when preparation meets opportunity"
//      You'll need to research how to use switch statements!

// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!
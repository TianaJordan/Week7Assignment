// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    // a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
        // Do not use numbers to reference the last element, find it programmatically.
        // ages[7] - ages[0] is not allowed!
    // b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
    // c. Use a loop to iterate through the array and calculate the average age.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log('Question 1:', 'Ages:', ages);

let subtractAge = ages[ages.length-1] - ages[0];
console.log('Subtract values:', subtractAge);

ages.push(29);
console.log('Ages after adding a value:', ages)
console.log('Subtract new values:', ages[ages.length-1] - [ages[0]]);

for (let i = 0; i < ages.length; i++) {
    averageAges = (ages[i] / ages.length);
} 
console.log('Average age:', averageAges);``

// 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
    // a. Use a loop to iterate through the array and calculate the average number of letters per name.
    // b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
totalChars = 0;
console.log('Question 2:', 'Names:', names);

for (let i = 0; i < names.length; i++) {
    totalChars += (names[i].length);
    console.log('Index:', i, names[i], 'Total characters:',totalChars);
}
let averageChars = (totalChars / names.length);
console.log('Average characters:', averageChars);

// 3. How do you access the last element of any array?
console.log('Question 3:', 'The last element in an array is located at arrayName.length-1');

// 4. How do you access the first element of any array?
console.log('Question 4:', 'The first element in an array is located at arrayName[0]');

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
    // For example:
    // let names = ["Kelly", "Sam", "Kate"];    // starting with this array
    // let nameLengths = [5, 3, 4];             // create a new array

console.log('Question 5:')

let nameLengths = [];

for (i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
    console.log(nameLengths);
}

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

console.log('Question 6:');

let sumOfElements = 0;

for (i = 0; i < nameLengths.length; i++) {
    sumOfElements += nameLengths[i];
    console.log('Index:', i, 'Total characters:', sumOfElements);
}

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

function concatWords(word, n) {
    let concat = (word.repeat(n));
    console.log('Question 7:', concat)
}
concatWords('Hello', 3);

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

function fullName(firstName, lastName) {
    let fullName = (firstName + ' ' + lastName);
    console.log('Question 8:', fullName);
}
fullName('Tiana', 'Jordan');

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let numbers = [20, 4, 60, 30];
console.log('Question 9:', numbers);

function sumNumbersArray(array) {
    let total = 0;
    for (i = 0; i < array.length; i++) {
        total += array[i];
        console.log('Index:', i, 'Total:', total);
    }
    if (total > 100) {
        console.log('True');
    } else {
        console.log('False');
    }
}
sumNumbersArray(numbers);

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

let numbers2 = [5, 10, 15, 20];
console.log('Question 10:', numbers2);

function averageNumbersArray(array) {
    let total = 0;
    for (i = 0; i < array.length; i++) {
        total += array[i];
        console.log('Index:', i, 'Total:', total); 
    }
    let numberAverage = (total / 2);
    console.log('Average:', numberAverage);
}
averageNumbersArray(numbers2);

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

let numbers3 = [8, 7, 6, 5];
let numbers4 = [4, 3, 2, 1];
console.log('Question 11:', numbers3, numbers4);

function averageTwoArrays(array1, array2) {
    let total1 = 0;
    for (i = 0; i < array1.length; i++) {
        total1 += array1[i];
        console.log('Array 1 Index:', i, 'Total:', total1); 
    }
    let total2 = 0;
    for (i = 0; i < array2.length; i++) {
        total2 += array2[i];
        console.log('Array 2 Index:', i, 'Total:', total2); 
    }
    let average1 = (total1 / array1.length);
    let average2 = (total2 / array2.length);
    console.log('Average 1:', average1, 'Average 2:', average2);

    if (average1 > average2) {
    console.log('True');
    } else {
    console.log('False');
    }
}
averageTwoArrays(numbers3, numbers4);

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside == true && moneyInPocket > 10.50) {
        console.log('Question 12:', 'True');
    } else {
        console.log('Question 12:', 'I need more money.');
    }
}
willBuyDrink(true, 9);

// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

//I created a function called ourLunchOrder that takes two arrays, order1 and order2. It adds the sum of both arrays and if the total is less than 40, it adds an additional item to order2.


let order1 = [13.69, 3.50, 1.50];
let order2 = [14.99, 3.50];
console.log('Question 13:', 'Order 1:', order1, 'Order 2:', order2);

function ourLunchOrder(array1, array2) {
    let total1 = 0;
    for (i = 0; i < array1.length; i++) {
        total1 += array1[i];
        console.log('Order 1 Index:', i, 'Item Total:', total1); 
    }
    let total2 = 0;
    for (i = 0; i < array2.length; i++) {
        total2 += array2[i];
        console.log('Order 2 Index:', i, 'Item Total:', total2); 
    }
    let mealTotal = (total1 + total2);
    console.log('Meal total:', mealTotal);

    if (mealTotal < 40) {
    order2.push(1.50);
    console.log('I can afford extra sauce.', 'Order 2:', order2)
    } else {
    console.log('That completes the order.');
    }
}
ourLunchOrder(order1, order2);

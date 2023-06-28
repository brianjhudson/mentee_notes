// 1. Loop through an array of numbers and log each number.



// 2. Loop thorugh an object and log the properties and values.



// 3. Loop from 0 to 9 and log each number.



// 4. Loop from 1 to 9, skipping the even numbers, and log each odd number.



// 5. Create a user object with an age property, and update the age property by adding 1.



// 6. Create an array of strings for various food names, including 'spaghetti'. Loop through the array and if the food is 'spaghetti', log it.



// 7. Create a function that takes in two numbers, adds them together, and returns the sum.



// 8. Create a function that takes in two numbers and returns the smaller of the two numbers.



// 9. Create a function that takes in an array of numbers and returns the smallest number in the array.



/** MORE STRUCTURE */

// 1. Loop through an array of numbers and log each number.
const nums = [1, 2, 3, 4, 5];
for (/** Choose loop type here */) {
    console.log() // Log number
}


// 2. Loop thorugh an object and log the properties and values.
const subject = {
    id: 'abcdef',
    title: 'History',
    courseNum: 101,
    isElective: false
}
for (/** Choose loop type here */) {
    console.log() // Log property and value
}


// 3. Loop from 0 to 9 and log each number.
for (/** Use a manual for loop here */) {
    console.log() // Log number
}


// 4. Loop from 1 to 9, skipping the even numbers, and log each odd number.
for (/** Use same type as #3 above but alter the statements  */) {
    console.log() // Log number
}


// 5. Create a user object with an age property, and update the age property by adding 1.
const user = {
    id: 1,
    age: 42
};
// Access age on user with bracket or dot notation and add one


// 6. Create an array of strings for various food names, including 'spaghetti'. Loop through the array and if the food is 'spaghetti', log it.
const foods = ['paneer', 'basmati', 'hamburgers', 'gnocchi', 'spaghetti', 'peanuts'];
for ( /** Choose loop type for arrays */) {
    if (/** Check food type */) {
        console.log() // Log 'spaghetti'
    }
}


// 7. Create a function that takes in two numbers, adds them together, and returns the sum.
const addNums = (/** Declare parameters here */) => {
    // Declare a value and assign the sum of the parameters to it.
    // Return the value.
}


// 8. Create a function that takes in two numbers and returns the smaller of the two numbers.
const getSmaller = (/** Declare parameters here */) => {
    if (/** Compare parameters here */) {
        // Return one parameter
    } else {
        // Return other parameter
    }
}


// 9. Create a function that takes in an array of numbers and returns the smallest number in the array.
const getSmallest = (/** Accept array parameter */) => {
    let smallest; // Declare placeholder for smallest number
    for (/** Choose best loop for array */) {
        // Look at each number. If it is smaller than smallest, or if smallest is undefined, assign it to smallest.
    }
    // Return smallest
}

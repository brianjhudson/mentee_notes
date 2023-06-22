// Create utility functions for common tasks
// Hi Maria! Can you see this?

// TODO: Create a function to accept an array with duplicates and return only the unique values
/**
 * Filters duplicate values in an array and returns only unique values
 * @param {Array} arr
 * @returns {Array} unique values only
 */
//create a variable to store duplicates
//loop through the array
//if statement to determine if there are duplicates return

const duplicates = (array) => {
  let uniqueValues = "";

  for (let name of array) {
    if (uniqueValues.indexOf(name) === -1) {
      // bigString.indexOf(littleString) === -1
      uniqueValues += `${name}, `;
    }
  }
  return uniqueValues;
};
console.log(duplicates(["mike", "lisa", "mike", "bob", "kat"]));

console.log("Testing string methods", "mikelisamike".indexOf("maria"));

const filterDuplicates = (arr) => {
  const uniqueValues = [];

  for (let name of arr) {
    if (!uniqueValues.find((val) => name === val)) {
      uniqueValues.push(name);
    }
  }
  return uniqueValues;
};

const filterDuplicatesWithSets = (arr) => {
  const set = new Set();
  for (let name of arr) {
    set.add(name);
  }
  return Array.from(set);
};

console.log(
  "2nd run",
  filterDuplicates(["mike", "lisa", "mike", "bob", "kat"])
);
console.log(
  "With sets",
  filterDuplicatesWithSets(["mike", "lisa", "mike", "bob", "kat"])
);
// TODO: Invoke your function to test it

// TODO: Create a function to sort an array of objects by a property name

/**
 * Sorts an array of objects on a property name
 * @param {Array} arr - An array of objects
 * @param {string} propertyName
 * @returns {Array} Sorted array
 */

// TODO: Invoke your function to test it
const data = [
  {
    id: 1,
    name: "Brian",
    age: 43,
  },
  {
    id: 2,
    name: "Arav",
    age: 11,
  },
  {
    id: 3,
    name: "Vikram",
    age: 8,
  },
];

// Here we reviewed Array.prototype methods
// For each
data.forEach((element, index, arr) => {
  // console.log('Element', element)
  ///console.log('Index', index)
  // console.log('Arr', arr)
  // For side effects only, not creating a new array
});

// Find
const firstFound = data.find((element, index, arr) => element.name === "Brian");
//console.log('Found', firstFound)

// Map
const newArr = data.map((element, index, arr) => {
  //console.log('Element', element)
  //console.log('Index', index)
  //console.log('Arr', arr)
  return {
    name: element.name.toUpperCase(),
    // age: element.age,
    id: Math.random(),
  };
});

// START: Maria's solution
const sortBy = (data, propertyName) => {
  // See if I can return just the values for that property
  // sortBy(data, 'age') => [43, 8, 11]
  // da // sortBy(data, 'name') => ['Brian', 'Vikram', 'Arav']
  const newArr = [];
  for (let el of data) {
    newArr.push(el[propertyName]);
  }
  newArr.sort((currentEl, nextEl) => {
    // -1, 1, 0
    if (currentEl < nextEl) {
      // currentEl goes first
      return -1;
    }
    if (currentEl > nextEl) {
      // currentEl goes last
      return 1;
    }
    // currentEl === nextEl => keep order the same
    return 0;
  });
  // Loop through newArr and match up the original data
  const sortedArr = [];
  for (let objData of newArr) {
    // Find the object in the array called data that matches this val
    let foundData = data.find((obj) => objData === obj[propertyName]);
    sortedArr.push(foundData);
  }
  return sortedArr;

  // Return an array
};
// END: Maria's solution
// Note: The one problem here is if the array had two users with the same name, age, etc. Then our .find would only return the first one found

// console.log('Invoking my sorting function', sortBy(data, 'id'))
//console.log('Invoking my sorting function', sortBy(data, 'age' ))

// Review of .find and its return value
// .find with array of numbers
const nums = [1, 2, 3, 4];
const found = nums.find((num) => num === 2);
// console.log('Found num', found);

// .find with array of objects (users)
// The data
const users = [
  { name: "Brian" },
  { name: "Maria" },
  { name: "Tony" },
  { name: "Jonathan" },
];
// A place to hold the found users
const foundUsers = [];
// Assignment of one found user
const maria = users.find((user) => user.name === "Maria");
// console.log('Found Maria', maria)
// Pushing the found user to array
foundUsers.push(maria);
// Repeat for second found user (as in our loop in the function)
const brian = users.find((user) => user.name === "Brian");
// console.log('Found brian', brian)
foundUsers.push(brian);
// console.log('Found users', foundUsers)

/**
 * Same as your solution above, but with one change -- using .map at end
 */
const sortByWithMap = (data, propertyName) => {
  const values = [];
  for (let el of data) {
    values.push(el[propertyName]);
  }
  values.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  return values.map((value) => {
    const foundDatum = data.find((datum) => datum[propertyName] === value);
    return foundDatum;
  });
};

// console.log('Sort with Map', sortByWithMap(data, 'name'));

const sortByShortened = (data, propertyName) => {
  // First copy safeguards the array, but not the inner copies (i.e. shallow)
  // const copy = [...data]; // could have used slice
  // Second copy is deep, will copy the objects
  const copy = data.map((obj) => Object.assign({}, obj));
  // copy[0].name = 'Maria'
  // Better solution is to use recursion
  return copy.sort((a, b) => {
    if (a[propertyName] < b[propertyName]) {
      return -1;
    }
    if (a[propertyName] > b[propertyName]) {
      return 1;
    }
    return 0;
  });
};

const sorted = sortByShortened(data, "age");
console.log("Sorted", sorted);
console.log("Original", data);
// console.log('Sort by shortened', sortByShortened(data, 'age'));

// TODO: Create a function to redact PII (just a name in this case)
/**
 * Redacts an input string to remove names
 * @param {string} text
 * @param {string} name
 * @returns {string} The text with the name replaced with ****
 */

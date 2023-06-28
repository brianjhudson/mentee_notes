// 1. Declare variables for first, middle, and last names
var firstName = 'Nicole'
var middleName = 'Lan'
var lastName = 'Nguyen'


// 2. Concatenate the names and store them in a variable called fullName.
var fullName = firstName + ' ' + middleName + ' ' + lastName;
// OR
var fullNameES6 = `firstName: ${firstName}, middleName: ${middleName}, lastName: ${lastName}`;


// 3. Write a function that accepts first, middle, and last names and returns a full name.
// console.log('Full Name', fullName); //I do n0t undertsnad this one. Can we review this?


const formatName = (firstName, middleName, lastName) => {
  // use parameters to format the full name
  const fullName = firstName + ' ' + middleName + ' ' + lastName + ' ';

  // return the full name
  return fullName;
}


// console.log('Format full name', formatName('Brian', 'Jason', 'Hudson'))
// console.log('Format full name', formatName(firstName, middleName, lastName))
// 4. Create an object that represents a house for sale. Give it an address, a number of bedrooms, and a sale price.
const house = {
  address:  'Indigo St',
  bedRooms: 4,
  salePrice: 450_000,
}


// 5. Console log just the price of the home.
// Using dot or bracket notation to get values
console.log('House salePrice with dot notation', house.salePrice);
console.log('House salePrice with bracket notation', house['salePrice']);



// 6. Add a boolean property to the house object to represent 
// whether or not it is in a flood zone.
// Option 1: Not the best
// const houseWithFloodZone = {
//   address: house.address,
//   bedRooms: house.bedRooms,
//   salePrice: house.salePrice,
//   isInFloodZone: true
// }


// Option 2: Without reassigning
// Using dot or bracket notation to set values
// console.log('House before flood zone', house)
house.isInFloodZone = false;
// console.log('House after flood zone', house)

house.bedRooms = 5;
house.doesNotExist = false;
house['newProperty'] = false;
// console.log('House after many new properties', house)
// 7. Add $50k to the price.

// house.salePrice = house.salePrice + 50_000
house.salePrice += 50_000
console.log('New sale price', house.salePrice)

// 8. Loop through the properties of the house and log each one. 


// 9. Create another house object with the same properties as the first.
var house2 = {
  address:  ' Fenchurch Dr',
  bedRooms: 5,
  salePrice: 430_000,
}

// 10. Create an array to store both houses.
var houses = [house, house2]
var users2 = [{}, {}]

// 11. Loop through the array and log the price of each house.

// Looping through arrays
// Getting properties off objects (bracket and dot notations)

// Original for loop

// for (let i = 0; i < houses.length; i++) {
//   console.log(i)
//   console.log(houses[i])
// }

// For in -- loops through properties in an object
// for (const property in house) {
//   console.log(property, house[property])
// }

// For of -- loops through an array
for (const house of houses) {
  // console.log('House price', house.salePrice)
}

// 12. Loop through the array and log each property of each house. (That's two loops, one nested in the other.)
for (let i = 0; i < houses.length; i++) {
  console.log('House', houses[i]);
  for (const property in houses[i]) {
    console.log('House property', property, houses[i][property])
    // House is not defined
  }
}
for (const house of houses) {
  for (const property in house) {
    console.log('House property 2', property, house[property])
  }
}

// 13. Write a function that takes in a object and a property name and returns the value for that property on the house object.

const getHousePropertyValue = (houseObj, propertyName) => {
  const value = houseObj[propertyName];
  console.log('Value', value);
  return value;
}

// console.log('Getting getHousePropertyValue Definition', getHousePropertyValue)
// console.log('Calling getHousePropertyValue without arguments', getHousePropertyValue())
// console.log('Calling getHousePropertyValue with one argument', getHousePropertyValue({}))
// console.log('Calling getHousePropertyValue with two arguments', getHousePropertyValue({name: 'Hello, function'}, 'name'))
console.log('Calling getHousePropertyValue with salePrice', getHousePropertyValue(house2, 'salePrice'))
console.log('Calling getHousePropertyValue with bedRooms', getHousePropertyValue(house2, 'bedRooms'));


// Three types of loops:
for (let i = 0; i < 10; i++) {} // Generic
for (const property in {name: 'Hello'}) {} // Objects
for (const element of [1, 2, 3]) {} // Arrays

// var
// let
// const

// Two ways to write function definitions
function doSomething() {
  
}

const doSomethingElse = () => {
  
}

// Two ways to access properties on an object
const user = {
  name: 'Brian'
}

console.log('Name', user.name);
console.log('Name', user['name']);

// How do you access an element of an array
const users = [{id: 1}, {id: 2}];
console.log('User 2', users[1])

// How do you get the id of the second user in the array
console.log('User 2 id', users[1].id)


// Array methods
// Object methods

// String methods
/** REVIEW */

// Use .map to create an array of users from an array of names
const names = ["Brian", "Maria", "Vikram", "Manas"];
// [{name: "Brian"}, {name: "Vikram"}]

const name = names.map((element, index) => {
  return {
    id: index,
    name: element,
    score: 0
  }
})
//console.log('Name', name);

/** FILTER and FIND */
// Use .filter to return an array without blanks
const cities = ["Dallas", "Houston", "Los Angeles", "", "Mexico City", "NYC", ""];

const filteredCities = cities.filter(city => {
  if(city === "") {
    return false
  } else {
    return true
  }
})

console.log(filteredCities)

const filterCitiesShortened = cities.filter(city => city);


// Use .find to return L.A. from the list of cities;
const losAngeles = cities.find(el => el === 'Los Angeles')
console.log(losAngeles)



/** REDUCE */

// const nums = [1,2,3];
// const reduced = nums.reduce( (returnVal, currentElement) => {

//   return 1
// }, 0 )
// Use .reduce to sum the integers in an array
const ints = [1, 2, 3, 4, 5, 6, 7];
const sum = ints.reduce( (totalSum, currentElement) => {
  return totalSum + currentElement
}, 0)
console.log(sum)

const studentsWithScores = [
  {name: "Brian", score: 69},
  {name: "Arav", score: 71},
  {name: "Vikram", score: 88},
  {name: "Manas", score: 99},
]

const summaryData = {
  numberOfPassingStudents: 0,
  numberOfFailingStudents: 0
};

const updatedData = studentsWithScores.reduce( (runningTotals, currentElement) => {
  if(currentElement.score < 70) {
    runningTotals.numberOfFailingStudents++
  } else {
    runningTotals.numberOfPassingStudents++
  }
  return runningTotals
}, summaryData)
console.log(updatedData)


// The Array.prototype methods are not necessary!
// They are convenient
// They make our code functional, not imperative

// const filteredArr = [];
// for (const i = 0; i < arr.length; i++) {
//   if () {
//     filteredArr.push()
//   }
// }

// Use .reduce to tally the count of failing and passing students from an array of objects with student name and test score





/** STRING PROBLEMS */

// Write a function that accepts a text and returns the average word length in a text.
const text = "I Love JS"
const findWordCount = (text) => {
  const arrOfWords = text.split(' ')
  const wordLength = arrOfWords.length
  console.log(wordLength)
  return wordLength;
  //return 0;
}
console.log(findWordCount(text))

const reverseText = (text) => {
const arrOfWord = text.split('')
const reversedString = arrOfWord.reverse().join('')
  
  return reversedString
}
console.log('Reversed', reverseText('backwards')) // => 'sdrawkcab'

// Write a function that accepts a text and capitalizes every word in a text.



// Write a function that accepts a text and removes all white space from a text.





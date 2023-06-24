/** REVIEW */
console.log('***REVIEW****')
// Review from last time

// Two types of for loops for arrays
// One: Plain-old for loop
// for (let i = 0; i < arr.length; i++) {
//   const el = arr[i]
// }

// for (let el of arr) {
//  // I don't know the index anymore  
// }

function formatPhoneWithMap(digits) {
  const nums = digits.split('').map((digit, index, array ) => {
    if (index === 0) {
      return '(' + digit;
    }
    if (index === 3) {
      return ') ' + digit;
    }
    if (index === 6) {
      return ' - ' + digit;
    }
    return digit;
  })
  
  return nums.join('');  
}
console.log(`
  Playing with map: ${formatPhoneWithMap('1234567890')}
`);

// Another example of early returns
const formatPhoneWithValidation = (digits) => {
  // Validate before proceeding
  if (!digits) {
    return 'You must pass a phone number'
  }
  if (typeof digits !== 'string') {
    return 'You must pass a string'
  }
  if (!digits.length) {
    return 'You must include numbers'
  }
  // Proceed with my logic
}

/** PRACTICE */
console.log('***PRACTICE****')
const arrOfNums = [1, 2, 3, 4, 5];

// Add one to each element in the array

const onePlusArrOfNums = arrOfNums.map(num => num + 1)
console.log('One plus array: ', onePlusArrOfNums)

// Add index to each element in the array
const indexPlusArrOfNums = arrOfNums.map((num, index) => num + index)

// Long form
const indexPlusArrOfNumsLong = arrOfNums.map((num, index) => {
  // Perform logic here
  return num + index;
})
console.log('Index plus array: ', indexPlusArrOfNums)

// If the index of the element is even, add 1; otherwise, leave it alone;
const manipulatedEvenArr = arrOfNums.map((num , index) => {
  if (index % 2 === 0 ) {
    return num + 1
  } else {
    return num
  }
})
console.log('Brian\'s weird even problem:' , manipulatedEvenArr)

/** 
 * Write a function that encodes an id number string into letters. 
 * I will pass you a string that contains digits.
 * For each digit, you will return a different character
 * Example: encode('12345') => 'abcde'
 *
 * @param {string} digits - a string of digits
 * @returns {string} - A corresponding encoded string of characters
*/

// Steps
// create a variable to store array of chars
// .split() the string and turn it into an array
//loop throught the array
// .push()

console.log('String Concatenation: ' + 'Hi')
console.log('Trouble with string concatenation', 2 + '1')
console.log('Array concatenation', [1,2,3], [4,5,6], [1,2,3].concat([4,5,6]))

const encode = (digits) => {
const arrOfLetters = []
let strngOfDigits = digits.split('')

  for(let num of strngOfDigits) {
    if(num === '1') {
      arrOfLetters.push('a')
    }
    if(num === '2') {
      arrOfLetters.push('b')
    }
    if(num === '3') {
      arrOfLetters.push('c')
    }
    if(num === '4') {
      arrOfLetters.push('d')
    }
    if(num === '5') {
      arrOfLetters.push('e')
    }
  }
  
  return arrOfLetters.join('');
}

const digits = '12345'
console.log(`
  Digits: ${digits}
  Encoded: ${encode(digits)}
`)

/** HOMEWORK! */

console.log('***HOMEWORK***')
// How would you implement the same solution with .map
// How could you convert the if statements to a switch statement
// How could you eliminate the if statements with String.fromCharCode(num)

console.log('String.fromCharCode(65)', String.fromCharCode(65));
console.log('String.fromCharCode(65)', String.fromCharCode(65 + 1));
console.log('String.fromCharCode(65)', String.fromCharCode(65 + 2));
console.log('String.fromCharCode(65)', String.fromCharCode(65 + 40));

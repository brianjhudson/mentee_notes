/** REVIEW FROM LAST TIME */

// What arguments does the Array.prototype.map method pass to your callback function?

const newArray = [1, 2, 3].map( (element, index, array) => {
    // console.log('Element', element)
    // console.log('Index', index)
    // console.log('Array', array)
    return element + 1;
  } )
  // console.log('New array', newArray)
  
  
  // When should you use .map and when should you use .forEach?
  const example = [1, 2, 3]
  example.forEach( (element, index, array) => {
    // console.log('Element', element)
    // console.log('Index', index)
    // console.log('Array', array)
  } );
  // console.log('New example', newExample)
  
  
  let sum = 0;
  example.forEach( (element, index, array) => {
    sum += element 
  } )
  
  console.log('Sum', sum)
  
  /** HOMEWORK FROM LAST TIME */
  
  /** 
   * Write a function that encodes an id number string into letters. 
   * I will pass you a string that contains digits.
   * For each digit, you will return a different character
   * Example: encode('12345') => 'abcde'
   *
   * @param {string} digits - a string of digits
   * @returns {string} - A corresponding encoded string of characters
  */
  
  const encode1 = (digits1) => {
    const numsToLetters = []
    let arrayOfDigits = digits1.split('')
    // ['0', '1', '2', '3', '4', '5']
    let conversionOfLetters = arrayOfDigits.map((num) => {
      switch(num) {
        case '0':
        case '1':
          return 'a';
        case '2':
          return 'b';
        case '3':
          return 'c';
        case '4':
          return 'd';
        case '5':
          return 'e';
        default:
          return '-';
      }
    })
    return conversionOfLetters.join('')
  }
  const digits1 = '12345'
  console.log(`
    Digits1: ${digits1}
    Encoded1: ${encode1(digits1)}
  `)
  
  /** USING A DICTIONARY TO SOLVE */
  const encode2 = (digits1) => {
    const dictionary = {
      '1': 'a',
      '2': 'b',
      '3': 'c',
      '4': 'd',
      '5': 'e'
    };
    const dictionaryWithMap = new Map([
      ['1', 'a'],
      ['2', 'b'],
      ['3', 'c'],
      ['4', 'd'],
      ['5', 'e']
  ]);
    const numsToLetters = []
    let arrayOfDigits = digits1.split('')
    let conversionOfLetters = arrayOfDigits.map((num) => {
      // const codedValue = dictionary[num];
      const codedValue = dictionaryWithMap.get(num);
      return codedValue;
    })
    return conversionOfLetters.join('')
  }
  const digits2 = '12345'
  console.log(`
    Digits2: ${digits2}
    Encoded2: ${encode2(digits2)}
  `)
  
  
  
  // How would you implement the same solution with .map
  // How could you convert the if statements to a switch statement
  // How could you eliminate the if statements with String.fromCharCode(num)
  
  const str = 'Hi, Maria';
  console.log(str.charCodeAt(0))
  console.log(String.fromCharCode(str.charCodeAt(1)))
  
  const encode3 = (digits) => {
    const digitsArr = digits.split('')
    const encoded = digitsArr.map(digit => {
      // Use ASCII character code to create the encoded arr
      return String.fromCharCode(96 + parseInt(digit))
      
    })
    
  
    return encoded.join('');
  }
  
  console.log('Encoded with ASCII', encode3('12345'))
  console.log('a'.charCodeAt(0))
  console.log(String.fromCharCode(97))
  
  const name = 'Maria'
  const lastName = new String('Delacruz');
  
  const car = {
    make: 'Toyota',
    model: 'Camry'
  }
  
  const keys = Object.keys(car)
  console.log(keys)
  
  const isPropertyThere = car.hasOwnProperty('year');
  console.log('Is it there', isPropertyThere)
  
  const anotherWay = Object.prototype.hasOwnProperty.call(car, 'make')
  console.log('Is it there again', anotherWay)
  
  
  
  /** NEW METHOD */
  
  // .reduce
  
  const arr = [1, 2, 3]
  
  // Copy .map
  // [1, 2, 3]
  const copy = arr.reduce((returnVal, currElement) => {
    // First iteration => returnVal = [1, 2], currElement = 3
    returnVal.push(currElement);
    return returnVal;
  }, []) 
  
  console.log('Copy', copy)
  
  const scores = [1000, 2000, 1500, 1000];
  const totalScore = scores.reduce((returnVal, currElement) => {
    returnVal += currElement;
    return returnVal;
  }, 0)
  
  console.log('Total score', totalScore);
  
  const users = [{name: 'Brian', score: 0}, {name: 'Maria', score: 1}]
  
  const {numberOfPassingStudents: 0, numberOfFailingStudents: 0}
  
  
  /** PRACTICE WITH REDUCE */
  
  // Use .reduce to add elements in an array.
  
  // Use .reduce to map elements in an array to another array.
  
  // Use .reduce to total the values of one property in an array of objects
  
  
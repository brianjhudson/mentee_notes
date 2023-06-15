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

const duplicates = array => {
    let uniqueValues = '';
    
    for(let name of array) {
      if(uniqueValues.indexOf(name) === -1) {
        // bigString.indexOf(littleString) === -1
       uniqueValues += `${name}, `;
      }
    }
    return uniqueValues;
  }
  console.log(duplicates(['mike', 'lisa', 'mike', 'bob', 'kat']))
  
  console.log( 'Testing string methods', 'mikelisamike'.indexOf('maria'))
  
  const filterDuplicates = ( arr ) => {
    const uniqueValues = [];
  
    for ( let name of arr ) {
      if ( !uniqueValues.find( val => name === val ) ) {
        uniqueValues.push( name );
      }
    }
    return uniqueValues;
  }
  
  const filterDuplicatesWithSets = ( arr ) => {
    const set = new Set();
    for ( let name of arr) {
      set.add(name)
    }
    return Array.from( set );
  }
  
  console.log('2nd run', filterDuplicates(['mike', 'lisa', 'mike', 'bob', 'kat']))
  console.log('With sets', filterDuplicatesWithSets(['mike', 'lisa', 'mike', 'bob', 'kat']))
  // TODO: Invoke your function to test it
  
  
  // TODO: Create a function to sort an array of objects by a property name
  
  
  /** 
   * Sorts an array of objects on a property name
   * @param {Array} arr - An array of objects
   * @param {string} propertyName
   * @returns {Array} Sorted array
  */

  const sortBy = (arr, propertyName) => undefined;
  
  
  // TODO: Invoke your function to test it
  const data = [
    {
      id: 1
      , name: 'Brian'
      , age: 43
    },
    {
      id: 2
      , name: 'Arav'
      , age: 11
    },
    {
      id: 3
      , name: 'Vikram'
      , age: 8
    }
  ]
  console.log('Invoking my sorting function', sortBy(data, 'name'))
  
  // TODO: Create a function to redact PII (just a name in this case)
  /** 
   * Redacts an input string to remove names
   * @param {string} text
   * @param {string} name
   * @returns {string}
  */
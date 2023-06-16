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
  ];
  
  // Here we reviewed Array.prototype methods
  // For each
  data.forEach( (element, index, arr) => {
    // console.log('Element', element)
     ///console.log('Index', index)
    // console.log('Arr', arr)
     // For side effects only, not creating a new array
  } )
  
  // Find
  const firstFound = data.find( (element, index, arr) => element.name === 'Brian')
  //console.log('Found', firstFound)
  
  // Map
  const newArr = data.map( (element, index, arr) => {
     //console.log('Element', element)
     //console.log('Index', index)
     //console.log('Arr', arr)
     return {
       name: element.name.toUpperCase(),
       // age: element.age,
       id: Math.random()
     }
   })
  
  
  // For this first attempt, we returned a sorted array
  // but only with the values requested by property name
  
  // Next, we need to return the entire object, but still sorted by property
  const sortBy = (data, propertyName) => {
    // See if I can return just the values for that property
    // sortBy(data, 'age') => [43, 8, 11]
    // sortBy(data, 'name') => ['Brian', 'Vikram', 'Arav']
    const newArr = [];
    for (let el of data) {
      newArr.push(el[propertyName])
    }
    return newArr.sort( (firstEl, nextEl) => {
      // -1, 1, 0
      if ( firstEl < nextEl ) {
        return -1
      }
      if ( firstEl > nextEl ) {
        return 1
      }
      return 0;
    } );
  
    
    // Return an array
  }
  
   // console.log('Invoking my sorting function', sortBy(data, 'name'))
  console.log('Invoking my sorting function', sortBy(data, 'age'))
  
  
  // TODO: Create a function to redact PII (just a name in this case)
  /** 
   * Redacts an input string to remove names
   * @param {string} text
   * @param {string} name
   * @returns {string}
  */
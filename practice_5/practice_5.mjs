
// TODO: Create a function to redact PII (just a name in this case)
/** 
 * Redacts an input string to remove names
 * @param {string} text
 * @param {string} name
 * @returns {string} The text with the name replaced with ****
*/

// turn the string into an array by .split('')
//loop / map through words in the string
// use .replace() to find and remove a specific word
//return word that was replaced

// Maria's solution
const replaceWord = (string, name) => {
    let arrOfStrings = string.split(' ')
    const newArr = [];
    for(let word of arrOfStrings) {
       let replacedWord = word.replace(name, '*'.repeat(name.length))
       newArr.push(replacedWord)
    }
    return newArr.join(' ')
  }
  console.log(replaceWord('Brian was fighting with Jonathan', 'Jonathan'))
  console.log(replaceWord('Brian was fighting with jonathan', 'Jonathan'))
  
  
  /** 
   * What we reviewed
   * Scope -- interviewers love to ask this
   * Types of loops -- for/in vs for/of
   * Map method and its callback param
   * Returning the same data type they called it with
  */
  
  // Without replace
  const replaceWordManually = (string, name) => {
    const newArr = [];
    const words = string.split( ' ' );
    for (let word of words) {
     if (word.toLowerCase() === name.toLowerCase()) {
        // Don't send this -- redact this
        newArr.push('*'.repeat(name.length))
      } else {
        // THis is safe to push
      newArr.push(word)
        
      }
    }
    return newArr.join(' ')
  }
  
  console.log(replaceWordManually('Brian was fighting with Jonathan', 'Jonathan'))
  console.log(replaceWordManually('Brian was fighting with jonathan', 'Jonathan'))
  
  const replaceFancy = (string, name) => {
    // const regex = /Jonathan/ig;
    const regex = new RegExp(name, 'ig');
    return string.replace(regex, '*'.repeat(name.length))
  }
  console.log('Replace fancy case sensitive', replaceFancy('Brian was fighting Jonathan', 'Jonathan'));
  console.log('Replace fancy case insensitive', replaceFancy('Brian was fighting jonathan', 'Jonathan'));
  
  // console.log('replace Example example'.replace(/example/ig, 'Maria'))
  
  // Object oriented programming
  
  // Everything in the world can be divided into classes and subclasses
  // Every single thing is an instance or object of that class
  
  class Human {
    constructor (name, age) {
      // Does something when you call new Human()
      this.name = name;
      this.age = age;
    }
    sayName() {
      console.log('My name is', this.name);
    }
    advanceAge() {
      this.age++;
    }
    getAge() {
      console.log(`My age is ${this.age}`)
    }
  }
  
  const maria = new Human('Maria', 0);
  const brian = new Human('Brian', 0);
  
  maria.sayName()
  brian.sayName()
  brian.advanceAge()
  brian.advanceAge()
  brian.advanceAge()
  brian.advanceAge()
  brian.getAge()
  maria.getAge()
  
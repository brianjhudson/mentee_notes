// .map .reduce .filter .find

// Write a function that accepts a text and removes all white space from a 
// text.

const removeWhiteSpaces = text => {
    const arrOfWords = text.split(' ');
    const removedSpaces = arrOfWords.map(el => el)
    return removedSpaces.join('')
    
  }
  
  console.log(removeWhiteSpaces('I enjoy hiking'))
  const removeWhiteSpaces2 = text => {
    const arrOfWords = text.split(' ');
    return arrOfWords.join('');
  }
  console.log(removeWhiteSpaces2('I enjoy hiking also'))
  
  const removeWhiteSpacesWithFilter = text => {
    const arrOfCharacters = text.split('');
    const arrOfLetters = arrOfCharacters.filter(el => el !== ' ' && el !== 'I');
    return arrOfLetters.join('');
  }
  
  console.log('Characters', removeWhiteSpacesWithFilter('I enjoy camping as well'))
  
  
  const removeWhiteSpaceWithoutArrays = text => {
    const removed = text.replaceAll(' ', '');
    return removed;
  }
  console.log('With replace', removeWhiteSpaceWithoutArrays('I am testing again'))
  
  // Create a function that accepts a text and returns the average word length.
  
  
  // Create a function that accepts a text and returns the number of words in the text
  
  const getWordCount = (text) => {
    let numOfWords = text.split(' ')
   return numOfWords.length
  }
  console.log('Word count: ', getWordCount('vacation')); // 1
  console.log('Word count: ', getWordCount('Going on vacation')); // 3
  
  //create a variable to store the average
  // .split('') text to turn into an array
  // .map () to through array 
  // incremement the variable as I'm looping through
  // return the average
  
  const getCharacterCount = text => {
    const arrOfWord = text.split('')
    let charLength = arrOfWord.length
    // let lengthOfWord = charLength;
    return charLength;
  }
  
  
  console.log(getCharacterCount('vacation'))
  console.log(getCharacterCount('I am on vacation')) // (1 + 2 + 2 + 8) / 4
  
  const getAverageWordLength = text => {
    // Call getWordCount on text
    // Call getCharacterCount on text
    // Use those values to calculate the average : characterCount / wordCount
    // This is called composition, and it's key to writing in a functional style
    const wordCount = getWordCount(text);
    // Before getting character count, we need to get rid of the white space
    const textWithWhiteSpacesRemoved = removeWhiteSpaceWithoutArrays(text)
    const charCount = getCharacterCount(textWithWhiteSpacesRemoved);
    return charCount / wordCount
  }
  
  console.log(getAverageWordLength('I am on vacation'));
  console.log(getAverageWordLength('Hey you'));
  // Create a function that accepts a text and returns the most frequently used word.
  
  
  
  // OOP - Create a class called Text that contains properties and methods to hold the text and perform actions on it. 
  
  class Text {
  
    constructor(text) {
      this.text = text;
    }
    showText() {
      console.log(this.text)
    }
    removeWhiteSpaces() {
      return this.text.replaceAll(' ', '');
    }
    getCharacterCount() {
      const characters = this.removeWhiteSpaces();
      return characters.length;
    }
    getWordCount() {
      return this.text.split(' ' ).length
    }
    getAverageWordLength() {
      const charCount = this.getCharacterCount();
      const wordCount = this.getWordCount();
      return charCount / wordCount;
    }
  }
  
  const myText = new Text("I am going on vacation");
  myText.showText();
  console.log('Without spaces', myText.removeWhiteSpaces())
  console.log('Character count: ', myText.getCharacterCount())
  console.log('Word count: ', myText.getWordCount())
  console.log('Average Word length: ', myText.getAverageWordLength())
  
  
  
  
  
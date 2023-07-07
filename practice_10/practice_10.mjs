/* 
 * Goals
 * Data Structures and Built-in Methods
 * -- Objects
 * -- Arrays
 * -- Strings
 * -- Maps
 * -- Sets
 * -- .map
 * -- .find
 * -- .filter
 * -- .reduce

 * Practice Pseudocode and Algorithms and Problem-Solving
 * -- Medium-level problems
 * -- Difficult problems (mid-level or senior)

 * Oral Interview
 * -- Languages and trade-offs
 * -- Software Development Lifecylce
 * -- Personal experience, your story

 * Real-world coding (frontend)
 * -- React hooks
 * -- Application architecture
 * -- Practice common app tasks
 * --  * Data fetching
 * --  * Rendering
 * --  * Form validation
*/

const getUniqueNames = (names) => {
    // 1. Use a loop and an empty array
    const uniqueNames = [];
    
    for (let i = 0; i < names.length; i++) {
    // Check to see if name occurs later in the array
  
    // What do we do if it is later in the array? - Ignore
    // What do we do if it doesn't appear later in the array? Push it to uniqueNames
  
    // Set a variable to track whether or not it repeats
      let isUnique = true;
      for (let j = i + 1; j < names.length; j++) {
        console.log('J', j);
        if (names[i] === names[j]) {
          isUnique = false;
        } 
      }
  
    // Use the found variable to decide whether or not to push
      if (isUnique) {
        uniqueNames.push(names[i])
      }
    }
      // [ "0", "1", "2" ]
    // 2. Use Set
    return uniqueNames;
  };
  
  const getUniqueNames2 = (names) => {
    // ['a', 'b', 'a', 'c', 'd', 'e']
    const uniqueNames = [];
    outer:
    for (let i = 0; i < names.length; i++) {
      // names[i] -> 'a'
        let isUnique = true;
        inner:
        for (let j = i + 1; j < names.length; j++) {
          console.log('J', j);
          // names[j] -> 'b'
          // names[j] -> 'a'
          if (names[i] === names[j]) {
            isUnique = false;
            continue outer;
          } 
        }
        if (isUnique) {
          uniqueNames.push(names[i])
        }
    }
    // 2. Use Set
    return uniqueNames;
  };
  
  const getUniqueNamesWithSet = (names) => {
    const uniqueNamesSet = new Set();
    for (const name of names) {
      uniqueNamesSet.add(name);
    }
    // const uniqueNames = Array.from(uniqueNamesSet);
    const uniqueNames = [...uniqueNamesSet]
    return uniqueNames;
  }
  
  
  
  // getWordCount("hello is a weird word", "a") -> 1
  const getWordCount = (sentence, word) => {
    let numOfAppearances = 0;
    const arrOfWords = sentence.split(' ');
    // If we only wanted to check for the word, we could use .includes
        // if(arrOfWords.includes(word)) {
        //   numOfAppearances++
        // }
    // 1. Use a loop
    // for (let currentWord of arrOfWords) {
    //   if(currentWord.toLowerCase() === word.toLowerCase()) {
    //     numOfAppearances++;
    //   }
    // }
  
    
    // 2. Use nested loops -- not a great solution, just practice
    for (let i = 0; i < arrOfWords.length; i++) {
      if (arrOfWords[i].toLowerCase() !== word.toLowerCase()) {
        continue;
      }
      let count = 1;
      for(let j = i + 1; j < arrOfWords.length; j++) {
        if (arrOfWords[j].toLowerCase() === word.toLowerCase()) {
          count++;
        }
      }
      return count;
    }
    return 0;
    
    // 2. Use Map
    return numOfAppearances;
  };
  
  const getFrequency = (sentence) => {
    const wordCounts = new Map(); //{"a": 1, "b": 2}
    const words = sentence.split(" ");
    for (const word of words) {
      const lower = word.toLowerCase();
      const wordCount = wordCounts.get(lower);
      if (wordCount) {
        wordCounts.set(lower, wordCount + 1);
      } else {
        wordCounts.set(lower, 1);
      }
    }
    return wordCounts;
  }
  
  const getMostFrequentWord = (text) => {
    // Create an array of words
  let arrOfWords = text.split(' ');
    
    // Create a Map of each word
    let eachWord = new Map();
    
    // Loop and count the frequency of each word
    for (let currentWord of arrOfWords) {
      const currentWordd = currentWord.toLowerCase()
      // .get
      // Check if word is already in the map?
      // {"the" => 1} map.get("the") => 1
      let count = eachWord.get(currentWordd)
      if(!count) {
        eachWord.set(currentWordd, 1)
      } else {
        eachWord.set(currentWordd, count + 1)
      }
      // If so, what is its current count?
      // Increase its current count by one
  
      // If not, initialize it by setting it in the map with a count of 1
      
    }
    // Loop and find the most frequent word
    // Initialize a variable to hold the largest count
    // Initialize a variable to hold the word for that count
    let largestCount = 0;
    let wordWithLargestCount = '';
    // Loop through the map
    for (const [word, count] of eachWord) {
      // word = a, count = 2
      // word = hobbit, count = 1
      if ()
    }
  }
  
  const text = "A hobbit once lived in a hole";
  console.log(getMostFrequentWord(text)); // 'a'
  
  // console.log(getFrequency("A hobbit once lived in a hole"))
  
  
  
  
  const getLargestNumber = (nums) => {
    //create a variable to store largest num
    //loop through the array
    // compare the numbers to determine which is the largest
    //return largest num
  
    let largestNum = 0;
  
    // .map -> return a copy of an array with any modifications you want
    
    for (let num of nums) {
      if(num > largestNum){
        largestNum = num
      }
    }
    
    return largestNum;
  }
  
  const getLargestNumber2 = (nums) => {
    // Built-in
    // Array.prototype.filter, .map, .find, .reduce, .sort
    const sorted = nums.sort().reverse();
    console.log("nums sorted", nums);
    return sorted[0];
  }
  
  const getLargestNumber3 = (nums) => {
    // Math global object
    // const largest = Math.max(1, 2, 3, 5)
    const largest = Math.max(...nums);
    // Math.round
    // Math.floor
    // Math.ceil
    // Math.random
    // Math.abs
   
    return largest
  };
  
  const areParenthesesValid = (parens) => {
    return false;
  }
  
  const changeRepeatingLetters = (string) => {
    // Use 
    return "";
  }
  
  
  const names = ["brian", "maria", "brian", "tony"];
  // console.log(getUniqueNames(names)) // -> ["brian", "maria", "tony"]
  // console.log(getUniqueNames2(names)) // -> ["brian", "maria", "tony"]
  // console.log(getUniqueNamesWithSet(names)) // -> ["brian", "maria", "tony"]
  
  const sentence = "A hobbit once lived in a hole";
  // console.log(getWordCount(sentence, "a")) // -> 2
  
  const nums = [-1, -2, 42, 3, -5];
  console.log(getLargestNumber(nums)) // 42
  console.log(getLargestNumber2(nums)) // 42
  console.log(getLargestNumber3(nums)) // 42
  
  const invalidParens = "(hi)(how)(are))you("; 
  const validParens = "(hi)(how)(are)(you)"
  // console.log(areParenthesesValid(invalidParens)) // false
  // console.log(areParenthesesValid(validParens)) // true
  
  const str = "aabbcc";
  // console.log(changeRepeatingLetters(str)) // "axbxcx"
// Exercise: Level 1

// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days of JS'
// Print the string on the browser console using console.log()
console.log(challenge)

// Print the length of the string on the browser console using console.log()
console.log(challenge.length)

// Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())

// Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLocaleLowerCase())

// Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(3,4))

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(3,13))

// Check if the string contains a word Script using includes() method
console.log(challenge.includes('JS'))

// Split the string into an array using split() method
console.log(challenge.split())

// Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '))

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let FAANG = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(FAANG.split(','))

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JS', 'Python'))

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(5))

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J'))

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'))

// Use lastIndexOf to determine the position of the last occurrence of S in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('S'))

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence1 = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence1.indexOf('because'))

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence1.lastIndexOf('because'))

// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence1.search('because'))

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(challenge.trim())

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30'))

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('JS'))

// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'))


// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log(challenge.concat(' - JavaScript'))

// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2))



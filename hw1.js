// Loops
// 1. Write a for loop that logs only logs even numbers from 0 - 10; ie 0,2,4,..10

// for (let i = 0; i <= 10; i+=2) {
//   console.log(i);
// }

// 2. Write a for that logs numbers from 10 - 0; ie 10,9,8...0

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// 3. write a for loop that loops through this array and logs 'odd/even' based on wether the number is odd even

// let nums = [1,2,3,4,5,6,7,8,9,10]

// nums.forEach((num)=>{
//   if (num % 2 === 0) {
//     console.log('even');
//   } else {
//     console.log('odd');
//   }
// })

// 4. write a while loop that starts at 0 and counts up to 10 ie: 0,1,2,3....10

// let i = 0
// while(i <= 10) {
//   console.log(i);
//   ++i;
// }

// 5. Look closely at the code below

// const isOdd = (num) =>{
//     return num % 2 === 0
// }

// if(isOdd(2)){
//     console.log('is Odd')
// } else {
//     console.log('is Even')
// }

// 6. what will this log?
// isOdd

// 7. what is the value of isOdd(2) 
// 0

// 8. Fix the isOdd function to make this work

// const isOdd = (num) =>{
//   return num % 2;
// }

// if(isOdd(2)){
//   console.log('is Odd')
// } else {
//   console.log('is Even')
// }

// Functions
// 1. Write a function that takes a positive number and prints all even numbers from 0 – number

  // const printEvenTo = (num) => {
  //   for (let i = 0; i <= num; i+=2) {
  //     console.log(i);
  //   }
  // }

// 2. Write a function that takes an array and returns the sum of all the numbers

// const sumOfAll = (numArray) => {
// let sum = 0;

// for (let i = 0; i < numArray.length; i++) {
//   sum += numArray[i]
// }
//   return sum
// }

// 3. Write a function that returns the number of vowels in string

// const vowels = ['a', 'e', 'i', 'o', 'u']

// const numOfVowels = (str) => {
//   let count = 0;
//   for (let letter of str.toLowerCase()) {
//     if (vowels.includes(letter)) {
//       count++
//     }
//   } 
//   return count
// }

// console.log(numOfVowels('supercalafragilisticexpealadocious'))

// 4. Write a function that takes a math operator, as a string, ('*','/','+','-') and two numbers and returns the result

// const operators = ['*', '/', '+', '-']

// const mathString = (num1, op, num2) => {
//   let result;

//   if (op === '*') {
//     result = num1 * num2
//   } else if (op === '/') {
//     result = num1 / num2
//   } else if (op === '+') {
//     result = num1 + num2
//   } else {
//     result = num1 - num2
//   }

//   return result
// }

// 5. Write a function that takes an array of strings and a string and returns true or false if the string is in the array.

const doesStringExist = (strings, str) => {
  for (let i = 0; i < strings.length; i++) {
    if (strings.includes(str)) {
      return true
    }
    return false
  }
}

// 6. write a function that takes a person object {firstname: 'joe', lastname: 'shmoe', age: 50} and returns a formatted string "joe shmoe is 50 years old"

const personDescription = (person) => {
  return `${person.firstname} ${person.lastname} is ${person.age} years old` 
}

let p1 = {firstname: 'Steve', lastname: 'Crass', age: 32}

console.log(personDescription(p1))
// 7. write a function that takes an array that removes the first and last items and return that new array
// 8. write a function that swaps the last and first items of an array 
// 9. write a function that takes a array and a second argument and returns the index in the array of the second argument
// 10. write a function that takes a number and uses a ternary to return if the number is odd or even.
// 11. Write a function that prints all  numbers from 0 – 10







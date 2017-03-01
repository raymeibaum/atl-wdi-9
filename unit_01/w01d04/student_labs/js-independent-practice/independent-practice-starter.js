//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

function lengths(arrayOfStrings) {
  var arrayOfNumbers = [];
  for (var i = 0; i < arrayOfStrings.length; i++) {
    arrayOfNumbers.push(arrayOfStrings[i].length);
  }
  return arrayOfNumbers;
}

// bonus
function mapLengths(arrayOfStrings) {
  return arrayOfStrings.map(function(element) {
    return element.length;
  });
}

// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

function transmogrifier(base1, base2, exponent) {
  return Math.pow(base1 * base2, exponent);
}

// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

function wordReverse(stringToReverse) {
  return stringToReverse.split(' ').reverse().join(' ');
}

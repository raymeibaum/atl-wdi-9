// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

////// WRITE A FUNCTION THAT TAKES ___ AS INPUT AND RETURNS ___ AS OUTPUT //////

// #1
// Input: an array of numbers
// Output: the sum of the numbers that were passed in
// Edge Case: If the array is empty, return 0
var sumOfNums = function(numsArray) {
  return numsArray.length !== 0 ? numsArray.reduce(function(acc, currentValue) {
    return acc + currentValue;
  }) : 0;
};

// #2
// Input: an array of numbers
// Output: an array of the numbers from the first array that are strictly
//         greater (i.e. greater than but not equal to) than 10
var numsGreaterThanTen = function(numsArray) {
  return numsArray.filter(function(num) {
    return num > 10;
  });
};

// #3
// Input: an array of numbers
// Output: `true` if ALL numbers passed in are strictly greater than 10;
//         `false` otherwise
// Edge Case: If the input array is empty, the function should return `true`.
var allGreaterThanTen = function(numsArray) {
  return numsArray.length !== 0 ? numsArray.every(function(num) {
    return num > 10;
  }) : true;
};

// #4
// Input: an array of words
// Output: an array of all words from the first array with five or more letters
var wordsWithAtLeastFiveLetters = function(words) {
  return words.filter(function(word) {
    return word.length >= 5;
  })
};

// #5
// Input: an array of words
// Output: `true` if ALL words start with the letter 'a' (case-insensitive),
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allStartingWithA = function(words) {
  return words.length !== 0 ? words.every(function(word) {
    return word.startsWith('a') || word.startsWith('A');
  }) : true;
};

// #6
// Input: an array of words
// Output: `true` if there are ANY words that start with the letter 'b'
//          (case-insensitive), `false` otherwise
var anyStartingWithB = function(words) {
  return words.length !== 0 ? words.some(function(word) {
    return word.startsWith('b') || word.startsWith('B');
  }) : true;
};

// #7
// Input: a single word and a number (`n`)
// Output: `true` if the word has at least some number (`n`) of vowels,
//          `false` otherwise
//    Assume that vowels are 'a', 'e', 'i', 'o', and 'u' (NOT 'y')
// Edge Case: If `n` is less than zero, return `null`.
var hasAtLeastNVowels = function(word, n) {
  if (n < 0) {
    return null;
  }
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelCounter = 0;

  for (var i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) {
      vowelCounter++;
    }
  }
  return vowelCounter >= n ? true : false;
};

// #8
// Input: an array of words
// Output: an array of words from the original array that have at least two
//          vowels
var wordsWithAtLeastTwoVowels = function(words) {
  return words.filter(function(word) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var vowelCounter = 0;
    for (var i = 0; i < word.length; i++) {
      if (vowels.includes(word[i].toLowerCase())) {
        vowelCounter++;
      }
    }
    return vowelCounter >= 2;
  })
};

// #9
// Input: an array of words
// Output: `true` if ALL words have two or more vowels, `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allHaveAtLeastTwoVowels = function(words) {
  return words.every(function(word) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var vowelCounter = 0;
    for (var i = 0; i < word.length; i++) {
      if (vowels.includes(word[i].toLowerCase())) {
        vowelCounter++;
      }
    }
    return vowelCounter >= 2;
  })
};

// #10
// Input: an array of words
// Output: `true` if there are ANY words have two or more vowels,
//          `false` otherwise.
var anyHaveAtLeastTwoVowels = function(words) {
  return words.some(function(word) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var vowelCounter = 0;
    for (var i = 0; i < word.length; i++) {
      if (vowels.includes(word[i].toLowerCase())) {
        vowelCounter++;
      }
    }
    return vowelCounter >= 2;
  })
};

// #11
// Input: an array of words
// Output: `true` if NONE of the words have two or more vowels,
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var noneHaveTwoOrMoreVowels = function(words) {
  return words.length !== 0 ? words.every(function(word) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var vowelCounter = 0;
    for (var i = 0; i < word.length; i++) {
      if (vowels.includes(word[i].toLowerCase())) {
        vowelCounter++;
      }
    }
    return vowelCounter < 2;
  }) : true;
};

// #12
// Input: an array of words
// Output: an object ({}) where each word in the array is a key, and the value
//          tied to that key is the length of the word.
// e.g. given ['cat', 'horse', 'elephant'],
//      return { cat: 3, horse: 5, elephant: 8}
var buildObjectFromWords = function(words) {
  var object = {};
  words.forEach(function(word) {
    object[word] = word.length;
  })
  return object;
};


/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  sumOfNums: sumOfNums,
  numsGreaterThanTen: numsGreaterThanTen,
  allGreaterThanTen: allGreaterThanTen,
  wordsWithAtLeastFiveLetters: wordsWithAtLeastFiveLetters,
  allStartingWithA: allStartingWithA,
  anyStartingWithB: anyStartingWithB,
  hasAtLeastNVowels: hasAtLeastNVowels,
  wordsWithAtLeastTwoVowels: wordsWithAtLeastTwoVowels,
  allHaveAtLeastTwoVowels: allHaveAtLeastTwoVowels,
  anyHaveAtLeastTwoVowels: anyHaveAtLeastTwoVowels,
  noneHaveTwoOrMoreVowels: noneHaveTwoOrMoreVowels,
  buildObjectFromWords: buildObjectFromWords
}

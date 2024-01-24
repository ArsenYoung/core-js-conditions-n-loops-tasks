/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  }
  if (b >= a && b >= c) {
    return b;
  }
  if (c >= a && c >= b) {
    return c;
  }
  return a;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (
    queen.x > 0 &&
    queen.x < 9 &&
    queen.y > 0 &&
    queen.y < 9 &&
    king.x > 0 &&
    king.x < 9 &&
    king.y > 0 &&
    king.y < 9
  ) {
    if (queen.x === king.x || queen.y === king.y) {
      return true;
    }
    if (queen.x === queen.y && king.x === king.y) {
      return true;
    }
    if (Math.abs(king.x - queen.x) === Math.abs(king.y - queen.y)) {
      return true;
    }
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    if (a === b && a + b >= c) {
      return true;
    }

    if (a === c && a + c >= b) {
      return true;
    }

    if (b === c && b + c >= a) {
      return true;
    }
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convert(num) {
  if (num === 1) {
    return 'I';
  }
  if (num === 2) {
    return 'II';
  }
  if (num === 3) {
    return 'III';
  }
  if (num === 4) {
    return 'IV';
  }
  if (num === 5) {
    return 'V';
  }
  if (num === 6) {
    return 'VI';
  }
  if (num === 7) {
    return 'VII';
  }
  if (num === 8) {
    return 'VIII';
  }
  if (num === 9) {
    return 'IX';
  }
  return 'X';
}

function convertToRomanNumerals(num) {
  let res = '';
  let n = num;
  if (n <= 10) {
    return convert(n);
  }
  while (n > 10) {
    res += convert(10);
    n -= 10;
  }
  res += convert(n);

  return res;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */

function convertNumberToString(numberStr) {
  let str = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    const num = +numberStr[i];
    if (Number.isFinite(num)) {
      switch (num) {
        case 0: {
          str = `${str}zero`;
          break;
        }
        case 1: {
          str = `${str}one`;
          break;
        }
        case 2: {
          str = `${str}two`;
          break;
        }
        case 3: {
          str = `${str}three`;
          break;
        }
        case 4: {
          str = `${str}four`;
          break;
        }
        case 5: {
          str = `${str}five`;
          break;
        }
        case 6: {
          str = `${str}six`;
          break;
        }
        case 7: {
          str = `${str}seven`;
          break;
        }
        case 8: {
          str = `${str}eight`;
          break;
        }
        case 9: {
          str = `${str}nine`;
          break;
        }
        default:
          break;
      }
    } else if (numberStr[i] === '.' || numberStr[i] === ',') {
      str = `${str}point`;
    } else if (numberStr[i] === '-') {
      str = `${str}minus`;
    }
    if (i !== numberStr.length - 1) {
      str = `${str} `;
    }
  }

  return str;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  if (num === digit) {
    return true;
  }

  let numForChange = num;
  if (numForChange < 0) {
    numForChange *= -1;
  }
  while (numForChange !== 0) {
    if (numForChange % 10 === digit) {
      return true;
    }
    numForChange = Math.trunc(numForChange / 10);
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length === 0) {
    return -1;
  }
  for (let i = 1; i < arr.length; i += 1) {
    let sumLeft = 0;
    let sumRight = 0;
    for (let n = 0; n < i; n += 1) {
      sumLeft += arr[n];
    }
    for (let k = arr.length - 1; k > i; k -= 1) {
      sumRight += arr[k];
    }
    if (sumLeft === sumRight) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = new Array(size);

  for (let i = 0; i < size; i += 1) {
    matrix[i] = new Array(size);
    for (let j = 0; j < size; j += 1) {
      matrix[i][j] = 0;
    }
  }
  let count = 1;
  let i = 0;
  let j = 0;
  for (let k = 0; k < Math.round(size / 2); k += 1, i = k, j = k) {
    for (; j < size - k - 1; ) {
      matrix[i][j] = count;
      count += 1;
      j += 1;
    }
    for (; i < size - k - 1; ) {
      matrix[i][j] = count;
      count += 1;
      i += 1;
    }
    for (; j > k; ) {
      matrix[i][j] = count;
      count += 1;
      j -= 1;
    }
    for (; i > k; ) {
      matrix[i][j] = count;
      count += 1;
      i -= 1;
    }
  }
  if (size % 2 !== 0) {
    matrix[i - 1][j - 1] = count;
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(/* matrix */) {
  throw new Error('Not implemented');
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const myArr = arr;
  const decrisingFactor = 1.247;
  let tmp;
  for (
    let k = Math.floor(myArr.length / decrisingFactor);
    k > 1;
    k = Math.floor(k / decrisingFactor)
  ) {
    for (let i = 0, j = k; j < myArr.length; i += 1, j += 1) {
      if (myArr[i] > myArr[j]) {
        tmp = myArr[i];
        myArr[i] = myArr[j];
        myArr[j] = tmp;
      }
    }
  }

  for (let i = 0; i < myArr.length; i += 1) {
    if (myArr[i] > myArr[i + 1]) {
      tmp = myArr[i];
      myArr[i] = myArr[i + 1];
      myArr[i + 1] = tmp;
    }
  }
  return myArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  if (str === '' || str.length === 1 || iterations === 0) {
    return str;
  }
  let newStr = str;
  const strLength = newStr.length;
  let k = 0;
  while (k < iterations) {
    let leftPart = '';
    let rightPart = '';
    for (let i = 0; i < strLength; i += 2) {
      leftPart = `${leftPart}${newStr.charAt(i)}`;
    }
    for (let i = 1; i < strLength; i += 2) {
      rightPart = `${rightPart}${newStr.charAt(i)}`;
    }
    newStr = `${leftPart}${rightPart}`;
    k += 1;
  }
  return newStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};

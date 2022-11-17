// =================     11-14   =================================

/* Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1. */

// Return an array

function fizzbuzz(n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            arr.push('FizzBuzz')
        } else if (i % 3 === 0) {
            arr.push('Fizz')

        } else if (i % 5 === 0) {
            arr.push('Buzz')
        } else {
            arr.push(i)
        }
    }
    return arr
}
// console.log(fizzbuzz(16))
//-----------------------------------------------------------------------



// ALTERNATE SOLUTION FROM OTHERS
function fizzify(i) {
    if (i % 15 == 0)
        return 'FizzBuzz';
    else if (i % 5 == 0)
        return 'Buzz';
    else if (i % 3 == 0)
        return 'Fizz';
    else
        return i;
}

// Return an array
function fizzbuzz(n) {
    var res = [];
    for (var i = 1; i <= n; ++i) res.push(fizzify(i));
    return res;
}
//-----------------------------------------------------------------------

// ================      11-15 =========================================
/* Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7] */

// MINE 

function largest(n, arr) {
    return arr.sort((a, b) => b - a) // sorted largest to smallest
        .slice(0, n) // remove the first (n) numbers off the front of list
}
// ---------------------------------------------------------------------------------------------------

// console.log(largest(2, [7, 6, 5, 4, 3, 2, 1]))


// BEST VOTED

function largest(n, xs) {
    return xs.sort(function (a, b) { return a - b; }).slice(xs.length - n);
    // this one is simialr to mine, it just gives the .slice method one parameter, the starting index
}

// -------------- 11-16 ------------------------------
/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

// MINE
function getCount(str) {
    return str.split('').filter(el => el === 'a' || el === 'e' || el === 'i' || el === 'o' || el === 'u')
        .length
}

// OTHER SOLUTION WITH REGEX
function getCount(str) {
    return (str.match(/[aeiou]/ig) || []).length;
}

// console.log(getCount('auhdeeritopaancsds')) // returns 8



//==========================  11-17  ==============================

/* As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1. */


// MINE
function givme(triplet) {
    let tripletOg = triplet
    let tripletCopy = Number([...tripletOg].sort((a, b) => a - b).splice(1, 1))
    // the spread creates a copy of the original array, then we sort and get the middle number
    // then get the index of the original number in the original array
    return tripletOg.indexOf(tripletCopy)
}
console.log(givme([5, 10, 2])) // returns 5

// BEST VOTED SOLUTION
function gimme(a) {
    return a.indexOf(a.concat().sort(function (a, b) { return a - b })[1])
}

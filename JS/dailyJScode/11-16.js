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

console.log(getCount('auhdeeritopaancsds')) // returns 8
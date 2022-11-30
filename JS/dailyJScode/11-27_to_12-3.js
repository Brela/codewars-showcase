// -----------------   11-28-22  ------------------

/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

 */


function descendingOrder(n) {
    return Number(String(n).split('').sort((a, b) => b - a).join(''))
}

console.log(descendingOrder(4839))

// -----------------   11-30-22  ------------------
/* Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will
 contain all vowels but one. Also, you won't need to worry about capitals. */

//    MINE
function absentVowel(x) {
    let arr = ['A', 'E', 'I', 'O', 'U']
    let missing = ''
    arr.forEach(el => {
        if (!x.toUpperCase().includes(el)) missing = el
    })
    return arr.indexOf(missing);
}

console.log(absentVowel("John Doe hs seven red pples under his bsket"))

// OTHER SOLUTION
function absentVowel(x) {
    return ["a", "e", "i", "o", "u"].findIndex(v => !x.includes(v));
}
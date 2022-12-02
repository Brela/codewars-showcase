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

// console.log(descendingOrder(4839))

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

// console.log(absentVowel("John Doe hs seven red pples under his bsket"))

// OTHER SOLUTION
function absentVowel(x) {
    return ["a", "e", "i", "o", "u"].findIndex(v => !x.includes(v));
}

// ------------------------ 12-1  -------------------------------------

/* Given the following input array:

var list1 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

Write a function that when executed as findOddNames(list1) returns only the developers where
if you add the ASCII representation of all characters in their FIRST names, the result will be an ODD number
Explanation of the above:

Sum of ASCII codes of letters in 'Aba' is: 65 + 98 + 97 = 260 which is an even number
Sum of ASCII codes of letters in 'Abb' is: 65 + 98 + 98 = 261 which is an odd number
Notes:

Preserve the order of the original list.
Return an empty array [] if there is no developer with an "odd" name.
The input array and first names will always be valid and formatted as in the example above.
 */

//   MINE
function findOddNames(list) {
    let devAsciiFirstReducedIsOdd = []
    list.forEach(el => {
        if (firstNameIsOdd(el.firstName)) devAsciiFirstReducedIsOdd.push(el)
    })
    function firstNameIsOdd(name) {
        return name.split('').reduce((acc, curr) => acc += curr.charCodeAt(0), 0) % 2 === 0 ? false : true;
    }
    return devAsciiFirstReducedIsOdd
}

//   BEST VOTED SOLUTION
function findOddNames(list) {
    return list.filter((d) => {
        return d.firstName.split('').reduce(((r, e) => r + e.charCodeAt(0)), 0) % 2 !== 0
    });
}



/* console.log(findOddNames([
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
])) */

// ------------------------ 12-2  -------------------------------------
// Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?

let arr = document.querySelector('pre').textContent.replaceAll('\n\n', '-').split('-')
arr.map(el => el.split('\n').map(el => Number(el)).reduce((acc, curr) => acc + curr))
    .sort((a, b) => a - b)

let top3Total = arr.slice(arr.length - 3).reduce((acc, curr) => acc + curr)

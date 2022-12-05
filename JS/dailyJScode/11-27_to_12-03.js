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

// ------------------------ 12-1 Advent 1 -------------------------------------
// Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?

// let arr = document.querySelector('pre').textContent.replaceAll('\n\n', '-').split('-')
let arr = document.querySelector('p').innerText.replaceAll('\n\n', '-').split('-')
arr.map(el => el.split('\n').map(el => Number(el)).reduce((acc, curr) => acc + curr))
    .sort((a, b) => a - b)

let top3Total = arr.slice(arr.length - 3).reduce((acc, curr) => acc + curr)


// ------------------------ 12-2 Advent 2 -------------------------------------
// Rock Paper Scissors on Steroids - list of 2500 entries
// -The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, 
//  and 3 for Scissors) plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).
/* 
a  x   1  rock
b  y   2  paper
c  z   3  scissors
*/

// let list = document.querySelector('pre').textContent
let list = document.querySelector('p').innerText
list = list.split('\n').map(el => el.split(' '))
let checkWinArr = list.map(el => checkWhoWon(el[0], el[1]))
let reduced = checkWinArr.reduce((acc, curr) => acc + curr)
/* console.log(list)
console.log(checkWinArr)
console.log(reduced) */

function checkWhoWon(elf, me) {
    switch (elf) {
        case 'A': elf = 'rock';
            break;
        case 'B': elf = 'paper';
            break;
        case 'C': elf = 'scissors';
            break;
    }
    switch (me) {
        case 'X': me = 'rock';
            break;
        case 'Y': me = 'paper';
            break;
        case 'Z': me = 'scissors';
            break;
    }
    // console.log(elf, me)

    let tally = !Number.isNaN(meHandPoints(me)) === true ? meHandPoints(me) : 0;
    // console.log(tally)
    if ((elf === 'rock') && (me === 'scissors')) tally += 0;
    else if ((elf === 'rock') && (me === 'paper')) tally += 6;
    else if ((elf === 'paper') && (me === 'rock')) tally += 0;
    else if ((elf === 'paper') && (me === 'scissors')) tally += 6;
    else if ((elf === 'scissors') && (me === 'paper')) tally += 0;
    else if ((elf === 'scissors') && (me === 'rock')) tally += 6;
    else if (elf === me) tally += 3;   // tie
    else tally += 0;
    // console.log(tally)
    return tally;
}

// helper function ;)
function meHandPoints(me) {
    return me === 'rock' ? 1 : me === 'paper' ? 2 : me === 'scissors' ? 3 : 0
}


// PART 2 OF ROCK PAPER SCISSORS
/* "Anyway, the second column says how the round needs to end: X means you need to lose,
 Y means you need to end the round in a draw, and Z means you need to win.Good luck!"
 what would your total score be if everything goes exactly according to your strategy guide? */


// let list2 = document.querySelector('pre').textContent
let list2 = document.querySelector('p').innerText
list2 = list2.split('\n').map(el => el.split(' '))
let checkWinArr2 = list2.map(el => followSheet(el[0], el[1]))
let reduced2 = checkWinArr2.reduce((acc, curr) => acc + curr)
/* console.log(list2)
console.log(checkWinArr2)
console.log(reduced2) */

function followSheet(elf, xyz) {
    switch (elf) {
        case 'A': elf = 'rock';
            break;
        case 'B': elf = 'paper';
            break;
        case 'C': elf = 'scissors';
            break;
    }
    switch (xyz) {
        case 'X': xyz = 'lose';
            break;
        case 'Y': xyz = 'draw';
            break;
        case 'Z': xyz = 'win';
            break;
    }
    let rock = 1, paper = 2, scissors = 3;

    let tally2;
    tally2 = xyz === 'lose' ? 0 : xyz === 'draw' ? 3 : xyz === 'win' ? 6 : 0

    if ((elf === 'rock') && (xyz === 'lose')) tally2 += scissors;
    else if ((elf === 'rock') && (xyz === 'draw')) tally2 += rock;
    else if ((elf === 'rock') && (xyz === 'win')) tally2 += paper;
    if ((elf === 'paper') && (xyz === 'lose')) tally2 += rock;
    else if ((elf === 'paper') && (xyz === 'draw')) tally2 += paper;
    else if ((elf === 'paper') && (xyz === 'win')) tally2 += scissors;
    if ((elf === 'scissors') && (xyz === 'lose')) tally2 += paper;
    else if ((elf === 'scissors') && (xyz === 'draw')) tally2 += scissors;
    else if ((elf === 'scissors') && (xyz === 'win')) tally2 += rock;
    else tally2 += 0;





    // console.log(tally2)
    return tally2;
}

// ------------------------ 12-3  Advent -------------------------------------

// PART 1
/* For example, suppose you have the following list of contents from six rucksacks:

vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
To help prioritize item rearrangement, every item type can be converted to a priority:

Lowercase item types a through z have priorities 1 through 26.
Uppercase item types A through Z have priorities 27 through 52.

Find the item type that appears in both compartments of each rucksack. 
What is the sum of the priorities of those item types? */
// let rucksackArr = ['aaxabbbx', 'xoxxyoyy', 'WpeeeepttWtt']



let rucksackArr = document.querySelector('pre').innerHTML.split('\n')

let arrsSplitInHalf = rucksackArr.map(el => {
    el =
        [el.slice(0, el.length / 2), el.slice(el.length / 2, el.length)]
    return el // el is an array of 2 halves
})

arrsSplitInHalf.map((el, x) => {
    let firstHalf = el[0]
    let secondHalf = el[1]

    for (let i = 0; i < firstHalf.length; i++) {

        if (secondHalf.includes(firstHalf[i])) {

            console.log(`el[0] letter: ${el[0][i]}`)
            // console.log(checkPriority(el[0][i], getPrioritiesArr()))
            let pri = checkPriority(el[0][i], getPrioritiesArr())
            return !Number.isNaN(pri) ? pri : 0

        }

    }
}).slice(0, arrsSplitInHalf.length - 1).reduce((acc, curr) => acc + curr)


function getPrioritiesArr() {
    let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    for (let i = 0; i < letters.length; i++) {
        letters[i] = letters[i] + [i + 1]

    }
    return letters
}
function checkPriority(letter, lettersArr) {
    let found = lettersArr.find(el => el.includes(letter))
    return Number(found.slice(1))
}

// PART 2
// Find the item type that corresponds to the badges of each three-Elf group. 
// What is the sum of the priorities of those item types?

let rucksackArr2 = document.querySelector('pre').innerHTML.split('\n')
console.log(rucksackArr2)
let groupOfThrees = []
rucksackArr2.map((el, i) => {
    for (let j = 0; j < rucksackArr2.length; j += 3) {
        console.log(el)
        groupOfThrees.push(rucksackArr2.splice(0, 3))
        console.log(el[i])
    }
})
console.log(groupOfThrees)


// groupOfThrees[298] = [groupOfThrees[298][0], groupOfThrees[298][1], groupOfThrees[299][0]]
// groupOfThrees = groupOfThrees.splice(0, groupOfThrees.length - 2)


let newGroupsOfThree = []

groupOfThrees.forEach((el, i) => {
    let firstThird = el[0]
    let secondThird = el[1]
    let thirdThird = el[2]

    for (let x = 0; x < groupOfThrees.length; x++) {

        if (secondThird.includes(firstThird[x]) && thirdThird.includes(firstThird[x])) {

            console.log(`the letter for index ${i}, arrays: ${firstThird}-- ${secondThird}-- ${thirdThird}-- is ${el[0][x]} `)
            // console.log(checkPriority(el[0][x], getPrioritiesArr()))
            let pri = checkPriority(el[0][x], getPrioritiesArr())
            if (newGroupsOfThree[i] === undefined) {
                newGroupsOfThree.push(!Number.isNaN(pri) ? pri : 0)
            }
        }

    }
})

console.log(newGroupsOfThree)

// console.log(newGroupsOfThree.reduce((acc, curr) => acc + curr))



// }).slice(0, groupOfThrees.length - 1).reduce((acc, curr) => acc + curr)


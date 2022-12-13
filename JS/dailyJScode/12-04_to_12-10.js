// ---------------------------- 12-04 ------------------------------------------------
/*
For example, consider the following list of section assignment pairs:

2 - 4, 6 - 8
2 - 3, 4 - 5
5 - 7, 7 - 9
2 - 8, 3 - 7
6 - 6, 4 - 6
2 - 6, 4 - 8

Some of the pairs have noticed that one of their assignments fully contains the other.
For example, 2-8 fully contains 3-7, and 6-6 is fully contained by 4-6. In pairs where one assignment fully contains the other,
one Elf in the pair would be exclusively cleaning sections their partner will already be cleaning, so these seem like the most
in need of reconsideration. In this example, there are 2 such pairs.

In how many assignment pairs does one range fully contain the other? */
/*
function fillInNumsInRange(range) {
    // console.log(range.split('-'))
    range = range.split('-')
    let rangeStr = ''
    for (let i = Number(range[0]); i <= Number(range[1]); i++) {
        rangeStr += String(i) + '-'
    }
    // rangeStr = rangeStr
    return rangeStr

}

let list = document.querySelector('p').innerHTML.split('\n')
list = list.splice(0, list.length - 1)
// console.log(list)
let totalOverlapping = 0
let listMutated = list.map((el, i) => {
    el = list[i].split(',')

    // if (el === '') list.splice(i, 1)

    el[0] = fillInNumsInRange(el[0]);
    el[1] = fillInNumsInRange(el[1]);
    // console.log(el[0])
    // console.log(el[1])

    if (el[0].includes(el[1]) || el[1].includes(el[0])) {
        totalOverlapping += 1
    }
    // console.log(totalOverlapping)
    // console.log('|')
    return el
}) */

/* let totalOverlapping = 0
listMutated.forEach((el) => {
    if (el[0].includes(el[1]) || el[1].includes(el[0])) {
        totalOverlapping += 1
    }
})
console.log(listMutated) */
// console.log(totalOverlapping)
// NOT SURE WHY NOT WORKING  -- this gives me answer of 652,   answer should be 644
// here is someone's solution that worked

/* document
    .querySelector('pre')
    .innerText.split('\n')
    .filter(e => e !== '')
    .map(pair => {
        const [elf1Range, elf2Range] = pair.split(',');
        const [elf1RangeFrom, elf1RangeTo] = elf1Range.split('-').map(val => Number(val));
        const [elf2RangeFrom, elf2RangeTo] = elf2Range.split('-').map(val => Number(val));
        return (elf1RangeFrom >= elf2RangeFrom && elf1RangeTo <= elf2RangeTo) || (elf2RangeFrom >= elf1RangeFrom && elf2RangeTo <= elf1RangeTo);
    })
    .filter(contained => contained)
    .length;
 */


// ---------------------------- 12-08  6kyu------------------------------------------------
/*  In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc. */

function alphabetPosition(text) {
    let list = 'abcdefghijklmnopqrstuvwxyz'.split('')

    text = text.toLowerCase().split('')
        .filter(el => isNaN(el))

        .map(el => {
            let check = list.indexOf(el) + 1

            return check === -1 ? el : check
        })
        .filter(el => !isNaN(el) && el !== ' ' && el !== 0)
        .join(' ')

    return text
}

// console.log(alphabetPosition("The sunset sets at twelve o' clock."))
// console.log(alphabetPosition("y5<{ic)f"))

// ---------------------------- 12-08  6kyu #2 ------------------------------------------------

/* you need to create a fibonacci function that given a signature array/list, returns the first n elements
 - signature included of the so seeded sequence. */


function tribonacci(sig, n) {

    if (n <= 3) return sig.slice(0, n)
    else
        for (let i = 2; i < n - 1; i++) {
            let seqToCheck = [sig[i - 2], sig[i - 1], sig[i]]
            let currentPush = seqToCheck.reduce((acc, curr) => acc + curr)
            sig.push(currentPush)
        }
    return sig
}

/* console.log(tribonacci([1, 1, 1], 10))   // [1,1,1,3,5,9,17,31,57,105]
console.log(tribonacci([0, 0, 1], 10))  //  [0,0,1,1,2,4,7,13,24,44]  
console.log(tribonacci([0, 0, 1], 2))  //  [0,0,1,1,2,4,7,13,24,44]   */

// best voted solution is like mine, but cleaner
function tribonacci2(signature, n) {
    for (var i = 0; i < n - 3; i++) { // iterate n times
        signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
    }
    return signature.slice(0, n); //return trib - length of n
}


//    ----------------- 12-09   7kyu --------------------------------

/* create a program that removes any unneccessary characters and return the corrected list.
The expected characters are digits, ' $ ', and ' . ' All items in the returned list are expected to be strings.

For example:
a1 = ['$5.$6.6x.s4', '{$33ae.5(9', '$29..4e9', '%.$9|4d20', 'A$AA$4r R4.94']
remove_char(a1) 
>>> ['$56.64', '$33.59', '$29.49', '$94.20', '$44.94'] */


function removeExtraChar(arr) {

    arr = arr.map(str => {

        str = str.split('').slice(str.indexOf('$'))

            .filter(el => el !== ' ')  // starting string from first bling
        str = str
            .filter((el, i) => !isNaN(Number(el))
                || i === str.indexOf('.')
            ).join('') //left here!! 
        console.log(str)
        return str = '$' + str

    })
    return arr
}
// console.log(removeExtraChar(['$5.$6.6x.s4', '{$33ae.5(9', '$29..4e9', '%.$9|4d20', 'A$AA$4r R4.94']))

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


// ---------------------------- 12-10  advent of code ------------------------------------------------
/* 
    --- Day 5: Supply Stacks ---
    The expedition can depart as soon as the final supplies have been unloaded from the ships. Supplies are stored in stacks of marked crates, but because the needed supplies are buried under many other crates, the crates need to be rearranged.
    
    The ship has a giant cargo crane capable of moving crates between stacks. To ensure none of the crates get crushed or fall over, the crane operator will rearrange them in a series of carefully-planned steps. After the crates are rearranged, the desired crates will be at the top of each stack.
    
    The Elves don't want to interrupt the crane operator during this delicate procedure, but they forgot to ask her which crate will end up where, and they want to be ready to unload them as soon as possible so they can embark.
    
    They do, however, have a drawing of the starting stacks of crates and the rearrangement procedure (your puzzle input). For example:
    
        [D]    
    [N] [C]    
    [Z] [M] [P]
     1   2   3 
    
    move 1 from 2 to 1
    move 3 from 1 to 3
    move 2 from 2 to 1
    move 1 from 1 to 2
    In this example, there are three stacks of crates. Stack 1 contains two crates: crate Z is on the bottom, and crate N is on top. Stack 2 contains three crates; from bottom to top, they are crates M, C, and D. Finally, stack 3 contains a single crate, P.
    
    Then, the rearrangement procedure is given. In each step of the procedure, a quantity of crates is moved from one stack to a different stack. In the first step of the above rearrangement procedure, one crate is moved from stack 2 to stack 1, resulting in this configuration:
    
    [D]        
    [N] [C]    
    [Z] [M] [P]
     1   2   3 
    In the second step, three crates are moved from stack 1 to stack 3. Crates are moved one at a time, so the first crate to be moved (D) ends up below the second and third crates:
    
            [Z]
            [N]
        [C] [D]
        [M] [P]
     1   2   3
    Then, both crates are moved from stack 2 to stack 1. Again, because crates are moved one at a time, crate C ends up below crate M:
    
            [Z]
            [N]
    [M]     [D]
    [C]     [P]
     1   2   3
    Finally, one crate is moved from stack 1 to stack 2:
    
            [Z]
            [N]
            [D]
    [C] [M] [P]
     1   2   3
    The Elves just need to know which crate will end up on top of each stack; in this example, the top crates are C in stack 1, M in stack 2, and Z in stack 3, so you should combine these together and give the Elves the message CMZ.
    
    After the rearrangement procedure completes, what crate ends up on top of each stack? */

let text;
formatAndOrganizeText()
function formatAndOrganizeText() {
    text = document
        .querySelector('pre')
        .innerText.split('\n')
    for (let i = 0; i < text.length; i++) {
        text[i] = text[i].replace(/\s/g, '')
    }
    text = text.filter(e => e !== '')
}
// let others = text.splice(0, 9)

function stack() {
    return {
        s1: ['S', 'T', 'H', 'F', 'W', 'R'],
        s2: ['S', 'G', 'D', 'Q', 'W'],
        s3: ['B', 'T', 'W'],
        s4: ['D', 'R', 'W', 'T', 'N', 'Q', 'Z', 'J'],
        s5: ['F', 'B', 'H', 'G', 'L', 'V', 'T', 'Z'],
        s6: ['L', 'P', 'T', 'C', 'V', 'B', 'S', 'G'],
        s7: ['Z', 'B', 'R', 'T', 'W', 'G', 'P',],
        s8: ['N', 'G', 'M', 'T', 'C', 'J', 'R'],
        s9: ['L', 'G', 'B', 'W']
    }
}
let stack1 = stack()
let stack2 = stack()

text.forEach((directions) => {
    directions = directions.split('')
    moveCrate(directions, 'crane9000')
});

text.forEach((directions) => {
    directions = directions.split('')
    moveCrate(directions, 'crane9001')
});

function moveCrate(dir, craneType) {

    let numCratesToMove = Number(dir.slice(dir.indexOf('e') + 1, dir.indexOf('f')).join(''))
    let from = 's' + (dir.slice(dir.indexOf('t') - 1, dir.indexOf('t')).join(''))
    let to = 's' + dir.pop()

    if (craneType === 'crane9000') {
        let stackOfCrates = stack1[from].splice(stack1[from].length - numCratesToMove, numCratesToMove)
        for (let i = stackOfCrates.length - 1; i >= 0; i--) {  // push each crate to new array
            stack1[to].push(stackOfCrates[i])
        }
    } else if (craneType === 'crane9001') {
        let stackOfCrates = stack2[from].splice(stack2[from].length - numCratesToMove, numCratesToMove)
        stack2[to] = stack2[to].concat(stackOfCrates)
    }
}


cl('final stacks for 1')
cl(stack1)
cl('')

cl('final stacks for 2')
cl(stack2)

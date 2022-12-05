// ----------------- 12-04 ---------------------------
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

let list = document.querySelector('pre').innerHTML.split('\n')
list = list.splice(0, list.length - 1)
console.log(list)
let totalOverlapping = 0
let listMutated = list.map((el, i) => {
    el = list[i].split(',')

    // if (el === '') list.splice(i, 1)

    el[0] = fillInNumsInRange(el[0]);
    el[1] = fillInNumsInRange(el[1]);
    console.log(el[0])
    console.log(el[1])

    if (el[0].includes(el[1]) || el[1].includes(el[0])) {
        totalOverlapping += 1
    }
    console.log(totalOverlapping)
    console.log('|')
    return el
})

/* let totalOverlapping = 0
listMutated.forEach((el) => {
    if (el[0].includes(el[1]) || el[1].includes(el[0])) {
        totalOverlapping += 1
    }
})
console.log(listMutated) */
console.log(totalOverlapping)
// NOT SURE WHY NOT WORKING  -- this gives me answer of 652,   answer should be 644
// here is someone's solution that worked

document
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
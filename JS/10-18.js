// sort nums
//array to be sorted
let arrX = [];

document.querySelector('#addNumsButton').addEventListener('click', addToArrX)
function addToArrX() {
    var addedNum = document.querySelector('#addNumsHere').value
    console.log(arrX += addedNum)
}
document.querySelector('#sortNumsButton').addEventListener('click', sortAndReveal)
arrX.push(userAddedNum)
function sortAndReveal() {
    let sortedArrX = arrX.sort((a, b) => a - b)
    document.querySelector('#sortedNumsGoHere').innerText += sortedArrX
}



// -------------------             5       ------------
/* We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy. */

let arrWords = ["HTML", "JavaScript", "CSS", "Breland", "ransatklne"];

function sortWords() {
    return arrWords.slice().sort();
}
let sorted1 = sortWords()
console.log(sorted1)
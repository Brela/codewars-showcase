/* Take an array and remove every second element from the array.
 Always keep the first element and start removing with the next element. */


// MINE

function removeEveryOther(arr) {
    return arr.filter((el, i) => i % 2 === 0 ? true : false);
}



console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again', "Keep", "Remove", "Keep", "Remove"]))
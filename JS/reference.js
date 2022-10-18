
// ----------------------- .filter() ---------------------------------
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
    // if true item is pushed to results and the iteration continues
    // returns empty array if nothing found
}
let arr = [1, 2, 8, 3, 5, 4, 8, 0, 1, 9]
let filtered = filterRange(arr, 1, 4)
console.log(filtered); // 3,1 (matching values)

console.log(arr); // 5,3,8,1 (not modified)

//---------------------------------------------------------------------
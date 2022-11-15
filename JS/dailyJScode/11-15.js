
/* Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7] */

// MINE 

function largest(n, arr) {
    return arr.sort((a, b) => b - a) // sorted largest to smallest
        .slice(0, n) // remove the first (n) numbers off the front of list
}
// ---------------------------------------------------------------------------------------------------

console.log(largest(2, [7, 6, 5, 4, 3, 2, 1]))


// BEST VOTED

function largest(n, xs) {
    return xs.sort(function (a, b) { return a - b; }).slice(xs.length - n);
    // this one is simialr to mine, it just gives the .slice method one parameter, the starting index
}
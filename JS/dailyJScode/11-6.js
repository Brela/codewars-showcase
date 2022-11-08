/* Complete the function that returns an array of length n, 
starting with the given number x and the squares of the previous number. 
If n is negative or zero, return an empty array/list.

Examples
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81] */

// MINE


function squares(x, n) {
    let arr = [x]
    if (n > 0) {
        for (let i = 1; i < n; i++) {
            x = x * x
            arr.push(x)
        }
        return arr
    } else {
        return x = []
    }
} // ---------------------------------------------


console.log(squares(2, 5))
console.log(squares(3, 3))
console.log(squares(5, 3))


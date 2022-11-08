// MINE 

function sumOfDifferences(arr) {
    let sortDes = arr.sort((a, b) => b - a)
    let subtractConsecutive = []
    for (let i = 0; i < sortDes.length; i++) {
        let difference = sortDes[i] - sortDes[i + 1]
        isNaN(difference) ? false : subtractConsecutive.push(difference);
    }
    return subtractConsecutive.reduce((prev, current) => prev + current, 0)
}

// TEST
console.log(sumOfDifferences([9, 20, -7, -12, -2, -12, 18, -3, -1, -23, 80]))



// BEST

function sumOfDifferences(arr) {
    arr
        .sort((a, b) => b - a)
        .map((a, i) => a - arr[i + 1] || 0)
        .reduce((a, b) => a + b, 0);
}
// -------------------------------------------------------------------------



//Your task is to sum the differences between consecutive pairs in the array in descending order.
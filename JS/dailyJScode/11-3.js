//calculate average

// MINE is best

function getAverage(marks) {
    return marks.reduce((prev, current) => current += prev) / marks.length
}

console.log(getAverage([1, 2, 3, 4, 5,]));
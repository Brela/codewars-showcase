/* Got cat and dog at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]
Formula: 
Cat Years
15 cat years for first year
    + 9 cat years for second year
        + 4 cat years for each year after that
Dog Years
15 dog years for first year
    + 9 dog years for second year
        + 5 dog years for each year after that
 */

//MINE

var humanYearsCatYearsDogYears = function (human) {
    let cat = 0;
    let doge = 0;
    if (human === 1) {
        cat = 15
        doge = 15
    } else if (human === 2) {
        cat = 24
        doge = 24
    } else {
        cat = 24 + 4 * human
        doge = 24 + 5 * human
    }
    return [human, cat, doge];
}

//BEST VOTED

var humanYearsCatYearsDogYears = function (y) {
    if (y == 1) return [1, 15, 15]
    if (y == 2) return [2, 24, 24]
    return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24]
}
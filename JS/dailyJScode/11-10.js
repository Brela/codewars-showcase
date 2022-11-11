
/* accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt" */
// make each element from array uppercase + lowercase * incremented multiplier, then join with dashes between


// MINE

function accum(str) {
    let s = str.split('')
    let newArr = []
    for (let i = 0; i < s.length; i++) {
        newArr.push(s[i].toUpperCase() + s[i].toString().toLowerCase().repeat(i))
    }
    return newArr.join('-')
}



// BEST

function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}


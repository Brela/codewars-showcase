

/* Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1. */

// Return an array

function fizzbuzz(n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            arr.push('FizzBuzz')
        } else if (i % 3 === 0) {
            arr.push('Fizz')

        } else if (i % 5 === 0) {
            arr.push('Buzz')
        } else {
            arr.push(i)
        }
    }
    return arr
}
console.log(fizzbuzz(16))
//-----------------------------------------------------------------------



// ALTERNATE SOLUTION FROM OTHERS
function fizzify(i) {
    if (i % 15 == 0)
        return 'FizzBuzz';
    else if (i % 5 == 0)
        return 'Buzz';
    else if (i % 3 == 0)
        return 'Fizz';
    else
        return i;
}

// Return an array
function fizzbuzz(n) {
    var res = [];
    for (var i = 1; i <= n; ++i) res.push(fizzify(i));
    return res;
}
//-----------------------------------------------------------------------
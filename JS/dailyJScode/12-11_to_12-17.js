let cl = console.log
////////////////////////// 12-12 ////////////////////////////////
/* Primes that have only odd digits are pure odd digits primes, obvious but necessary definition. Examples of pure odd digit primes are: 11, 13, 17, 19, 31... If a prime has only one even digit does not belong to pure odd digits prime, no matter the amount of odd digits that may have.

Create a function, only_oddDigPrimes(), that receive any positive integer n, and output a list like the one below: 
only_oddDigPrimes(20) ----> [7, 19, 31]
///7, beacause we have seven pure odd digit primes below 20 and are 3, 5, 7, 11, 13, 17, 19
19, because is the nearest prime of this type to 20
31, is the first pure odd digit that we encounter after 20///

only_oddDigPrimes(40)----> [9, 37, 53]*/


console.log(onlyOddDigPrimes(40))
function onlyOddDigPrimes(n) {
    let oddDigiPrimes = []
    // checking which nums up to n are pure odd primes
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {  // is odd? then check these:
            if (checkIfDigiIsPrime(i) && isPure(i)) oddDigiPrimes.push(i)
        }
    }
    function checkIfDigiIsPrime(i) {
        let checker = 0
        let iSplit = String(i).split('')
        iSplit.forEach(el => { if (el % 2 !== 0) checker += 1 })
        if (checker === iSplit.length) {
            return true
        }
    }
    function isPure(num) {
        let count = 0
        for (let j = num; j > 1; j--) {
            if (num % j === 0) count += 1
        }
        // count = 1 means number is only divisible by itelf and one and nothing else, I checked for the num itself but not 1
        if (count != 1) return false
        else return true
    }
    let nextDigi = 0
    while (!nextDigi) {
        if (checkIfDigiIsPrime(n) && isPure(n)) { nextDigi = n }
        n++
    }
    return [oddDigiPrimes.length, oddDigiPrimes[oddDigiPrimes.length - 1], nextDigi]
}
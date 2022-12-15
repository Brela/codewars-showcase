let cl = console.log
////////////////////////// 12-12  6kyu ////////////////////////////////
/* Primes that have only odd digits are pure odd digits primes, obvious but necessary definition. Examples of pure odd digit primes are: 11, 13, 17, 19, 31... If a prime has only one even digit does not belong to pure odd digits prime, no matter the amount of odd digits that may have.

Create a function, only_oddDigPrimes(), that receive any positive integer n, and output a list like the one below: 
only_oddDigPrimes(20) ----> [7, 19, 31]
///7, beacause we have seven pure odd digit primes below 20 and are 3, 5, 7, 11, 13, 17, 19
19, because is the nearest prime of this type to 20
31, is the first pure odd digit that we encounter after 20///

only_oddDigPrimes(40)----> [9, 37, 53]*/


// console.log(onlyOddDigPrimes(40))
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

////////////////////////// 12-13 6kyu////////////////////////////////
/* You will be given a string as a parameter letting you know the current time. The passed string will be given in the form:

"Monday 12:35"
Your task is to create a function which lets you know either:

-When the library closes if it is open or,

-When the library opens if it is closed.

If the library is closed and opens later in the current day, you want your return string to say:

"Library opens: today XX:XX"

Opening Times -
Monday:  08:00 - 20:00 
Tuesday:  08:00 - 20:00
Wednesday:  08:00 - 20:00
Thursday:  08:00 - 20:00
Friday:  08:00 - 20:00
Saturday:  10:00 - 18:00
Sunday:  12:00 - 16:30

*/



/* cl(openingTimes("Monday 24:30")); //returns "Library closes at 20:00"
cl('----')
cl(openingTimes("Saturday 00:00")); //returns "Library opens: today 10:00"
cl('----')
cl(openingTimes("Tuesday 20:00")); //returns "Library opens: Wednesday 08:00"
cl('----')
cl(openingTimes("MoNDay 07:59")); //returns "Library opens: today 08:00"
cl('----')
cl(openingTimes("Tuesday 13:61")); //returns "Invalid time!"
cl('----')
cl(openingTimes("wednsay 12:40")); //returns "Invalid time!" 
cl('----')
cl(openingTimes("wednesday 12:40")); //returns "Invalid time!" 
cl('----')
     */

function openingTimes(str) {
    cl(str)
    const hours = {
        monday: { open: 0800, close: 2000 },
        tuesday: { open: 0800, close: 2000 },
        wednesday: { open: 0800, close: 2000 },
        thursday: { open: 0800, close: 2000 },
        friday: { open: 0800, close: 2000 },
        saturday: { open: 1000, close: 1800 },
        sunday: { open: 1200, close: 1630 },
    }
    str = str.toLowerCase().split(' ')
    let day = str[0]; let time = str[1]
    time = Number(time.split(':').join(''))         // turn time into a number
    if (!verifyDayIsValid(day) || !verifyTimeIsValid(str[1])) {
        return "Invalid time!"
    }
    let open = hours[day].open, close = hours[day].close   //get open and close from hours object
    // if time is before today's opening time, return today's opening time
    if (time < open) return `Library opens: today ${convertNumToTime(open)}`
    // if time is between current day's open and closing time, return closing time
    if (open < time && time < close) return `Library closes at ${convertNumToTime(close)}`
    // if time is after today's closing time, return tomorrow's (num +1) opening time
    if (close <= time) {
        let tomorrow = findWhatDayTomorrowIs(day)
        let tomorrowCapitalized = capitalizeFirstLetter(tomorrow)
        let openTime = convertNumToTime(hours[tomorrow].open)
        return `Library opens: ${tomorrowCapitalized} ${openTime}`
    }
    // fucntion to turn a number like 2000 to a time 20:00
    function convertNumToTime(n) {
        let x = String(n).split('')
        if (x.length === 3) x.unshift('0')
        x.splice(2, 0, ":")
        return x.join('')
    }
    function findWhatDayTomorrowIs(day) {
        if (day === 'sunday') return 'monday'
        let keys = Object.keys(hours);
        let nextIndex = keys.indexOf(day) + 1;
        let nextDay = keys[nextIndex];
        return nextDay
    }
    function capitalizeFirstLetter(word) {
        word = word.split('')
        word[0] = word[0].toUpperCase()
        return word.join('')
    }
    function verifyDayIsValid(day) {
        let keys = Object.keys(hours);
        // console.log('is day valid? ' + day + ' ' + keys.some(el => el === day))
        return keys.some(el => el === day)
    }
    function verifyTimeIsValid(time) {
        time = time.split(':')
        let checkHours = time[0]; let checkMins = time[1]
        if ((checkHours > 24) || (checkMins > 59) || (checkHours == 24 && checkMins >= 0)) {
            return false
        } else return true
    }
}



////////////////////////// 12-15 5kyu////////////////////////////////
/* The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false */

console.log(generateHashtag("You are going to succeed"))
console.log(generateHashtag(" burning desire"))

// MINE
function generateHashtag(str) {
    if (str === '') return false
    str = str.split(' ').filter(el => el !== '')
        .map(word => capitalizeFirstLetter(word))
    str.unshift('#')
    console.log(str)
    str = str.join('')

    function capitalizeFirstLetter(word) {
        word = word.split('')
        word[0] = word[0].toUpperCase()
        return word.join('')
    }

    if (str.length > 140 || str === '' || str === '#') return false
    return str
}

// BEST VOTED
function generateHashtag(str) {
    if (!str || str.length < 1) return false;

    var r = '#' + str.split(' ').map(function (el) {
        return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
    }).join('');
    return r.length > 140 ? false : r;
}
//----------------------------------------------------------------------------------------
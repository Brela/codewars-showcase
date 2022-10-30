
/* In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
 */

// MINE
function solve(s) {
    const specialList = `[\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/`
    const lowerList = `abcdefghijklmnopqrstuvwxyz`
    const upperList = `abcdefghijklmnopqrstuvwxyz`.toUpperCase()
    let upperCaseCount = lowerCaseCount = numberCount = specialCharCount = 0
    let str = s.split('')
    str.forEach((el, i) => {
        if (lowerList.includes(el)) {
            lowerCaseCount += 1
        } else if (upperList.includes(el)) {
            upperCaseCount += 1
        } else if (specialList.includes(el)) {
            specialCharCount += 1
        } else {
            numberCount += 1
        }
    })
    return [upperCaseCount, lowerCaseCount, numberCount, specialCharCount]
}

// BEST
const solve2 = (string) => (
    Object.values([...string].reduce((acc, char) => {
        if (/[A-Z]/.test(char)) {
            acc.upper++;
        } else if (/[a-z]/.test(char)) {
            acc.lower++;
        } else if (/[0-9]/.test(char)) {
            acc.number++;
        } else {
            acc.other++;
        }
        return acc;
    }, { upper: 0, lower: 0, number: 0, other: 0 }))
);

solve2("*'&ABCDab*cde12345")
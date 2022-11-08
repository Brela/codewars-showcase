//ASSIGNMENT
/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
 */

//MINE


function XO(str) {
    let splitStr = str.toLowerCase().split("")
    let Xs = []
    let Os = []
    splitStr.forEach(el => {
        if (el === 'x') {
            Xs.push(el)
        } else if (el === 'o') {
            Os.push('o')
        }
    })
    return Xs.length === Os.length ? true : false;
}

//---------------------------------------------------------------------------------
console.log(XO('iuhdxXXoOOihsdOoXx'))

//BEST


function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}
// OR
const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}
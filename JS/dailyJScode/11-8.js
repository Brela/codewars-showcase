/* Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized
(known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized. */

/* function toCamelCase(str) {
    var indices = [];
    for (let i = 0; i < str.length; i++) {  // find indices of '-'
        if (str[i] === "-") indices.push(i);
        if (str[i] === "_") indices.push(i);
    }
    for (let i = 0; i < indices.length; i++) {
        str = str.replace(str.charAt(indices[i] + 1), str.charAt(indices[i] + 1).toUpperCase())
    }
    for (let i = 0; i < indices.length; i++) {
        str = str.replace('-', '')
        str = str.replace('_', '')
    }
    return str
} */
function toCamelCase(stri) {
    let str = stri.split(/-|_/)
    console.log(str)
    for (let i = 1; i < str.length; i++) {

    }
}


console.log(toCamelCase("a-Tippi-is-Hungry"))
// console.log('aTippiIsHungry')

console.log(toCamelCase("The-Sippi_is_Savage"))
// console.log('TheSippiIsSavage')

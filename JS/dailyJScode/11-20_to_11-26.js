// ================================ 11-20   ===============================

/* An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK" */

//need to check for each item in test onto original and figure out if anagram can be not same length as original

// MINE
function isAnagram(test, original) {
    original = original.toLowerCase()
    if (test.length !== original.length) {
        return false;
    } else {
        var test = test.toLowerCase().split('')
        for (let i = 0; i < original.length; i++) {
            if (test.includes(original[i])) {
                let index = test.indexOf(original[i])
                // if test word includes the letter being tested from original word, 
                //the index of that first letter is found in test word so that it can be removed with splice
                test.splice(index, 1)
            }
        }
        return test.length === 0 ? true : false;
    }
};

// BEST VOTED
var isAnagram = function (test, original) {
    var t = test.toLowerCase().split('').sort().join('');
    var o = original.toLowerCase().split('').sort().join('');
    return (t == o) ? true : false;
};

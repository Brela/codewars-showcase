// 10-14 __ 1st

/* //Every day you rent the car costs $40. If you rent the car for 7 or more days, 
you get $50 off your total. Alternatively, if you rent the car for 3 or more days, 
you get $20 off your total.
 */

//mine
function rentalCarCost(d) {
    if (d <= 3) {
        return d * 40
    } else if (d < 7) {
        return d * 40 - 20
    } else {
        return d * 40 - 50
    }
}
// ----------------------------------------------------------

//best for shortness
function rentalCarCost(d) {
    return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
}

//best for separating the discounted rate into its own function
function baseCost(days, rate) {
    return days * rate;
}

function discountRate(days) {
    if (days >= 7) {
        return 50;
    }
    else if (days >= 3) {
        return 20;
    }
    else {
        return 0;
    }
}

function rentalCarCost(days) {
    return baseCost(days, 40) - discountRate(days);
}




//10-14 ___ 2nd
/* 
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not. */

//mine

function checkForItem(arrEls, elToCheck) {
    return arrEls.includes(elToCheck) ? true : false
}

//best

const check = (a, x) => a.includes(x);

console.log(checkForItem(['what', 'a', 'great', 'day'], 'what'))
console.log(checkForItem(['what', 'a', 'great', 'day'], 'bam'))
console.log(checkForItem([3, 4, 7, 8], 3))
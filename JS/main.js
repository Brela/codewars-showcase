//prevent default page reload on click
document.querySelector('button').addEventListener('click', function handleClick(event) {
    event.preventDefault();
});
//from now on USE BEST SOLUTION FOR CODE TO CONSOLIDATE AND SAVE ON SPACE
//---------------------------------------------------------------------------------------------------------
// ------------------            10-20 Xs vs Os        ----------------------------------------------------
let yearToCenturyInput = document.querySelector('#yearToCenturyInput')
yearToCenturyInput.addEventListener('keypress', (event) => {
    let keyCode = event.keyCode ? event.keyCode : event.which;
    if (keyCode === 13) {
        return convertYear_Century();
    }
});

function convertYear_Century() {
    let yearToCenturySol = Math.ceil(Number(yearToCenturyInput.value) / 100)
    console.log(yearToCenturySol)
    document.querySelector('#yearToCenturyResult').innerText = yearToCenturySol
}


//---------------------------------------------------------------------------------------------------------
// ------------------            10-20 Xs vs Os        ----------------------------------------------------

//enter key eventListener for Xs Os
let inputXsOs = document.querySelector('#enterXsOsString')
inputXsOs.addEventListener('keypress', (event) => {
    let keyCode = event.keyCode ? event.keyCode : event.which;
    if (keyCode === 13) {
        return checkXsVsOs();
    }
});

//CHECK STRING FOR XS VS OS
document.querySelector('#checkXoSringButton').addEventListener('click', checkXsVsOs)
function checkXsVsOs() {
    let stringXsOs = inputXsOs.value.toLowerCase().split('');
    let resultXsOs = stringXsOs.filter(x => x === 'x').length === stringXsOs.filter(x => x === 'o').length ? 'true' : 'false';
    document.querySelector('#resultXsOsHere').innerText = resultXsOs;
    inputXsOs.value = ""; //clearinput
}

// CLEAR INPUTS WITH CLEAR BUTTON 
/* document.querySelector('#clearXsOs').addEventListener('click', () => {
    document.querySelector('#unsortedWordsGoHere').innerText = ""
    document.querySelector('#sortedWordsGoHere').innerText = ""
});
 */
//--------------------------------------------------------------------------------------------
// ------------------            10-19 SORT WORDS        -------------------------------------

//enter key eventListener
document.querySelector('#addWordsHere').addEventListener('keypress', (event) => {
    let keyCode = event.keyCode ? event.keyCode : event.which;
    if (keyCode === 13) {
        return addWords();
    }
});
let arrWords = [];
let wordInput = document.querySelector('#addWordsHere')

//ARRAY TO BE SORTED, CREATED FROM WORDS ENTERED INTO INPUT
document.querySelector('#addWordsButton').addEventListener('click', addWords)
function addWords() {
    let newWord = wordInput.value;
    //this is where the numbers are added to the array (arrWords)
    arrWords.push(` ${newWord}`)
    document.querySelector('#unsortedWordsGoHere').innerText = arrWords;
    wordInput.value = ""; //clearinput

}

//SORT ARRAY AND DISPLAY
let sortedWords = 0;
document.querySelector('#sortWordsButton').addEventListener('click', () => {

    sortedWords = arrWords.sort((a, b) => a > b ? 1 : -1)


    document.querySelector('#sortedWordsGoHere').innerText = sortedWords
});

// CLEAR INPUTS WITH CLEAR BUTTON 
document.querySelector('#clearWords').addEventListener('click', () => {
    document.querySelector('#unsortedWordsGoHere').innerText = ""
    document.querySelector('#sortedWordsGoHere').innerText = ""
    arrWords = []
});

//--------------------------------------------------------------------------------------------
// ------------------            10-18 sort nums        ----------------------------------------

//enter key eventListener
document.querySelector('#addNumsHere').addEventListener('keypress', (event) => {
    let keyCode = event.keyCode ? event.keyCode : event.which;
    if (keyCode === 13) {
        return addNums();
    }
});
let arrX = [];
let numInput = document.querySelector('#addNumsHere')

//ARRAY TO BE SORTED, CREATED FROM NUMBERS ENTERED INTO INPUT
document.querySelector('#addNumsButton').addEventListener('click', addNums)
function addNums() {
    let newNum = numInput.value;
    if (isNaN(newNum) || newNum === '') {
        numInput.value = 'please enter a number'
    } else { //this is where the numbers are added to the array (arrX)
        arrX.push(` ${newNum}`)
        document.querySelector('#unsortedNumsGoHere').innerText = arrX;
        numInput.value = ""; //clearinput
    }
}

//SORT ARRAY AND DISPLAY
let sortedNums = 0;
document.querySelector('#sortNumsButton').addEventListener('click', () => {
    sortedNums = arrX.sort((a, b) => a - b)

    document.querySelector('#sortedNumsGoHere').innerText = sortedNums
});

// CLEAR INPUTS WITH CLEAR BUTTON 
document.querySelector('#clearNums').addEventListener('click', () => {
    document.querySelector('#unsortedNumsGoHere').innerText = ""
    document.querySelector('#sortedNumsGoHere').innerText = ""
    arrX = []
});





//--------------------------------------------------------------------------------------------
// ------------------            10-14 days to rent car        ---------------------------

let rentalCostClick = document.querySelector('#rentalConvertSpartan')
rentalCostClick.addEventListener('click', rentalCarCost)

//When the keypress event occurs, the event object will contain the data of which key is pressed. The code of the pressed key will be present in keyCode or the which property of the event object.
document.querySelector('#rentalDaysInput').addEventListener('keypress', (event) => {
    let keyCode = event.keyCode ? event.keyCode : event.which;
    //So, we check if the pressed keycode is equal to the Enter key code (13)
    if (keyCode === 13) {
        // call click function on Enter
        return rentalCarCost();
    }
});

function rentalCarCost() {

    let d = document.querySelector('#rentalDaysInput').value
    costOfRental = d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
    document.querySelector('#costOfRental').innerText = ""
    document.querySelector('#costOfRental').innerText += `$${costOfRental}`
}


//--------------------------------------------------------------------------------------------
// ------------------            10-13 convert name to initials       ------------------------

document.querySelector('#nameConvertSpartan').addEventListener('click', abbrevName)
document.querySelector('#nameInput').addEventListener('keypress', (event) => {
    let keyCode = event.keyCode ? event.keyCode : event.which;
    //So, we check if the pressed keycode is equal to the Enter key code (13)
    if (keyCode === 13) {
        // call click function on Enter
        return abbrevName();
    }
});

function abbrevName() {
    let fName = document.querySelector('#nameInput').value
    let nameArray = fName.toUpperCase().split("")
    let firstNameLetter = nameArray[0]
    let lastNameLetter = nameArray[nameArray.indexOf(" ") + 1]
    document.querySelector('#nameConvertResult').innerText = ""
    document.querySelector('#nameConvertResult').innerText += ` ${firstNameLetter}.${lastNameLetter}`
}

//--------------- ^^^^^^^^^^^  beginning of daily entries ^^^^^^^^^^^^^^ -----------
//===========================================================================================================




const itemList = document.querySelectorAll('.dropdown')


function clearStick() {
    const stickItems = document.querySelectorAll('.dropdown-content')
    stickItems.forEach(el => {
        el.classList.remove('stick')
    })
}
//                             -----------------------------------------------
//convert aDate (ID) to xDate (CLASS), call clearStick, 
//then toggle its stick (display: block)

itemList.forEach((el, index) => el.addEventListener('click', () => {
    var aDate = itemList[index].id
    var xDate = '.' + aDate.replace(aDate[0], 'x')
    clearStick()
    console.log('ok')
    document.querySelector(xDate).classList.toggle('stick')

}))

// notes

//do function on 'enter' key hit

/* When the keypress event occurs, the event object will contain the data of which
key is pressed. The code of the pressed key will be present in keyCode or the which
property of the event object. */
/* document.querySelector('#addNumsHere').addEventListener('keypress', (event) => {
    let keyCode = event.keyCode ? event.keyCode : event.which;
    //So, we check if the pressed keycode is equal to the Enter key code (13)
    if (keyCode === 13) {
        // call click function on Enter
        return addNums();
    }
}); */

//     this is fot the caret dropdown, doesn't work yet
/* document.querySelector('#fa-play').onmouseenter = () => {
    document.querySelector('#fa-caret-down').classList.add('fa-caret-down')
}
document.querySelector('#fa-play').addEventListener('click', () => {
    document.querySelector('#fa-caret-down').classList.add('fa-caret-down')
})
 */



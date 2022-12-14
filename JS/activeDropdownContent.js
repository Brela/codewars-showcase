$(document).ready(function () {
    // enter key hit plugin to be reused
    $.fn.enterKey = function (fnc) {
        return this.each(function () {
            $(this).keypress(function (ev) {
                var keycode = (ev.keyCode ? ev.keyCode : ev.which);
                if (keycode == '13') {
                    fnc.call(this, ev);
                }
            })
        })
    }
    // checks if keyhit was enterKey and returns the function to be activated with the input value as it's parameter
    function checkKeycode(event, input, funcToBeActivated) {
        let keyCode = event.keyCode ? event.keyCode : event.which;
        if (keyCode === 13) {
            return funcToBeActivated(input.value);
        }
    }
    // I wanted to consoldate the 'make function happen on enter key' functions into one. 
    // To do this I have to pass the function to be executed as a parameter (callback function)
    // and therfore had to make each of those code blocks as a function expression to be passed an arg
    // so for these ones that utilize this 'checkKeycode funciton' the code that activates them and inserts to dom is below the code block for that day

    //---------------------------------------------------------------------------------------------------------
    // ------------------            12-13          ----------------------------------------------------

    let openingTimes = function (str) {
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
        if (time.length === 3) time.unshift('0')
        if (!verifyDayIsValid(day)) return "Invalid day"
        if (!verifyTimeIsValid(str[1])) return "Invalid time"
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

    let libraryTimeInput = document.querySelector('#libraryTimeInput')
    libraryTimeInput.addEventListener('keypress', (event) => checkKeycode(event, libraryTimeInput, insertLibraryValueToDom))
    let insertLibraryValueToDom = function (val) {
        document.querySelector('#libraryTimeResult').innerText = openingTimes(val)
    }
    libraryTimeButton.addEventListener('click', insertLibraryValueToDom)

    //---------------------------------------------------------------------------------------------------------
    // ------------------            11-10          ----------------------------------------------------
    let stringWithDashesInput = document.querySelector('#stringWithDashesInput')
    stringWithDashesInput.addEventListener('keypress', (event) => checkKeycode(event, stringWithDashesInput, accum))

    /*   (event) => {
          let keyCode = event.keyCode ? event.keyCode : event.which;
          if (keyCode === 13) {
              return accum(stringWithDashesInput.value);
          }
      }); */
    let accum = function (s) {
        let stringWithDashesAnswer = s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
        document.querySelector('#stringWithDashesResult').innerText = stringWithDashesAnswer
    }



    //---------------------------------------------------------------------------------------------------------
    // ------------------            11-6   square X by N      ----------------------------------------------------
    let squareXbyNinput1 = document.querySelector('#squareXbyNinput1')
    let squareXbyNinput2 = document.querySelector('#squareXbyNinput2')
    squareXbyNinput2.addEventListener('keypress', (event) => {
        let keyCode = event.keyCode ? event.keyCode : event.which;
        if (keyCode === 13) {
            return squareXbyN(squareXbyNinput1.value, squareXbyNinput2.value);
        }
    });
    function squareXbyN(x, n) {
        console.log(x, n)
        let arr = [x]
        if (n > 0) {
            for (let i = 1; i < n; i++) {
                x = x * x
                arr.push(` ${x} `)
            }
            console.log(arr)
            document.querySelector('#squareXbyNresult').innerText = String(arr).split(',  ')
        } else {
            document.querySelector('#squareXbyNresult').innerText = 'square must be greater than 0'
        }
    }
    // squareXbyN(3, 4)


    //from now on USE BEST SOLUTION FOR CODE TO CONSOLIDATE AND SAVE ON SPACE
    //---------------------------------------------------------------------------------------------------------
    // ------------------            10-30 Count each Char type        ----------------------------------------------------

    let listOfIntCountInput = $('#listOfIntCountInput')
    $(listOfIntCountInput).enterKey(function () {
        console.log($('#listOfIntCountInput').val())
        countOfEachCharType($('#listOfIntCountInput').val())
    })
    function countOfEachCharType(s) {
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
        $('#listOfIntCountResult').text(`upperCase: ${upperCaseCount}\n lowerCase: ${lowerCaseCount}\nnumbers: ${numberCount}\nspecialCharacters: ${specialCharCount}`)
    }


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



    /*     I wrote a small plugin to make it easier to bind the "on enter key pressed" event:
    
        $.fn.enterKey = function (fnc) {
            return this.each(function () {
                $(this).keypress(function (ev) {
                    var keycode = (ev.keyCode ? ev.keyCode : ev.which);
                    if (keycode == '13') {
                        fnc.call(this, ev);
                    }
                })
            })
        }
        Usage:
        
        $("#input").enterKey(function () {
            alert('Enter!');
        })
     */

    //     this is for the caret dropdown, doesn't work yet
    /* document.querySelector('#fa-play').onmouseenter = () => {
        document.querySelector('#fa-caret-down').classList.add('fa-caret-down')
    }
    document.querySelector('#fa-play').addEventListener('click', () => {
        document.querySelector('#fa-caret-down').classList.add('fa-caret-down')
    })
     */

});

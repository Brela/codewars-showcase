$(document).ready(function () {

    //------ this section is for making each list item DISPLAY ('stick') content upon click  -------------

    // ------  still need to fix a bug where the hover doesnt work on sections 
    // ---------   that are above the section of the selected list item

    //-------------------------------------------------------------------------------------------------------------

    const itemList = document.querySelectorAll('.dropdown')
    // clearStick REMOVES THE PREVIOUSLY SHOWN ITEM, it is used in each item's click event below
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
        document.querySelector(xDate).classList.toggle('stick')

    }))
    //-------------------------------------------------------------------------------------------------------------
    //shows preview of list item's block on devices above 1000px
    if ($(window).width() > 1000) {

        itemList.forEach((el, index) => el.addEventListener('mouseenter', () => {
            var aID = itemList[index].id
            var xClass = '.' + aID.replace(aID[0], 'x')
            document.querySelector(xClass).classList.toggle('stickHover')
        }))
        itemList.forEach((el, index) => el.addEventListener('mouseleave', () => {
            var aID = itemList[index].id
            var xClass = '.' + aID.replace(aID[0], 'x')
            document.querySelector(xClass).classList.toggle('stickHover')
        }))

    }
    //-------------------------------------------------------------------------------------------------------------

});
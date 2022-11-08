$(document).ready(function () {

    //prevent default page reload on click
    document.querySelector('button').addEventListener('click', function handleClick(event) {
        event.preventDefault();
    });

    // ------  need to fix bug where preview of selected item goes away 
    // ----------(like it should) but then comes back on mouse move 

    //-------------------------------------------------------------------------------------------------------------

    const itemList = document.querySelectorAll('.dropdown')

    //-------------------------------------------------------------------------------------------------------------
    //this section is for showing a preview of list item's content on devices above 1000px
    if ($(window).width() > 1000) {

        itemList.forEach((el, index) => el.addEventListener('mouseenter', () => {
            var aID = itemList[index].id
            var xClass = '.' + aID.replace(aID[0], 'x')

            document.querySelector(xClass).classList.toggle('dropdown-content-preview')
            document.querySelector('.stick').classList.remove('dropdown-content-preview')
        }))
        itemList.forEach((el, index) => el.addEventListener('mouseleave', () => {
            var aID = itemList[index].id
            var xClass = '.' + aID.replace(aID[0], 'x')

            document.querySelector(xClass).classList.remove('dropdown-content-preview')

        }))

    }
    //-------------------------------------------------------------------------------------------------------------


    //------ this section is for making each list item DISPLAY ('stick') content upon click  -------------


    //convert aDate (ID) to xDate (CLASS), call clearStick, 
    //then toggle its stick (display: block)

    itemList.forEach((el, index) => el.addEventListener('click', () => {
        var aDate = itemList[index].id
        var xDate = '.' + aDate.replace(aDate[0], 'x')
        clearStick()
        clearListItemSelectedColor()
        document.getElementById(aDate).classList.toggle('list-item-selected')
        document.querySelector(xDate).classList.toggle('stick')
        document.querySelector('.stick').classList.remove('dropdown-content-preview')
    }))
    function clearListItemSelectedColor() {
        const listItemsSelected = document.querySelectorAll('.dropdown')
        listItemsSelected.forEach(el => {
            el.classList.remove('list-item-selected')
        })
    }

    // clearStick REMOVES THE PREVIOUSLY SHOWN ITEM, it is used in each item's click event
    function clearStick() {
        const stickItems = document.querySelectorAll('.dropdown-content')
        stickItems.forEach(el => {
            el.classList.remove('stick')
        })
    }



});


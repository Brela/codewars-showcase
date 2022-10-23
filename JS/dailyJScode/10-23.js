
//   CLEARSTICK removes prevoiously shown item (stick)
function clearStick() {
    const stickItems = document.querySelectorAll('.dropdown-content')
    stickItems.forEach(el => {
        el.classList.remove('stick')
    })
}
//      MAIN FUNCTION for toggling displayed item upon click of its list item
const itemList = document.querySelectorAll('.dropdown')
itemList.forEach((el, index) => el.addEventListener('click', () => {
    let aDate = itemList[index].id
    let xDate = '.' + aDate.replace(aDate[0], 'x')
    console.log(xDate)
    clearStick()
    document.querySelector(xDate).classList.toggle('stick')

}))



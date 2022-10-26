

//  MINE
function century(year) {
    let yearString = String(year).split("")
    let century = Number(yearString.splice(0, yearString.length - 2).join(""))
    let afterCentury = Number(yearString.join(""))
    return afterCentury === 0 ? century : century + 1
}


//  BEST
const century1 = year => Math.ceil(year / 100)


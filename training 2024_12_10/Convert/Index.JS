
const sedValue = document.getElementById(`sedValue`)

const rgdtoFarenheight = document.getElementById(`rgdtoFarenheight`)
const rgdtoCelcuis = document.getElementById(`rgdtoCelcuis`)

const lblResult = document.getElementById(`lblResult`)

let temp

function convert() {

    if (rgdtoFarenheight.checked) {

        temp = Number(sedValue.value)
        temp = temp * 9 / 5 + 32
        lblResult.textContent = temp + `°f`

    } else if (rgdtoCelcuis.checked) {

        temp = Number(sedValue.value)
        temp = (temp - 32) * (5 / 9)
        lblResult.textContent = temp + `°C`

    } else {
        lblResult.textContent = `select a unit`
    }

}

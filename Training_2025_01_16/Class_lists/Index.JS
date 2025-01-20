// class list: Reusable code used to connect with element css classes

/*
Add()
Remove()
Toggle()
Replace(oldClass, newClass)
Contains()
*/

const btn = document.getElementById('btnMine')

btn.addEventListener('mouseover', event => {

    btn.classList.add('enabled')
    btn.classList.replace('disabled', `enabled`)
    console.log(btn.className)

})


btn.addEventListener('mouseout', event => {

    btn.classList.replace('enabled', `disabled`)
    console.log(btn.className)

})


btn.addEventListener('mousedown', event => {

    if (btn.classList.contains('enabled')) {
        btn.textContent += `😡`
    }

})

//document.getElementById('')
//document.getElementsByClassName('')
//document.getElementsByTagName('')
//document.querySelector('') -- select first match. ('.class') / ('tagname')
//document.querySelectorAll('')

document.getElementById('byID').style.backgroundColor = `rgb(128, 188, 240)`

cls = document.getElementsByClassName('byClsName')
cls[0].style.backgroundColor = `yellow`
for (let i of cls) {
    i.style.color = `red`
}

tag = document.getElementsByTagName('p')
tag[3].style.backgroundColor = `gray`
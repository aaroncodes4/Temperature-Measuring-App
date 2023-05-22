const btnInc = document.querySelector('.increase')
const btnDec = document.querySelector('.decrease')
const backColor = document.querySelector('.tempShow')
const tempValue = document.querySelector('#value')
let value = 10

tempValue.innerHTML = value

btnInc.addEventListener('click', () => {
    if(tempValue.innerHTML >= 30)return
    value++;
    tempValue.innerHTML = value
    tempValue.innerHTML >= 15 ? backColor.style.background = 'orange' : 
    backColor.style.background = 'blue'
})

btnDec.addEventListener('click', () => {
    if(tempValue.innerHTML <= 0)return
    value--;
    tempValue.innerHTML = value
    tempValue.innerHTML < 15 ? backColor.style.background = 'blue' : 
    backColor.style.background = 'orange'
})

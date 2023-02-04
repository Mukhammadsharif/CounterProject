let value = document.querySelector('#value')
let buttons = document.querySelectorAll('.btn')
let count = 0

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const styleList = e.currentTarget.classList
        styleList.contains("increase") ? count++ : styleList.contains('decrease') ? count-- : count = 0 
        count > 0 ? value.style.color = "green" : count < 0 ? value.style.color = "red" : value.style.color = '#222'
        value.textContent = count
    })
})
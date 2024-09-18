const btn = document.getElementById('botao')
const popup = document.getElementById('popup')
btn.addEventListener('click', () => {
    popup.classList.add('popup-active')
    setTimeout(() => {
        popup.classList.remove('popup-active')
    }, 2500)
})


function toggle() {
    let button = document.getElementsByClassName('button')[0]
    let message = document.getElementById('extra')

    if (message.style.display === 'none') {
        message.style.display = 'block'
        button.textContent = 'Less'
    } else {
        message.style.display = 'none'
        button.textContent = 'More'
    }
}
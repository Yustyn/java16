let headr = document.querySelector('.header'),
    $name = window.localStorage.getItem('logged'),
    $close = document.getElementById('close')



headr.innerHTML = `<h4>Hello, ${$name} <span class="letter" id="info"
>${$name[0].toUpperCase()}</span></h4>`
$letter = document.querySelector('.letter')
$letter.addEventListener('click', () => {
    overlay.classList.remove('d-none')
    headr.classList.add('d-none')
    name2_1.value = window.localStorage.getItem($name).split(',')[0]
    email2_1.value = window.localStorage.getItem($name).split(',')[1]
    login2_1.value = window.localStorage.getItem($name).split(',')[2]
    password2_1.value = window.localStorage.getItem($name).split(',')[3]
})

$close.addEventListener('click', () => {
    overlay.classList.add('d-none')
    headr.classList.remove('d-none')
})
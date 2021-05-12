let reg_suc = false,
    logged

register1.addEventListener("click", () => {
    signInForm.classList.add('d-none')
    registerForm.classList.remove('d-none')
})

back2.addEventListener('click', () => {
    signInForm.classList.remove('d-none')
    registerForm.classList.add('d-none')
})

function register() {
    let logg = []
    if (name2.value && email2.value && login2.value && password2.value) {
        logg.push(name2.value)
        logg.push(email2.value.toLowerCase())
        logg.push(login2.value.toLowerCase())
        logg.push(password2.value)
        console.log(logg)
        window.localStorage.setItem(login2.value, logg)
        reg_suc = true
    }

}

register2.addEventListener('click', () => {
    if (window.localStorage.getItem(login2.value.toLowerCase())) {
        alert(`Login >>>${login2.value}<<< is already registered`)
    } else {
        register()
    }
    if (rememberMe2.checked && reg_suc) {
        signInForm.classList.remove('d-none')
        registerForm.classList.add('d-none')
        login1.value = login2.value
        password1.value = password2.value
    } else if (reg_suc) {
        signInForm.classList.remove('d-none')
        registerForm.classList.add('d-none')
        login1.value = ''
        password1.value = ''
    }
})

logIn1.addEventListener('click', () => {
    let loginUnderscore = login1.value.toLowerCase()
    if (login1.value && password1.value) {
        if (window.localStorage.getItem(loginUnderscore)) {
            q = (window.localStorage.getItem(loginUnderscore)).split(',')
            if (password1.value == q[3] && loginUnderscore == q[2]) {
                wrongPass.classList.add('d-none')
                window.localStorage.setItem('logged', loginUnderscore)
                window.location.href = './profile.html'
            } else {
                wrongPass.classList.remove('d-none')
            }
        } else {
            alert('login is not found', login1.value)
        }
    }
})




const valeurCaptcha = 1432
const captcha = document.getElementById("captcha").value
const boutton = document.getElementById("button")
boutton.addEventListener('submit', valider)
function valider(e) {
    if (captcha != 1432){
        e.preventDefault()
    }
}
var formSingin = document.querySelector('#signin')
var formSingup = document.querySelector('#signup')
var btnColor = document.querySelector('.btnColor')

document.querySelector('#btnSignin').addEventListener('click', ()=>{
    formSingin.style.left = "25px"
    formSingup.style.left = "450px"
    btnColor.style.left = "0"
})

document.querySelector('#btnSignup').addEventListener('click', ()=>{
    formSingin.style.left = "-450px"
    formSingup.style.left = "25px"
    btnColor.style.left = "108px"
})
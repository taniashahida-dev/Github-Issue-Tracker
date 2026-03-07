
const signInBTN =document.getElementById('signin-btn')
const userInput = document.getElementById('input-user')
const passwordInput = document.getElementById('inpur-password')
signInBTN.addEventListener('click',function(){
const userName = userInput.value
const passWord = passwordInput.value

if (userName !== 'admin') {
    alert('Invalid username!!!!!')
    return
} else if (passWord !=="admin123"){
    alert('Invalid password!!!')
    return
}else{
    alert('Signin Successfull!!!!')
    window.location.assign("./home.html")
}

})

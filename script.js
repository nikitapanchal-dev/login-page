
let email = document.querySelector("#email")
let email_error = document.querySelector("#emailerror")
let password = document.querySelector("#password")
let password_error = document.querySelector("#passerror")
let form = document.querySelector(".loginform")
let toggle_eye_icon = document.querySelector("#eye-icon")


form.addEventListener("submit",function(e){
    e.preventDefault()
    email_error.textContent = ""
    password_error.textContent = "" 

    let is_valid = true

    if(email.value.trim() === ""){
        email_error.textContent = "Email is required"
        email.classList.add("error")
        is_valid = false
    }else if (!email.value.includes("@")){
        email_error.textContent = "Please enter a valid email"
        email.classList.add("error")
        is_valid = false
    }else{
        email.classList.remove("error")
        email.classList.add("success")
    }

    if(password.value.length < 6){
        password_error.textContent = "password must contain atleast 6 characters"
        password.classList.add("error")
        is_valid = false
    }else{
        password.classList.remove("error")
        password.classList.add("success")
    }

    if(is_valid){
        alert("Login Successful!!!")
    }
})

toggle_eye_icon.addEventListener("click" , function(){
    if(password.type === "password"){
        password.type = "text"
        toggle_eye_icon.classList.remove("fa-eye")
        toggle_eye_icon.classList.add("fa-eye-slash")
    }else{
        password.type = "password"
        toggle_eye_icon.classList.remove("fa-eye-slash")
        toggle_eye_icon.classList.add("fa-eye")
    }
})

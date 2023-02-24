
let ham_burger_botton = document.getElementById("ham-burger-icon");
let side_bar = document.getElementById("side-bar");
let app_close = document.getElementById("close")
let mobile_head = document.getElementById("mobile-head")
let X = document.getElementById("X")
let less_than = document.getElementById("less-than")
let more_than = document.getElementById("more-than")
let count = 1
let slide_image = document.getElementById("slide-image")
let login_signup_button = document.querySelector(`#login-signup-button>span`);
let loginSign = document.querySelector(`#user-css>div:nth-child(1)>div:nth-child(2)>p`);
let logout = document.querySelector(`#logout>span`)


window.addEventListener("load", () => { 
  login_signup_button.innerHTML = ''
  if (!localStorage.getItem("Name")) {
    login_signup_button.innerText = `Login/Signup`;
    loginSign.innerText = `Login or Signup`;
    logout.parentElement.style.display = `none`;
  } else {
    loginSign.innerText = `${localStorage.getItem("Name")}`;
    login_signup_button.innerHTML = `${localStorage.getItem("Name")}`;
    logout.parentElement.style.display = `flex`;
  }
})

ham_burger_botton.addEventListener("click",()=>{
    side_bar.style.cursor = "pointers"
    side_bar.style.visibility = "visible"
})
app_close.addEventListener("click",()=>{
    mobile_head.style.visibility = "hidden"
})

X.addEventListener("click",()=>{  
  side_bar.style.visibility = "hidden"
})

less_than.addEventListener("click",()=>{
  count--;
  if (count === 0){
    count = 10;
  }
  slide_image.setAttribute("src",`./images/${count}.png`)

})

more_than.addEventListener("click",()=>{
  count++
  if (count === 11){
    count = 1
  }
  slide_image.setAttribute("src",`./images/${count}.png`)
})
login_signup_button.addEventListener("click", () => { 
  if (login_signup_button.innerText === `Login/Signup`) { 
    window.location.replace(`/Register.html`)
  }
})
loginSign.addEventListener("click", () => {
    
  if(loginSign.innerText === `Login or Signup`) window.location.replace(`/Register.html`);
})

logout.addEventListener("click", () => { 

  localStorage.setItem("Name", "");
 window.location.replace(`/index.html`)
})

// window.addEventListener("click",()=>{
//   alert("working")
// })






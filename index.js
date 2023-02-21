
let ham_burger_botton = document.getElementById("ham-burger-icon");
let side_bar = document.getElementById("side-bar");
let app_close = document.getElementById("close")
let mobile_head = document.getElementById("mobile-head")
let X = document.getElementById("X")

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
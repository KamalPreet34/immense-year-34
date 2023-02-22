
let ham_burger_botton = document.getElementById("ham-burger-icon");
let side_bar = document.getElementById("side-bar");
let app_close = document.getElementById("close")
let mobile_head = document.getElementById("mobile-head")
let X = document.getElementById("X")
let less_than = document.getElementById("less-than")
let more_than = document.getElementById("more-than")
let count = 1
let slide_image = document.getElementById("slide-image")

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

// window.addEventListener("click",()=>{
//   alert("working")
// })






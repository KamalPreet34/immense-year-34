
let ham_burger_botton = document.getElementById("ham-burger-icon");
let side_bar = document.getElementById("side-bar");
let app_close = document.getElementById("close")
let mobile_head = document.getElementById("mobile-head")
let X = document.getElementById("X")
let less_than = document.getElementById("less-than")
let more_than = document.getElementById("more-than")
let count = 1
let slide_image = document.getElementById("slide-image")
let from  = document.getElementById("from")

let about = document.getElementById("about")
let blog = document.getElementById("blog")
let career = document.getElementById("career")
let help = document.getElementById("help")
let switch_tabs = document.querySelector("#about-us > div:nth-child(2)")
let page = switch_tabs.innerHTML
let change = document.getElementById("change")


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



  navigator.geolocation.getCurrentPosition((position) => {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${long}`)
  .then(response => response.json())
  .then(result => {
    change.innerHTML = result.address.state
    from.placeholder = result.display_name
  })


  });




about.addEventListener("click",()=>{
  about.style.borderBottom = "solid 2px white";
  career.style.borderBottom = "none"
  blog.style.borderBottom = "none"
  help.style.borderBottom = "none"
  switch_tabs.innerHTML = page
})

blog.addEventListener("click",()=>{
  about.style.borderBottom = "none";
  career.style.borderBottom = "none"
  blog.style.borderBottom = "solid 2px white"
  help.style.borderBottom = "none"
  switch_tabs.innerHTML = `<div><h1>  Find more information about Zoomcar Blogs <a href="#">Here</a></h1></div>`
})
career.addEventListener("click",()=>{
  about.style.borderBottom = "none";
  career.style.borderBottom = "solid 2px white"
  blog.style.borderBottom = "none"
  help.style.borderBottom = "none"
  switch_tabs.innerHTML = `<div><h1>Find more information about Zoomcar Careers <a href="#">Here</a></div>`
})
help.addEventListener("click",()=>{
  help.style.borderBottom = "none";
  career.style.borderBottom = "none"
  blog.style.borderBottom = "none"
  help.style.borderBottom = "solid 2px white"
  switch_tabs.innerHTML = `<div><h1> Find more information about Zoomcar Help and Support <a href="#">Here</a></div>`
})

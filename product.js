
let ham_burger_botton = document.getElementById("ham-burger-icon");
let side_bar = document.getElementById("side-bar");
let app_close = document.getElementById("close")
let mobile_head = document.getElementById("mobile-head")
let X = document.getElementById("X")
let cards = document.getElementById("cards")
let api = `https://crimson-clam-hose.cyclic.app/data`
let hours = JSON.parse(localStorage.getItem("hours"))
let from  = document.getElementById("from")
let form  = document.querySelector("form")
let locations = JSON.parse(localStorage.getItem("location"))

let index_page = document.getElementById("project-logo");
index_page.addEventListener("click",()=>{
  location.href="index.html"
})
from.placeholder = locations
let d = new Date()


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


window.addEventListener("load",fetch_data(api))

function fetch_data(params){
  

  fetch(params)
  .then((res)=> res.json())
  .then((data)=>{
    dom_data(data)
  })
}

function dom_data(params) {
  cards.innerHTML = ""
  params.forEach(element => {
    cards.innerHTML += `
                             <div id="card">
                                <div>
                                    <img src="${element.image}" alt="">
                                </div>
                                <div id="pad">
                                    <div id="bottom">
                                        <div>
                                            <img src="./images/icons8-star-filled-48.png" alt=""><span>${element.rating} (${Math.floor(Math.random() * 99)})</span>
                                        </div>
                                        <img src="./images/cart.png" alt="">
                                    </div>
                                    <h1>${element.name} ${element.year}</h1>
                                    <p>Manual - ${element.fueltype} - ${element.seatcapacity} Seats</p>
                                    <div id="line"></div>
                                    <div>
                                       <div id="price">
                                            <div>
                                                <h2>Rs.${element.price}/hr</h2>
                                                <h3>Rs.${element.price+166}/hr</h3>
                                            </div>
                                            <div>
                                            <img src="./images/icons8-walking-50.png" alt=""><span>${element.distance} Km away</span>
                                            </div>
                                      </div>
                                    <span><u>Rs.${24*element.price} total</u></span>     
                                </div>
                                </div>

                            </div>
    `
    let card = document.querySelector("#card");
    card.addEventListener("click",()=>{
      location.href = "cartPage.html"
      localStorage.setItem("data",JSON.stringify(element))
    })
  });
  
  
}



// fetch data om window load...

let mainsection=document.getElementById("cont");
let total=document.getElementById("totalproducts");
let url="https://crimson-clam-hose.cyclic.app/data"
window.addEventListener("load",()=>{
    fetchdata(url);
});

function  fetchdata(){
    fetch("https://crimson-clam-hose.cyclic.app/data")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
        showdata(data);
    })
}

function showdata(data){
    mainsection.innerHTML=null;
    total.innerHTML=` ${data.length}`;
    
    data.forEach(element => {
        
        let maindiv=document.createElement("div");
        maindiv.setAttribute("class","maindiv");

        let ID=document.createElement("p");
        ID.setAttribute("class","productid")
        ID.innerHTML=`PRODUCT ID :- ${element.id}`;

        let card=document.createElement("div");

        let image=document.createElement("img");
        image.setAttribute("class","productimage")
        image.src=element.image;

        let name=document.createElement("h2");
        name.setAttribute("class","name");
        name.innerHTML=`${element.name} ${element.year}`;

        let subdata=document.createElement("p");
        subdata.setAttribute("class","subdata");
        subdata.innerHTML=`${element.fueltype}. Seat capacity ${element.seatcapacity}`;

        let price=document.createElement("h3");
        price.innerHTML=`₹ ${element.price}/hr`;

        card.append(image,name,subdata,price);

        maindiv.append(ID,card);

        mainsection.append(maindiv);

    });
}

// store data in server

let form=document.getElementById("POSTform");

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    obj={
        name:form.name.value,
        image:form.image.value,
        price:form.price.value,
        seatcapacity:form.capacity.value,
        fueltype:form.fuel.value,
    }
    console.log(obj);
    addtoserver(obj);
});

function addtoserver(obj){

    fetch("https://crimson-clam-hose.cyclic.app/data",{
        method:"POST",
        body: JSON.stringify(obj),
        headers:{
            "Content-type":"application/json"
        }
    })
    .then((res)=>{
        fetchdata("https://crimson-clam-hose.cyclic.app/data");
        return res.json();
        
    })
    // .then((data)=>{
    //     console.log(data);
        
    // });

}

//delete data from server
let form1=document.getElementById("DELETEform");

form1.addEventListener("submit",(event)=>{
    event.preventDefault();

    let id=form1.id.value;
   deletedata(id)
});

function deletedata(id){

    fetch(`https://crimson-clam-hose.cyclic.app/data/${id}`,{
        method:"DELETE",
        headers:{
            "Content-type":"application/json"
        }
    })
    .then((res)=>{
        fetchdata("https://crimson-clam-hose.cyclic.app/data");
        return res.json();
        
    });
}

//update server data 

let form2=document.getElementById("EDITform");

form2.addEventListener("submit",(event)=>{
    event.preventDefault();

    let obj={
        
        price:form2.price.value
    }
    let id=form2.id.value;
    console.log(obj);
   update(id,obj);
});

function update(id,obj){

    fetch(`https://crimson-clam-hose.cyclic.app/data/${id}`,{
        method:"PATCH",
        body: JSON.stringify(obj),
        headers:{
            "Content-type":"application/json"
        }
    })
    .then((res)=>{
        fetchdata("https://crimson-clam-hose.cyclic.app/data");
        return res.json();
        
    });
}

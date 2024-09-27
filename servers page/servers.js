



let icon = document.querySelector("#icon");
icon.addEventListener("click" , () => {
    let icon = document.querySelector(".toggt");
    icon.classList.toggle("toggt2") 

    
})
 

//dropdown js

let drop_btn = document.querySelector("#dropbtn");

let drop_data1 = document.querySelector("#sec");

drop_btn.addEventListener('mouseover' , () => { 
    drop_data1.style.display = "flex"  

    drop_data1.addEventListener('mouseover' , () => {
        drop_data1.style.display = "flex"  


    })
})

drop_data1.addEventListener('mouseout' , () => {   
    drop_data1.style.display = "none"
})



let drop_close = document.querySelector("#drop_icon");  

drop_close.addEventListener("click" , () => {
    drop_data1.style.display = "none"
})





 let car = document.querySelector("#data_img");
 
let c = document.querySelector("#card")
c.addEventListener("mouseover" , () => {
    car.style.display = "block"
})
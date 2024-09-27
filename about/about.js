



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


// section 4 js childs
 
let child1 = document.querySelector("#section4_icon1");
let child2 = document.querySelector("#section4_icon2");
let child3 = document.querySelector("#section4_icon3");

let child1_data = document.querySelector("#section4_child1_div");

let child2_data = document.querySelector("#section4_child2_div");

let child3_data = document.querySelector("#section4_child3_div");

//child 1 


child1.addEventListener("click" , () => {  
    
    child1_data.style.display = "flex"
    child2_data.style.display = "none"
    child3_data.style.display = "none"
})


child2.addEventListener("click" , () => {
    
    child1_data.style.display = "none"
    child3_data.style.display = "none"
    child2_data.style.display = "flex"
})

child3.addEventListener("click" , () => {
    
    child1_data.style.display = "none"
    child3_data.style.display = "flex"
    child2_data.style.display = "none"
})


// let d = confirm("maa ki chuut")








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









// form validation
let input_name1 = document.querySelector("#text")
let input_email1 = document.querySelector("#email")
let input_number1 = document.querySelector("#number")
let input_add1 = document.querySelector("#add")
let input_sms1 = document.querySelector("#textareas")


let forms = document.querySelector("#forms");

forms.addEventListener("submit" , (event) => {
     event.preventDefault();
    let input_name = document.querySelector("#text").value;
    let input_email = document.querySelector("#email").value;
    let input_number = document.querySelector("#number").value;
    let input_add = document.querySelector("#add").value;
    let input_sms = document.querySelector("#textareas").value;

    if (input_name === "" && input_email === "" && input_add === "" && input_number === "" && input_sms === "") {
        input_name1.style.borderBottom = "1px solid red"
        input_email1.style.borderBottom = "1px solid red"
        input_number1.style.borderBottom = "1px solid red"
        input_add1.style.borderBottom = "1px solid red"
        input_sms1.style.borderBottom = "1px solid red"
        
    } else {

    }


    // name validation

    let re = /^[A-Za-z]+$/;

    if (re.test(input_name)) {
        console.log(0);
        
    } else {
        console.log(1);
        
    }


    

    // for (let index = 0; index < input_name.length; index++) {
    //     const element = input_name[index];
    //     if (isNaN(element)) {
    //         input_name1.style.borderBottom = ""
    //     } else {
            
    //         input_name1.style.borderBottom = "1px solid red"
    //     }
        
        
    // }


    // email validation


    if (isNaN(input_email1) && input_email.includes("@") &&  input_email.includes('.')) {
        console.log(0);
    } else {
        console.log(1);
    }



    // number validation

    if (Number(input_number) && input_number.length > 9 && input_number.length < 11) {
        console.log(0);
        
    } else {
        console.log(1);
        
    }


    
    
})

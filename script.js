function checkAnswer() {
    let choices=document.getElementsByName("Pizza");
    let result= document.getElementById("result");
    
    for (let choice of choices ){
        if (choice.checked){
            if (choice.value==="Pepperoni"){
                result.innerHTML="You have bold flavors!";
            }
            else if(choice.value==="Vegetable"){
                result.innerHTML="Healthy choice!";
            }
            else {
                result.innerHTML="Classic and simple!";
        }
    }
}
}
function orderButton(){
  alert('We Sorry! the restaurant is busy right now, we will back soon!');
}
 
function vaildateForm(){
    var isValide = true;

    var fullname= document.getElementById("name").value;
    var nameError= document.getElementById("nameError");
    if (fullname==""){
        nameError.innerHTML="Name is not entered!";
        isValide = false;
    }
    
        else{
             nameError.innerHTML= "" ;
        }
    
     
    var number= document.getElementById("number").value;
    var numberError= document.getElementById("numberError");
     if (number==""){
       numberError.innerHTML="phone number is not entered!";
        isValide = false;
    }
    
        else{
             numberError.innerHTML= "" ;
        }
    

    var email= document.getElementById("email") .value;
    var emailError= document.getElementById("emailError");
 if (email==""){
       emailError.innerHTML="Email is not entered!";
        isValide = false;
    }
    else if(!email.indincludes("@")|| !email.indincludes(".")){
         emailError.innerHTML="Invalid email format!";
           isValide = false;
    }
       
        else{
             emailError.innerHTML= "" ;
        }
    


    var msg= document.getElementById("msg").value;
    var messageError= document.getElementById("messageError");

 if (msg==""){
       messageError.innerHTML="Message is not entered!";
        isValide = false;
    }
    
        else{
             messageError.innerHTML= "" ;
        }

        return isValide
}


var form = document.getElementsByClassName('form')
form.addEventListener("submit", validateForm(e))

function validateForm(e) {
    let outputs = ["fname", "lname", "email", "password"];
    outputs[0] = document.forms['form']['fname'].value;
    outputs[1] = document.forms['form']['lname'].value;
    outputs[2] = document.forms['form']['email'].value;
    outputs[3] = document.forms['form']['password'].value;
    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    for(var i=0; i<outputs.length; i++){

      if(outputs[0] !='' && outputs[1] !='' && outputs[2].match(mail) && outputs[3]!=''){  
        alert('Your form has been submitted successfully');
        location.reload();
        e.preventDefault();
        return true;
     }

      else if(outputs[i]=='' && outputs[i+1] =='' && (outputs[i+2] =='' || !outputs[2].match(mail)) && outputs[i+3]==''){
        
        document.getElementsByTagName("svg")[i].style.display = "block";
        document.getElementsByTagName("small")[i].style.display = "block";
        document.getElementsByTagName("input")[i].style.border = "2px solid red"; 

        document.getElementsByTagName("svg")[i+1].style.display = "block";
        document.getElementsByTagName("small")[i+1].style.display = "block";
        document.getElementsByTagName("input")[i+1].style.border = "2px solid red"; 
      }

      else if(outputs[i+1]==''){
          document.getElementsByTagName("svg")[i+1].style.display = "block";
          document.getElementsByTagName("small")[i+1].style.display = "block";
          document.getElementsByTagName("input")[i+1].style.border = "2px solid red"; 
        }
      else if(outputs[i+2]=='' || !outputs[2].match(mail)){
          document.getElementsByTagName("svg")[i+2].style.display = "block";
          document.getElementsByTagName("small")[i+2].style.display = "block";
          document.getElementsByTagName("input")[i+2].style.border = "2px solid red"; 
        }
      else if(outputs[i+3]==''){
          document.getElementsByTagName("svg")[i+3].style.display = "block";
          document.getElementsByTagName("small")[i+3].style.display = "block";
          document.getElementsByTagName("input")[i+3].style.border = "2px solid red";
      
        }
    
    
}
}
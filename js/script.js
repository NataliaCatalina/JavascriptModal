'use strict';

//gain reference to when the user submits the form
        //capture form input values
        //test the values
            //if values are clear 
                //send feedback
            //send to database
                //else send error feedback



 //gain reference to when the user submits the form
 document.querySelector('#submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); //stop the default page from loading

     //capture form input values
     let firstName = document.querySelector('#firstName').value;
     let emailName = document.querySelector('#email').value;
     let passwordName = document.querySelector('#password').value;

     //get reference to our error tags
     let firstNameError = document.querySelector('#firstNameError');
     let emailError = document.querySelector('#emailError');

     console.log(firstName, emailName, passwordName);
     

      //test for empty values
      if(firstName == '') {
        firstNameError.textContent = "Please enter a First Name";
    } else if(firstName.length >=40){
        firstNameError.textContent = "Please enter a Shorter Name";
    } else {
        firstNameError.textContent = " ";
    }

    if(emailName == '') {
        emailError.textContent = "Please enter a Email";
    } else {
        emailError.textContent = " ";
    }

    if(passwordName == '') {
        console.log('please enter a password');
    } else {
        console.log('database ready');
    }


 } );
    

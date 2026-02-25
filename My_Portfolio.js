//  ===================================
// import { useState } from 'react';
//     Skills Progress Animation
//     ===================================
    function animateSkillBars() {
        const skillProgress = document.querySelectorAll('.skill-progress');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progress = entry.target;
                    const targetWidth = progress.getAttribute('data-progress');
                    
                    // Animate progress bar
                    setTimeout(() => {
                        progress.style.width = targetWidth + '%';
                    }, 200);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });
        
        skillProgress.forEach(progress => {
            observer.observe(progress);
        });
    }
    
    animateSkillBars();






    // Form validation =========================================================================


    let id = (z) => document.getElementById(z);

    let classes =  (classes) => document.getElementsByClassName(classes);


    let username = id("username"),
     email = id("email"),
      subject = id("subject"),
      message = id("message"),
    //   form = id("form"),

       errorMsg = classes("error"),
       successIcon = classes("success-icon"),
       failureIcon = classes("failure-icon");



          form.addEventListener("submit", function(abc){
         
         abc.preventDefault(); 
        //  console.log(abc)



        // function call

        engine(username, 0, "Username cannot be blank");
        engine(email, 1, "Email cannot be blank");
        engine(subject, 2, "subject cannot be blank");
        engine(message, 3, "Message cannot be blank");

          
    });


    let engine= (id, serial, message) => {

           if(id.value.trim()==""){

             errorMsg[serial].innerHTML = message; 
             
               id.style.border = " 1.5px solid red ";



              // icons 
               failureIcon[serial].style.opacity = "1";
               successIcon[serial].style.opacity = "0";
           }
           else{

            errorMsg[serial].innerHTML = ""; 

            id.style.border = " 1.5px solid green ";

           
               // icons
               failureIcon[serial].style.opacity = "0";
               successIcon[serial].style.opacity = "1";
               
           }
    }






    



    
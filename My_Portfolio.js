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

        //      if(errorMsg[serial].innerHTML = message){

        //           alert("Please Fill out of this ")
        //    }

        //    else{

        //         alert("Sended Successfully ......")
        //    }

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





    


// Git hub Button =======================
    
console.log(window.location);


    function git(){
           
          window.location.href = "https://github.com/Aswath-77";
          
    }

  
// LinkedIn Button ========================


  function linkedin(){
           
          window.location.href = "https://www.linkedin.com/in/aswathj/";
         
          
    }
    



// Twitter Button ========================


  function twitter(){
           
          window.location.href = "";
         
          
    }    


// Mail Button ========================


  function mail(){
           
          window.location.href = "mailto:aswath102002@gmail.com";
         
          
    }  



    // Home Button ========================


  function home_bt(){
           
          window.location.href = "file:///C:/Frontend/Portfolio/index.html#home";
         
          
    }  


     // About Button ========================


  function about_bt(){
           
          window.location.href = "file:///C:/Frontend/Portfolio/index.html#about";
         
          
    }  



       // Skills Button ========================


  function skills_bt(){
           
          window.location.href = "file:///C:/Frontend/Portfolio/index.html#skills";
         
          
    }  


    
       // Education Button ========================


  function education_bt(){
           
          window.location.href = "file:///C:/Frontend/Portfolio/index.html#education";
         
          
    }  




     
       // Projects Button ========================


  function projects_bt(){
           
          window.location.href = "file:///C:/Frontend/Portfolio/index.html#project";
         
          
    }  


         // Contact Button ========================


  function contact_bt(){
           
          window.location.href = "file:///C:/Frontend/Portfolio/index.html#contact";
         
          
    }  




    // Download Resume -====================

    function download_resume(){

          window.location.href="./Aswath_resume.pdf";
          
    }


   


































 








    
console.log(' from logjs')

const loginForm = document.querySelector('#login_form');
loginForm.addEventListener('submit', (e) =>
{   e.preventDefault();
    const email = document.getElementById('email').value;
    const password =  document.getElementById('password').value;
    

    auth.signInWithEmailAndPassword(email,password).then(cred =>
        
          { 
              
            console.log(cred.user);
            if(email== 'admin@gmail.com')
            {
                window.location.href = "./admin.html";
            
            }
      
            
            else{
                window.location.href = "./index.html";
            }
                
        
        },err=>
        {
            let msg;
            switch(err.code)
            {
                case "auth/wrong-password":
                    msg = "email or password is incorrect.";
                    loginForm.reset();
                    
                    break;
            }
            alert(msg);
        }
        );
});


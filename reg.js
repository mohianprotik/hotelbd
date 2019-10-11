
const signupForm = document.querySelector('#sign_up');
signupForm.addEventListener('submit', (e) =>
{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password =  document.getElementById('password').value;



    auth.createUserWithEmailAndPassword(email,password).then(cred =>
        {
            console.log(cred.user);
 
         
            
        firebase.auth().onAuthStateChanged((user) =>
        {
            if(user){
                console.log('12');
                alert("Now login with your email and password");
                window.location='log.html';
               
    
            }
 

        });

            
        });

});

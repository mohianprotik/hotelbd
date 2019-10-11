console.log('from contactjs');


const contact_form = document.querySelector('contact-form');



db.collection('feedbacks').get().then(snapshot => {

    console.log(snapshot.docs);
    snapshot.forEach(doc => {
        const guide = doc.data();
  
    });
});



document.getElementById('submit').addEventListener('click', (e)=>{
    
    e.preventDefault();
    var name = document.getElementById("contact-name").value;
    var email = document.getElementById("contact-email").value;
    var subject = document.getElementById("subject").value;
    var comment = document.getElementById("comment").value;
    console.log(name, email, subject, comment);

    db.collection('feedbacks').add(
        {
            Name:name,
            Email : email,
            Subject : subject,
            Comment : comment
        }
    ).then(() => {
        
        console.log('Message Added!');
        alert("You will get reply  soon!");
        location.href='index.html';
        
    });
});

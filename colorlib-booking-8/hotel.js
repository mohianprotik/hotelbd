console.log('hotel.js');


const hotel_form= document.querySelector('hotel_form');

   
        document.getElementById('submit').addEventListener(
            'click',(e)=>{
                firebase.auth().onAuthStateChanged((user) =>
                {
                    if(user){
                      
        
        
                    }else{
                        console.log('user logged out');
                        window.alert("please log in for booking confirmation");
                        location.href='../log.html';
                     
                      }
         
        
                });
    e.preventDefault();
  
    var name =  document.getElementById("name").value;
    var country =  document.getElementById("country").value;
    var arrival = document.getElementById("in").value;
    var deperture = document.getElementById("out").value;
    var email =  document.getElementById("email").value;
    var e = document.getElementById("room");
    var room = e.options[e.selectedIndex].text;
    var o = document.getElementById("adult");
    var adult = o.options[o.selectedIndex].text;
    var s = document.getElementById("adult");
    var children = s.options[s.selectedIndex].text;
    
        db.collection("HotelBooking").add(

        {   Name : name,
            Country : country,

            ArrivalDate:arrival,
            DepertureDate :deperture,
           Email : email,
           Name: name,
           Room: room,
           Adult : adult,
           Children : children,
           
          
        }
    ).then(() => {
        console.log('Done!');
        alert("your booking has been confirmed");
        window.location='../index.html';
        hotel_form.reset();
       
        
    });
});
        
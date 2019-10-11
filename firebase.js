var firebaseConfig = {
  apiKey: "AIzaSyBMRJtYsQUrCGTikxfXWT1zVP4YaeipR1Y",
  authDomain: "hotelbd-6b6ac.firebaseapp.com",
  databaseURL: "https://hotelbd-6b6ac.firebaseio.com",
  projectId: "hotelbd-6b6ac",
  storageBucket: "hotelbd-6b6ac.appspot.com",
  messagingSenderId: "605843963195",
  appId: "1:605843963195:web:4eeec23a96534240de4b1e",
  measurementId: "G-VSLCCFXJ13"
  };
  
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

auth.onAuthStateChanged(user =>
  {
    if(user)
    {
      console.log('user log in :',user);
      document.getElementById("Log_out").style.display = "block";
      document.getElementById("Log_in").style.display = "none";
      

      localStorage.setItem('logged','yes');
    }
    else{
      console.log('user log out');
      document.getElementById("Log_out").style.display = "none";
      document.getElementById("Log_in").style.display = "block";
      localStorage.setItem('logged','no');
    }
  })
  const logout = document.getElementById("Log_out");
	logout.addEventListener('click', (e) => {
		e.preventDefault();
		auth.signOut().then(() =>{
		console.log('logged out !');
		});
	});
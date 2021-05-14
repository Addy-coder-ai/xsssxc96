//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyA6BfStAOIYg7_2kjjvJgFQIbaBJTPYrGA",
      authDomain: "ksomethingwitter.firebaseapp.com",
      databaseURL: "https://ksomethingwitter-default-rtdb.firebaseio.com",
      projectId: "ksomethingwitter",
      storageBucket: "ksomethingwitter.appspot.com",
      messagingSenderId: "256382242991",
      appId: "1:256382242991:web:6948132864198f97dec45a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function send() {
       msg=document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
       });
      document.getElementById("msg").value="";
    }
      
    function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";  
    }
    
    

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

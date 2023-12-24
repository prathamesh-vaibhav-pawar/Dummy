const firebaseConfig = {
    apiKey: "AIzaSyB0bH_Wm7Ba_cG8PlYOD_ZZxFIh9P1Yt4s",
    authDomain: "dummy-e1ff1.firebaseapp.com",
    databaseURL: "https://dummy-e1ff1-default-rtdb.firebaseio.com",
    projectId: "dummy-e1ff1",
    storageBucket: "dummy-e1ff1.appspot.com",
    messagingSenderId: "316928399526",
    appId: "1:316928399526:web:519ded57d5faac91ccbc67",
    measurementId: "G-PY1XQWC98D"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function Send(){
    Message = document.getElementById("IN1").value
    firebase.database().ref("/").child("User1").update({
        User1:Message
    })
    function getData() { firebase.database().ref("/"+"User1").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;
          document.getElementById("textArea").innerHTML = "<div class = 'Output' id = "+message_data+" onclick = 'redirect(this.id)'>"+message_data+"</div><hr>"
     } });  }); }
getData();
  }
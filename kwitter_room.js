var firebaseConfig = {
      apiKey: "AIzaSyB23v0s6NzBn-O8JbHPnW5m-2kkfyH5uHU",
      authDomain: "kwitter-8d5dd.firebaseapp.com",
      databaseURL: "https://kwitter-8d5dd-default-rtdb.firebaseio.com",
      projectId: "kwitter-8d5dd",
      storageBucket: "kwitter-8d5dd.appspot.com",
      messagingSenderId: "391235856288",
      appId: "1:391235856288:web:cfb106231184a91e8aa6c5"
    };
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name")

document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name -" + Room_names)
      row = "<div class='room_name' id="+Room_names+"onclick = 'rtrn(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });
});
}

getData();

function rtrn(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}

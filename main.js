      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyCOInTpHZQ9WlZncKLYZF9QDs9Jl6dT8kQ",
        authDomain: "redsocial-5dd74.firebaseapp.com",
        databaseURL: "https://redsocial-5dd74.firebaseio.com",
        projectId: "redsocial-5dd74",
        storageBucket: "redsocial-5dd74.appspot.com",
        messagingSenderId: "407665586750"
      };
      firebase.initializeApp(config);





let txtNombre = document.getElementById('nombre');
let txtMensaje = document.getElementById('mensaje');
let txtEnviar = document.getElementById('btnEnviar');
let chatUl = document.getElementById('chatUl');

btnEnviar.addEventListener("click", function() {
    let nombre = txtNombre.value;
    let mensaje = txtMensaje.value;
    //let html = "<li><b>"+nombre+": </b>"+mensaje+"</li>";
    //chatUl.innerHTML += html;
   //console.log(nombre);

   firebase.database().ref('chat').push({
       name: nombre,
       message: mensaje
   });
   
});

    firebase.database().ref('chat')
    .on('value', function(snapshot) {
        let html = '';
        snapshot.forEach(function (e) {
            let element = e.val();
            let nombre = element.name;
            let mensaje = element.message;
            html += "<p><b>"+nombre+": </b>"+mensaje+"</p>";

        });
        chatUl.innerHTML = html;
    });
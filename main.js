      // Initialize Firebase
    //  var config = {
       // apiKey: "AIzaSyCOInTpHZQ9WlZncKLYZF9QDs9Jl6dT8kQ",
       // authDomain: "redsocial-5dd74.firebaseapp.com",
        //databaseURL: "https://redsocial-5dd74.firebaseio.com",
        //projectId: "redsocial-5dd74",
       // storageBucket: "redsocial-5dd74.appspot.com",
       // messagingSenderId: "407665586750"
     // };
      //firebase.initializeApp(config);

      console.log('agregado');

      firebase.initializeApp({
        apiKey: "AIzaSyCOInTpHZQ9WlZncKLYZF9QDs9Jl6dT8kQ",
        authDomain: "redsocial-5dd74.firebaseapp.com",
        projectId: "redsocial-5dd74"
      });
      
      // Initialize Cloud Firestore through Firebase
      var db = firebase.firestore();
    function enviar() {
        var mensaje = document.getElementById('mensaje').value;
        //var apellido = document.getElementById('apellido').value;
        //var fecha = document.getElementById('fecha').value;
        
        db.collection("users").add({
            first: mensaje,
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            var mensaje = document.getElementById('mensaje').value = '';
            //var apellido = document.getElementById('apellido').value = '';
            //var fecha = document.getElementById('fecha').value = '';
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

    }

    var tabla = document.getElementById('tabla');
    db.collection("users").onSnapshot((querySnapshot) => {
        tabla.innerHTML = ''; //con este inner se limpia la caja
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            tabla.innerHTML += `
            <tr>
            
            <td>${doc.data().first}</td>

            <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
            <td><button class="btn btn-warning" onclick="editar('${doc.id}','${doc.data().first}')">Editar</button></td>

            </tr>
            `
        });
    });

    //borrar datos
    function eliminar(id){
        db.collection("users").doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }

    //editar datos
    //var washingtonRef = db.collection("users").doc(id);

    function editar(id,mensaje){

    document.getElementById('mensaje').value = mensaje;
   // document.getElementById('apellido').value = apellido;
    //document.getElementById('fecha').value = fecha;
    var boton = document.getElementById('boton');
    boton.innerHTML = 'Editar';

    boton.onclick = function(){
        
    var washingtonRef = db.collection("users").doc(id);
    // Set the "capital" field of the city 'DC'
    var mensaje = document.getElementById('mensaje').value;
    //var apellido = document.getElementById('apellido').value;
   // var fecha = document.getElementById('fecha').value;
return washingtonRef.update({
first: mensaje,
//last: apellido,
//born: fecha
})
.then(function() {
console.log("Document successfully updated!");
boton.innerHTML = 'Enviar';
document.getElementById('mensaje').value = '';
//document.getElementById('apellido').value = '';
//document.getElementById('fecha').value = '';
})
.catch(function(error) {
// The document probably doesn't exist.
console.error("Error updating document: ", error);
});

    }


    }


      








































/*let txtNombre = document.getElementById('nombre');
let txtMensaje = document.getElementById('mensaje');
let txtEnviar = document.getElementById('btnEnviar');
let chatUl = document.getElementById('chatUl');

const init = () => {

}

//window.onload = init
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
    });*/

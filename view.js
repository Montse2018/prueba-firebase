// console.log("agregado")

/*firebase.initializeApp({
    apiKey: "AIzaSyDVOovvVN349M9Vu2MVmJXSx5ARei1bX1Y",
    authDomain: "prueba-tercer-proyecto.firebaseapp.com",
    projectId: "prueba-tercer-proyecto"
  });
  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();

  function compartir(){
      let email = document.getElementById('contenido').value;
      //let contraseña = document.getElementById('contrasena').value;
    db.collection("users").add({
        comentario: email,
        //password: contraseña,
        //born: 1895
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id)
        document.getElementById('email').value = '';
        document.getElementById('contrasena').value = '';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }
  let tabla = document.getElementById('tabla');
  db.collection("users").onSnapshot((querySnapshot) => {
      tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tabla.innerHTML += `
        <tr>
        <th scope="row">${doc.id}</th>
        <td>${doc.data().correo}</td>
        <td>${doc.data().password}</td>
        <td>@mdo</td>
        </tr>
        `
    });
});*/





//function submit(){
    /*firebase.initializeApp({
        apiKey: "AIzaSyDVOovvVN349M9Vu2MVmJXSx5ARei1bX1Y",
        authDomain: "prueba-tercer-proyecto.firebaseapp.com",
        projectId: "prueba-tercer-proyecto"
      });
      
      // Initialize Cloud Firestore through Firebase
      var db = firebase.firestore();
//}

    function compartir(){
        let contenido = document.getElementById('contenido').value;
        db.collection("users").add({
            first: contenido
            //last: "Lovelace",
            //born: 1815
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

    }*/
























/*firebase.initializeApp({
    apiKey: "AIzaSyDVOovvVN349M9Vu2MVmJXSx5ARei1bX1Y",
    authDomain: "prueba-tercer-proyecto.firebaseapp.com",
    projectId: "prueba-tercer-proyecto"
  });
  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();

  function registrar(){
      let email = document.getElementById('email').value;
      let contraseña = document.getElementById('contrasena').value;
    db.collection("users").add({
        correo: email,
        password: contraseña,
        born: 1895
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id)
        document.getElementById('email').value = '';
        document.getElementById('contrasena').value = '';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }
  let tabla = document.getElementById('tabla');
  db.collection("users").onSnapshot((querySnapshot) => {
      tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tabla.innerHTML += `
        <tr>
        <th scope="row">${doc.id}</th>
        <td>${doc.data().correo}</td>
        <td>${doc.data().password}</td>
        <td>@mdo</td>
        </tr>
        `
    });
});*/

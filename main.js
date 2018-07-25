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
            html += "<li><b>"+nombre+": </b>"+mensaje+"</li>";

        });
        chatUl.innerHTML = html;
    });
/*
    DOMContentLoaded sirve 
    para controlar que primero 
    se cargue Todo el documento HTML por ultimo javascript
*/ 
// alert:S 0genera o muestra un mensaje emergente
   // alert("Holis");
   document.addEventListener("DOMContentLoaded", function(){
    // esta es una zona segura
    //console.log(document.getElementById("txtNnombre".value));
});
//añadiendo evento click al boton mostrar
const btnMostrar = document.getElementById("btnMostrar");
btnMostrar.addEventListener("click", function(){
    //alert("hice click");
    //console.log('haciendo click');
    const nombres = document.getElementById("txtNombre").value;
    const apellidos = document.getElementById("txtApellido").value;
    const cedulas = document.getElementById("txtCedula").value;
    const direccion = document.getElementById("txtDireccion").value;
    console.log(' nombres '+nombres+' apellidos '+apellidos+' cedulas '+cedulas+' direccion '+direccion);
    alert(' nombres '+nombres+' apellidos '+apellidos+' cedulas '+cedulas+' direccion '+direccion);

});

function hola(nombre, apellido){
    console.log(nombre, apellido);
    //codigo reutilizable
}
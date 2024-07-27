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
    const telefono = document.getElementById("txtTelefono").value;
    console.log(' nombres '+nombres+' apellidos '+apellidos+' cedulas '+cedulas+' direccion '+direccion+
        'txtTelefono'+telefono);
    alert(' Nombres '+nombres+' Apellidos '+apellidos+' Cedula '+cedulas+' Dirección '+direccion+
        ' Telefóno '+telefono);

});
    //boton para limpiar formulario con un mensaje emergente
const btnLimpiar = document.getElementById("btnLimpiar");
btnLimpiar.addEventListener("click", function(){
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtCedula").value = "";
    document.getElementById("txtDireccion").value = "";
    document.getElementById("txtTelefono").value = "";
    alert('se limpiará el formulario');
});

function hola(nombre, apellido){
    console.log(nombre, apellido);
    //codigo reutilizable
}
<template>
    <div>
        <h2>Formulario de Registro</h2>
       
        <Form :validation-schema="schema" @submit="onSubmit">
            
            <div class="form">
                <label for="nombre">Nombre:</label>
                
                <Field type="text" name="nombre" id="nombre" placeholder="Ingrese su Nombre" />
                <ErrorMessage name="nombre"></ErrorMessage>
            </div>
            <div class="form">
                <label for="direccion">Dirección:</label>
                
                <Field type="text" name="direccion" id="direccion" placeholder="Ingrese su Dirección" />
                <ErrorMessage name="direccion"></ErrorMessage>
            </div>
            <div class="form">
                <label for="telefono">Teléfono:</label>
                <Field type="text" name="telefono" id="telefono" placeholder="Ingrese su N° de Teléfono" />
                
                <ErrorMessage name="telefono"></ErrorMessage>
            </div>
            <div class="form">
                <label for="correo">Correo:</label>
                <Field type="email" name="correo" id="correo" placeholder="Ingrese su Correo" />
                
                <ErrorMessage name="correo"></ErrorMessage>
            </div>
            <div class="form">
                <button type="submit">Registrar</button>
            </div>
        </Form>
    </div>
</template>

<script setup> // de esta forma 
import {Form, Field, ErrorMessage, useForm} from 'vee-validate'
import { schema } from '../schemas/validationSchema';

// Destructura resetForm de useForm
const { resetForm } = useForm()

const onSubmit = (values) => {
    // Mostrar un mensaje con los datos del formulario
    /*  Los template literals permiten incluir 
    expresiones dentro de una cadena de texto, lo que facilita la creación de strings complejos */
    /*Los template literals son una característica de ES6 (ECMAScript 2015) que se utiliza para
     crear cadenas de texto que pueden incluir interpolaciones, es decir, valores de variables o expresiones*/
    alert(`Nombre: ${values.nombre}\nDirección: ${values.direccion}\nTeléfono: ${values.telefono}\nCorreo: ${values.correo}`);

    // Limpiar el formulario después de que el usuario cierre el mensaje
        resetForm()
    
    
};
</script>

<style scoped>
.form {
    margin-bottom: 10px;
}
</style>
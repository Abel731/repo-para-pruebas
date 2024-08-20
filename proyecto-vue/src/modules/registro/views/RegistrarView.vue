<template>
    <div>
        <h2>Formulario de Registro</h2>
        <!-- al importar Form de vivalidate los forms se ponen con F en mayúsculas para usar el componente
         form de vee-validate donde llamamos al objeto schema que esta en validationSchema.js-->

         <!-- nueva directiva integrada con la instalacion de vee-validate y yup que es el :validation-schema
              -->
        <Form :validation-schema="schema" @submit="onSubmit">
            <!-- @submit es una directiva  que nos permite ejecutar una funcion al enviar el formulario -->
            <div class="form">
                <label for="nombre">Nombre:</label>
                <!-- cambiamos los inputs por el componente Field de vee-validate y nos pide que la etiqueta 
                 se cierre con un tag o como lo conozco la barrita "/" y se le agrega creo que por necesidad el name
                 a cada Field que son los que estan en el esquema de validacion validationSchema.js -->
                <Field type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre" />
                <ErrorMessage name="nombre"></ErrorMessage>
            </div>
            <div class="form">
                <label for="correo">Correo:</label>
                <Field type="email" name="correo" id="correo" placeholder="Ingrese su correo" />
                <!-- ErrorMessage de la biblioteca vee-validate en Vue.js es un componente utilizado 
                 para mostrar mensajes de error personalizados asociados a un campo de formulario,
                 se asocia directamente con un campo de formulario específico mediante su nombre "name"-->
                <ErrorMessage name="correo"></ErrorMessage>
            </div>
            <div class="form">
                <button type="submit">Registrar</button>
            </div>
        </Form>
    </div>
</template>

<script setup> // de esta forma 
import {Form, Field, ErrorMessage} from 'vee-validate'
import { schema } from '../schemas/validationSchema';

const onSubmit = () => {
    console.log('Se ha enviado el Formularios')
}
</script>

<style scoped>
.form {
    margin-bottom: 10px;
}
</style>
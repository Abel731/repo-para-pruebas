<template>
    <div>
        <h2>Lista de Tareas</h2>
        <!-- directiva de vue v-model nos permite la vinculacion vidireccional de datos entre un elemento de 
         formulario con un estado de vue es decir que a un imput por ejemplo le asignamos una variable -->
        <input type="text" v-model="nuevaTarea" @keyup.enter="agregarTarea"> <!-- @keyup es una directiva de vue que ponemos 
        en el input que nos permmite ejecutar una funcion cuando se preciona una tecla en este caso la tecla enter donde agregamos
        la funcion agregarTarea -->
        <ul>
            <!-- v-for para la lista de tareas y es un cliclo for como lo entiendo -->
            <li v-for="(tarea, index) in tareas" :key="index"><!-- en vue :key da a cada elemento de una lista en este caso 
                identificacion unica para ayudar a vue  a identificar los elementos de una lista para mas eficiencia  -->
                {{ tarea }}
                <button @click="borrarTarea">borrar</button>
            </li>
        </ul>
    </div>
</template>
<script setup>
import {ref} from 'vue';
//arreglo que empieza vacio
const tareas = ref([]);

const nuevaTarea = ref('');
//funcion para agregar tarea a la lista que es una funcion de flecha
const agregarTarea = () => {
    //de esta manera se puede obtener el valor de una variable reactiva
    //tareas es un arreglo vacio y para agregarle los datos se utliza el metodo push de javascript
    tareas.value.push(nuevaTarea.value)
    nuevaTarea.value = '';
}
const borrarTarea = (index) => {
    tareas.value.splice(index,1);
}
</script>
<style></style>
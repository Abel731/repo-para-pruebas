<template>
  <h1>Hola mundo</h1>
  <p>{{ contador }}</p>
  <!-- directiva de vue lladamo @click donde cuando se haga click en el boton se ejecuta
   la ejecucion de lo que  se asigne adentro en este ejemplo la funcion incrementar -->
  <button @click="incrementar">incrementar</button>
  <button @click="decrementar">decrementar</button>
</template>

<script setup>
import {ref} from 'vue';
const contador = ref(0);
//funcion para incrementar el valor utilizando value
const incrementar = () => {
  contador.value++;
}
const decrementar = () => {
  contador.value--;
}

</script>

<style scoped>
/* el "contador" se pone rojo por que esta dentro de una etiqueta <p> */
p {
  color: red;
}
</style>


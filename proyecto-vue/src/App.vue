<template>
  <MainView></MainView>
 <!-- vue nos da la posibilidad de hacer cambios en un componente de manera independiente como 
 el ejemplo de Contador.vue sin afectar al resto de los componentes que pueden componer la pagina principal -->

</template>

<script setup>
import MainView from './views/MainView.vue';

</script>

<style scoped>

</style>

<!-- de esta manera entiendo que se puede ir agregando componentes dentro del App.vue y asi 
 ir agregando cosas al navegar/cliente y agrandando de apoquito el proyecto :) -->
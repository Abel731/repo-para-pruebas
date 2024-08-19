<template>
  <!-- llamamos al archivo Contador.vue como un componente 
   y vue automaticamente reconoce la etiqueta contador como un componente que es lladamo por 
   la importacion en el script  -->
 <Contador></Contador> <!-- vue nos da la posibilidad de hacer cambios en un componente de manera independiente como 
 el ejemplo de Contador.vue sin afectar al resto de los componentes que pueden componer la pagina principal -->
</template>

<script setup>
import Contador from './components/Contador.vue';

</script>

<style scoped>

</style>

<!-- de esta manera entiendo que se puede ir agregando componentes dentro del App.vue y asi 
 ir agregando cosas al navegar/cliente y agrandando de apoquito el proyecto :) -->
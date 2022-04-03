<template>
  <div class="about">
<!--     <formulario/> -->
<h1>{{ $store.state.numero }}</h1>
   <formulario/>
  </div>
  
</template>
<script>
// @ is an alias to /src

import formulario from "../components/fornulario.vue";


export default {
  
  name: 'HomeView',
 
  components: 
  {
    formulario
  },
   
}




</script>



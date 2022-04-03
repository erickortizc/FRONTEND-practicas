<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
     <tamanos/>
     <saboresmenu/>
     <adornos/>
      <pie/>
  </div>
  
</template>

<script>
// @ is an alias to /src

import tamanos from "../components/tamanos.vue";
import saboresmenu from "../components/sabores_menu.vue";
import adornos  from "../components/adornos_menu.vue"
import pie from "../components/piepag.vue"

export default {
  name: 'HomeView',
  components: 
  {
    tamanos,saboresmenu, adornos, pie
  }
}
</script>

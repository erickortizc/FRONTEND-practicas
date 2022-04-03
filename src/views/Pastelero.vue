<template>
  <div>
    {{$store.state.contador}}
    {{$store.state.nombre}}
     {{$store.state.calle}}
     {{$store.state.colonia}}
      {{$store.state.casa}}
      {{$store.state.municipio}}
      {{$store.state.estado}}
      {{$store.state.codigopostal}}
      {{$store.state.telefono}}
      {{$store.state.email}}
      {{$store.state.sabores}}
      {{$store.state.adornos}}
      {{$store.state.descripcion}}
      <pedido/>
  </div>
</template>

<script>
import pedido from "../components/pastelero_pedido.vue";
export default {
  name: 'pastlero',
  components: 
  {
    pedido
  },
}
</script>
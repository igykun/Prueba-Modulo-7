<template>
  <!-- Ejercicio 1 - Manejo del estado con Vuex En este ejercicio deberán congurar Vuex
  para gestionar el estado de un contador donde se deberá incrementar y decrementar
  su valor. Dicho valor partirá por defecto en 0. Además, deberás aplicar pruebas
  unitarias para:
  a. Vericar que se reciba un valor inicial en el contador.
  b. Probar la funcionalidad de incremento y decremento del contador. -->
  <div class="count container">
    <div class="count__wrapper">
      <h6 class="count__subtittle text-center">
        Presiona el boton rojo reducir el valor del numero o el verde para aumentarlo
      </h6>
      <div class="count__buttons row text-center">
        <div class="col-4">
          <button @click="$store.commit('numberDown')" class="btn btn-danger"><i class="fa-solid fa-arrow-down"></i></button>
        </div>
        <div class="col-4">
          <p class="">
            Contador actual: {{ $store.state.number }}
          </p>
        </div>
        <div class="col-4">
          <button @click="$store.commit('numberUp')" class="btn btn-success"><i class="fa-solid fa-arrow-up"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CountingEx1',
  data() {
    return {
      number: 0,
    }
  },
}
</script>
<style scoped>

</style>

<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- Se crea una estructura basica con un titulo, un label para el input, un input y un boton -->
  <div class="child container text-center">
    <div class="child__wrapper">
      <h3>Componente hijo</h3>
      <label for="childName" class="m-2">Ingresa tu nombre</label>
      <input type="text" name="" id="childName" v-model="name" class="m-2">
      <!-- Al presionar el boton se llamara al metodo sendName -->
      <div class="child__button">
        <button @click="sendName" >Enviar</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Child',
  data(){
    return{
      name: '',
    }
  },
  methods:{
    sendName(){
      // El metodo sendName mandara la informacion llamandola sendingName
      this.$emit("sendingName",this.name);
    }
  }
}
</script>
<style>

</style>

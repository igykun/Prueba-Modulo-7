<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="parent container text-center">
    <div class="parent__wrapper">
      <h3 class="te">
        Componente padre
      </h3>
      <p>
        El nombre ingresado en el componente hijo es {{ childName }}
      </p>
      <Child @sendingName="recievingName" />
    </div>
  </div>
</template>
<script>
import Child from './Child.vue';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Parent',
  components:{
    Child,
  },
  data(){
    return{
      childName: ''
    }
  },
  methods:{
    recievingName(name){
      this.childName = name;
    }
  }
}
</script>
<style>

</style>

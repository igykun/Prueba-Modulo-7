<template>
  <div class="container">
    <h2 class="text-center">
      Primer ejercicio: Contador
    </h2>
    <hr>
    <CountingEx1 />
    <hr>
    <Parent />
  </div>
</template>
<script>
import CountingEx1 from '@/components/CountingEx1.vue';
import Parent from '@/components/Parent.vue';
export default {
  name: 'TaskView',
  components:{
    CountingEx1,
    Parent
  },
  data(){
    return{

    }
  }
}
</script>
<style>

</style>

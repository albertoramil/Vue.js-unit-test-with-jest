<template>







    
   

</template>

<script>
  import MainLayout from '../layouts/Main.vue'

  export default {
     data: () => ({
      deslizar:true,      name: 'formUsuarioV'

      }),

    components: {
            MainLayout

    }
  }
</script>



<style scoped>
  .active {
    font-size: 150%;
    color: rgb(0,0,0);

  }
  .container {
    max-width: 1500px;
       /* background-color: rgb(136,126,0);*/

    margin: 0 auto;
    padding: 15px 30px;
    font-size: 150%;
  }

</style>

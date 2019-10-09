<template>
  <v-content>
    <Main></Main>
    <Midiseno></Midiseno>
    <formulario></formulario>
    <SiNo></SiNo>
  </v-content>
</template>


  
<script>
  import Main from '../layouts/Main.vue'
  import Midiseno from '../layouts/Midiseno.vue'
  import formulario from '../layouts/formulario.vue'
  import SiNo from '../components/SiNo.vue'

  export default {
    components: {
     
      Midiseno,
      Main,formulario,SiNo

    }
  }
</script>


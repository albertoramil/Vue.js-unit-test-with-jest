<template>
  <v-content>
    <main-layout>  </main-layout> 


<template>
  <v-container class="grey lighten-5">
    <v-row
      class="mb-6"
      no-gutters
    >         
      <v-col >
    <numero numeroEntrada="7" />
      </v-col>
      <v-col >   
    <numero numeroEntrada="8"/>
      </v-col>
       <v-col >   
    <numero numeroEntrada="9"/>
      </v-col>
        <v-col >   
    <numero numeroEntrada="9"/>
      </v-col> <v-col >   
    <numero numeroEntrada="9"/>
      </v-col> <v-col >   
    <numero numeroEntrada="9"/>
      </v-col> <v-col >   
    <numero numeroEntrada="9"/>
      </v-col> <v-col >   
    <numero numeroEntrada="9"/>
      </v-col>
       <v-col >   
    <numero numeroEntrada="9"/>
      </v-col>
       <v-col >   
    <numero numeroEntrada="9"/>
      </v-col>
       <v-col >   
    <numero numeroEntrada="9"/>
      </v-col>
    </v-row>
  </v-container>
</template>


  <v-container>
    <numero numeroEntrada="7" />
    <numero numeroEntrada="8"/>
    <numero numeroEntrada="9" />
    <operacion operacionEntrada="/" />

 </v-container>


  <v-container>
    <numero numeroEntrada="4"/>
    <numero numeroEntrada="5"/>
    <numero numeroEntrada="6"/>
    <operacion operacionEntrada="*" />
  </v-container>


  <v-container>
    <numero numeroEntrada="1"/>
    <numero numeroEntrada="2"/>
    <numero numeroEntrada="3"/>
    <operacion operacionEntrada="-" />

  </v-container>


  <v-container>
    <numero numeroEntrada="0"/>
    <operacion operacionEntrada="=" />
    <operacion operacionEntrada="C" />
    <operacion operacionEntrada="+" />


  </v-container>
  
  <v-container>
  <salida min-height="500px"/>
<br>
  </v-container>
   <GChart/> 

  </v-content>

</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import numero from '../components/numero.vue'
  import operacion from '../components/operacion.vue'
  import salida from '../components/salida.vue'
  import cientifica from '../components/cientifica.vue'

  import navigationDrawer from '../components/navigationDrawer.vue'



  import GChart from '../components/GChart.vue'





  export default {
    name: 'Calculadora',
     data: () => ({
      
        mostrarOpCientifica: false
      
    }),
    components: {
      MainLayout,numero,operacion,salida,cientifica, navigationDrawer,GChart


    }
  }
</script>



<template>
  <v-card color ="basil">
    <v-toolbar
    >
        <v-card-title class="text-center justify-center py-6">
            <h2 class="font-weight-bold display-3 basil--text">Setter de la Barrera</h2>
        </v-card-title>
        

        <template v-slot:extension>
            <v-tabs
                v-model="currentItem"
                background-color="basil"
                color="basil"
                grow
            >
            <v-tab
                v-for="item in items"
                :key="item"
                @click="addItem(item)"
            >
            {{ item }}
          </v-tab>
        
        </v-tabs>
      </template>
    </v-toolbar>

  



  </v-card>
</template>

<script>
  import router from '../router'

  export default {
    data: () => ({
      currentItem: 'tab-Web',
      items: [
        'Presentacion', 'Camadas', 'Otras', 'Graficos','Calculadora','VistaBotonesCalculadora','PEÑA', 'DataTableV','mapV','Vcarruaje', ]
       }),
    methods: {
      addItem (item){
        console.log("entra")
        console.log(item)
        var valor
        valor=item
        console.log(valor)
        switch (valor) {
          case "Presentacion":
            this.$router.push("/")
          break;

          case "Camadas":
            this.$router.push("/camadas").catch(err => {})

          break;
        
          case "Otras":
            this.$router.push("/relacionadas").catch(err => {})
          break; 

          case "Graficos":
            this.$router.push("/futuras").catch(err => {})
          break; 

          case "Calculadora":
            this.$router.push("/calculadora").catch(err => {})
          break; 

          case "VistaBotonesCalculadora":
          this.$router.push("/VistaBotonesCalculadora").catch(err => {})
          break; 
        
          case "PEÑA":
            this.$router.push("/Soluciones").catch(err => {})
          break;
          case "DataTableV":
            this.$router.push("/DataTableV").catch(err => {})
          break;

          case "mapV":
            this.$router.push("/mapV").catch(err => {})
          break;

          case "Vcarruaje":
            this.$router.push("/Vcarruaje").catch(err => {})
          break;
        
        default:
        break;
      }





      }
    }
  }
</script>



<style>
/* Helper classes */
.basil {
  background-color: #FFFBE6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
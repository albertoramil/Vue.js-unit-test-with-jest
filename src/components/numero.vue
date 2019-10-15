
<template>
  <v-btn
    data-test="numeroEntradaClickButton"
    outlined
    large
    fab
    v-on:click="anadir"
  >{{numeroEntrada}}</v-btn>
</template>




<script>
export default {
  data () {
    return {
      primera: '',
          


    }
  },
  methods: {
    anadir() {
      console.log(this.numeroEntrada);
      if (this.$store.getters.getprimera == "") {
        this.$store.commit("SET_PRIMERA", this.numeroEntrada);
        this.primera=this.$store.getters.getprimera
        
      } else {
        this.$store.commit("SET_SEGUNDA", this.numeroEntrada);
      }
      console.log(
        "1º numero " +
          this.$store.getters.getprimera +
          " 2º numero " +
          this.$store.getters.getsegunda
      );
    }
  },
    watch: {
    primera: function() {
      console.log("cambiooooooooooooooooooooooooooooooooooooooooooooooooooooooo watch")
    }
  },
  props: {
    numeroEntrada: {
      type: String,
      required: true
    }
  }
};
</script>
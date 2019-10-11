
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
  data: () => ({}),
  methods: {
    anadir() {
      console.log(this.numeroEntrada);
      if (this.$store.getters.getprimera == "") {
        this.$store.commit("SET_PRIMERA", this.numeroEntrada);
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
  props: {
    numeroEntrada: {
      type: String,
      required: true
    }
  }
};
</script>
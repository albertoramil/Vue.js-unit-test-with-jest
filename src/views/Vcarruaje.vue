<template>
  <v-content>
    <Main></Main>
    <div class="container">
      <link
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <title>Horse-drawn Chariots</title>
      <h1>carruajes shopping</h1>
      <ul class="list-group">
        <carruajeC
          v-for="(carruaje, index) in carruajes"
          :key="index"
          :carruaje="carruaje"
          :current="actual"
          @selectPadre="updateChariot"
        ></carruajeC>
      </ul>
      <pre>{{ $data }}</pre>
    </div>
  </v-content>
</template>

<script>
import carruajeC from "../components/carruaje.vue";
import Main from "../layouts/Main.vue";

export default {
  name: "Vcarruaje",
  data: () => ({
    carruajes: [
      { nombre: "Olympus", caballos: 4 },
      { nombre: "Sagitta", caballos: 3 },
      { nombre: "Icarus", caballos: 2 },
      { nombre: "Abraxas", caballos: 1 }
    ],
    actual: {}
  }),
  components: {
    carruajeC,
    Main
  },
  methods: {
    updateChariot: function(carruaje) {
      this.actual = carruaje;
    }
  }
};
</script>



  <template id="chariot-template">
  <li class="list-group-item">
    <h4>
      {{ carruaje.nombre }} carruaje tiene
      <strong>{{ carruaje.caballos }}</strong> caballos(s)!{{current}}{{carruaje}}
    </h4>

    <button @click="MontaEste(carruaje)" class="btn btn-primary" :disabled="isCurrent">{{ accion }}</button>
  </li>
</template>



<script>
export default {
  data: () => ({}),
  props: {
    carruaje: {},//anterior
    current: {}// actual
  },
  methods: {
    MontaEste: function(carruaje) {
      this.$emit("select", carruaje);
    }
  },
  computed: {
    //verdadero si necesitas mas caballos
    hasMoreHorses: function() {
      return this.current.caballos < this.carruaje.caballos;
    },
    //el que vas montar
    isCurrent: function() {
      return this.current.nombre === this.carruaje.nombre;
    },
    //is true when there is no chariot current
    noChariot: function() {
      return this.current.nombre === null;
    },
    //define the action for each chariot
    accion: function() {
      var accion;
      if (this.noChariot) {
        accion = "Pick Chariot";
      } else if (this.isCurrent) {
        accion = "Montar!";
      } else if (this.hasMoreHorses) {
        accion = "Necesitas un caballos";
      } else {
        accion = "Sobra un cabalo";
      }
      return accion;
    }
  }
};
</script>
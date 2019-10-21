<template>
  <div>
    <div>
      <label>
        <v-btn color="success" class="mr-4" @click="mapsVer">Situa</v-btn>
        {{maps}}
      </label>
      <br />
    </div>
    <br />
    <v-text-field
      type="input"
      :rules="[v => !!v || '']"
      maxlength="25"
      hint="Tamaño máximo"
      data-test="entradapoblacion"
      v-model="poblacion"
      label="Poblacion"
    ></v-text-field>
    <v-text-field
      type="input"
      :rules="[v => !!v || '']"
      maxlength="25"
      hint="Tamaño máximo"
      data-test="entradacalle"
      v-model="calle"
      label="Calle"
    ></v-text-field>

    <v-text-field
      type="input"
      :rules="[v => !!v || '']"
      maxlength="25"
      hint="Tamaño máximo"
      data-test="entradanumero"
      v-model="numero"
      label="Número"
    ></v-text-field>

    <gmap-map :center="center" :zoom="12" style="width:100%;  height: 700px;">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
        :title="m.title"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
      maps: "",
      calle: "",
      numero: "",
      poblacion: ""
    };
  },

  mounted() {
    this.geolocate();
    //seejecuta solo al inicio
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },

    async mapsVer() {
      try {
        const baseURI =
          "https://maps.googleapis.com/maps/api/geocode/json?address=" +
          this.calle +
          "+" +
          this.numero +
          ",+" +
          this.poblacion +
          "+&key=AIzaSyB-0SUyRksj2aPf0oK5yG59Uw2-q4aHDRU";
        let respuesta = await this.$axios.get(baseURI);
        this.maps = respuesta.data.results[0].geometry.location;
        const json = this.maps;
        var milatitud = 0;
        var milongitud = 0;
        milatitud = json.lat;

        milongitud = json.lng;

        const marker = {
          lat: milatitud,
          lng: milongitud,
        };

        this.markers = [];
        var image =
          "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

        this.markers.push({
          position: marker,
          title:"Clienteeee",
          image:image
                  });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;

        //{ "lat": 43.6642649, "lng": -7.594534800000001 }
      } catch (error) {
        console.log(error);
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>
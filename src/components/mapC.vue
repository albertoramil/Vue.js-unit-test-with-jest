<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>

      <label>
        <button @click="mapsVer">Añadir marker</button>
        {{maps}}
      </label>
      <br />
    </div>
    <br />
    <gmap-map :center="center" :zoom="12" style="width:100%;  height: 700px;">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
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
      maps: ""
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
    addMarker() {
      var milatitud = 0;
      var milongitud = 0;
      navigator.geolocation.getCurrentPosition(position => {
        milatitud = position.coords.latitude;
        milongitud = position.coords.longitude;
        const marker = {
          lat: milatitud,
          lng: milongitud
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      });
    },
    async mapsVer() {
      try {
        const baseURI =
          "https://maps.googleapis.com/maps/api/geocode/json?address=lodeiro+viveiro+&key=AIzaSyB-0SUyRksj2aPf0oK5yG59Uw2-q4aHDRU";
        let respuesta = await this.$axios.get(baseURI);
        this.maps = respuesta.data.results[0].geometry.location;
        const json = this.maps;
        var milatitud = 0;
        var milongitud = 0;
        milatitud = json.lat;

        milongitud = json.lng;
        console.logmilatitud;
        console.logmilongitud;

        const marker = {
          lat: milatitud,
          lng: milongitud
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
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
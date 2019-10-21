<template>
  <div>
        
        <v-text-field
          type="input"
          :rules="[v => !!v || '']"
          maxlength="25"
          hint="Tamaño máximo"
          v-model="title"
        ></v-text-field>
       
        <v-text-field
          type="input"
          :rules="[v => !!v || '']"
          maxlength="25"
          hint="Tamaño máximo"
          v-model="url"
        ></v-text-field>
       
        <v-text-field
          type="input"
          :rules="[v => !!v || '']"
          maxlength="25"
          hint="Tamaño máximo"
          v-model="albumId"
        ></v-text-field>
        <br />
        <br />

        <br />
        <br />
        <br />

  </div>
</template>


<script>
export default {
  name: "app",
  data() {
    return {
      ausers: [],
      perro: this.$store.getters.getidfoto,
      title:this.$store.getters.gettitle,
      url:this.$store.getters.geturl,
      albumId:this.$store.getters.getalbumId,

      info: [],
      search: "",
      cabecera2: [
        {
          text: "Título",
          align: "left",
          sortable: false,
          value: "title"
        },
        { text: "url", value: "url" },
        { text: "album", value: "albumId" }
      ]
    };
  },
  mounted() {
    this.$axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(response => (this.info = response.data));
  },
  methods: {
    async aconsulta() {
      try {
        const baseURI = "https://jsonplaceholder.typicode.com/photos";
        let respuesta = await this.$axios.get(baseURI);
        this.ausers = respuesta.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
  

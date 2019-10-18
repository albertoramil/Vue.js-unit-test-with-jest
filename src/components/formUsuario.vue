<template>
  <div>
    <v-btn color="indigo" class="white--text" @click="aconsulta">Carga</v-btn>
    <v-card>
      <v-card-title>
        Albunes
        <br />
        <br />
        <br />

        <div class="flex-grow-1"></div>
        <v-text-field v-model="search" label="Buscar"></v-text-field>
      </v-card-title>
  <v-data-table :headers="cabecera2" :items="info" :search="search">
        <template v-slot:items="props">
          <td>{{ props.item.title }}</td>
          <td>{{ props.item.url }}</td>
          <td>{{ props.item.albumId }}</td>
          <v-btn color="indigo" class="white--text" @click="consultaUsers">Ver(sin codigo)</v-btn>
        </template>
      </v-data-table>








    </v-card>
  </div>
</template>


<script>
export default {
  name: "app",
  data() {
    return {
      ausers: [],
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
        { text: "album", value: "albumId" },
        {}
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
  

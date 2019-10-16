<!--<template >
  <div>
      <template>
        <v-data-table
          :headers="cabecera2"
          :items="info"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
      </template>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      info:[],albumid:'',    
      cabecera2: [
          {
            text: 'Caralladas',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Título', value: 'title' },
          { text: 'url', value: 'url' },
          { text: 'album', value: 'albumId' },
        ]
    }
  }, mounted () {
    console.log ("entra en el mounted")
    this.$axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(response => (this.info = response.data))
  },
  

  methods: {
     
     async aconsulta() {
      try {
        const baseURI = 'https://jsonplaceholder.typicode.com/photos'
        let respuesta=await this.$axios.get(baseURI)
        this.ausers=respuesta
      } catch (error) {
        console.log("error")
        console.log(error)
        console.log("error")
      }  
    },
  }
}
</script>-->
  
<template>
  <div>
    <v-card>
      <v-btn color="indigo" class="white--text" @click="aconsulta">Carga Todo</v-btn>

      <v-card-title>
        Albunes
        <br />
        <br />
        <br />
        <br />

        <v-text-field v-model="search" label="   Busqueda por cualquier campo"></v-text-field>
      </v-card-title>

      <v-data-table :headers="cabecera2" :items="info" :search="search">
        <template v-slot:items="props">
          <td>{{ props.item.title }}</td>
          <td>{{ props.item.url }}</td>
          <td>{{ props.item.albumId }}</td>
        </template>
      </v-data-table>
      <v-btn color="indigo" class="white--text" @click="consultaUnAlbum">Carga un album</v-btn>
      <br />
    </v-card>

    <template>
      <!--<v-card
    max-width="344"
    esto es para el tamaño del card
      >-->

      <v-card>
        <v-card-text>
          <p class="display-1 text--primary">{{"Titulo: "}}{{album.title}}</p>
          <div class="text--primary">
            {{"Url: "}}{{album.url}}
            <br />
            {{"ThumbnailUrl: " }}{{album.thumbnailUrl}}
          </div>
        </v-card-text>
      </v-card>
    </template>
    <v-btn color="indigo" class="white--text" @click="consultaUsers">Carga usuarios</v-btn>

    <ul class="list-group">
      <!-- render filtered array items using 'v-for' -->
      <li v-for="(user, index) in users" :key="index" class="list-group-item">
        {{"Nombre "}} {{user.name}}
        {{"Apellidos "}}{{user.username}}
        {{"Email "}}{{user.email}}
        {{"Direccion "}} {{user.address.street}}
      </li>
    </ul>

    <ul class="list-group">
      <!-- render filtered array items using 'v-for' -->
      <li v-for="(user, index) in users" :key="index" class="list-group-item">
        <v-card>
          <v-card-text>
            <p class="display-1 text--primary"> {{user.name}}</p>
            <div class="text--primary">
              {{"Apellidos "}}{{user.username}}
              <br />
              {{"Email "}}{{user.email}}
            </div>
          </v-card-text>
        </v-card>
      </li>
    </ul>
  </div>
</template>


   

<script>
export default {
  data() {
    return {
      search: "",
      info: [],
      status: "",
      album: "",
      users: [],

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
  methods: {
    async aconsulta() {
      try {
        const baseURI = "https://jsonplaceholder.typicode.com/photos";
        let respuesta = await this.$axios.get(baseURI);
        this.info = respuesta.data;
        this.status = respuesta.status;
        console.log(respuesta.status);
      } catch (error) {
        console.log("error");
        console.log(error);
        console.log("error");
      }
    },
    async consultaUnAlbum() {
      try {
        const baseURI = "https://jsonplaceholder.typicode.com/photos";
        let respuesta = await this.$axios.get(baseURI);
        var albumConcreto = respuesta.data[5];
        this.album = albumConcreto;
      } catch (error) {
        console.log(error);
      }
    },
    async consultaUsers() {
      try {
        const baseURI = "https://jsonplaceholder.typicode.com/users";
        let respuesta = await this.$axios.get(baseURI);
        this.users = respuesta.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
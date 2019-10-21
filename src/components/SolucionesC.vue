
<template>
  <div>
    <v-card>
      <v-btn color="indigo" class="white--text" @click="aconsulta">Carga Todo</v-btn>

      <v-card-title v-show="verDataTable">
        Albunes
        <br />
        <br />
        <br />
        <br />

        <v-text-field
          v-show="verDataTable"
          v-model="search"
          label="   Busqueda por cualquier campo"
        ></v-text-field>
      </v-card-title>

      <v-data-table v-show="verDataTable" :headers="cabecera2" :items="info" :search="search">
        <template v-slot:items="props">
          <td>{{ props.item.title }}</td>
          <td>{{ props.item.url }}</td>
          <td>{{ props.item.albumId }}</td>
          <v-btn color="indigo" class="white--text" @click="verAlbum(props.item.id,props.item.title,props.item.url,props.item.albumId)">Ver(sin codigo)</v-btn>
        </template>
      </v-data-table>

      <v-btn
        v-show="canBeVisited"
        color="indigo"
        class="white--text"
        @click="buscarUnAlbum"
      >Buscar usuarios</v-btn>
      <br />
      <v-text-field
        v-show="verDataTable"
        v-model="userBuscado"
        :rules="nameRules"
        :counter="10"
        label="Album buscado"
        required
      ></v-text-field>
      <ul class="list-group">
        <!-- render filtered array items using 'v-for' -->
        <h3 v-if="usuariosBuscadosLongitud">{{"No existe coincidencia"}}</h3>

        <li v-else v-for="(user, index) in usuariosBuscados" :key="index" class="list-group-item">
          <v-card max-width="344">
            <v-card-text>
              <p class="display-1 text--primary">{{user.name}}</p>
              <div class="text--primary">
                {{"Apellidos "}}{{user.username}}
                <br />
                {{"Email "}}{{user.email}}
              </div>
            </v-card-text>
          </v-card>
          <br />
          <br />
          <br />
        </li>
      </ul>
      <br />

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
        <v-card max-width="344">
          <v-card-text>
            <p class="display-1 text--primary">{{user.name}}</p>
            <div class="text--primary">
              {{"Apellidos "}}{{user.username}}
              <br />
              {{"Email "}}{{user.email}}
            </div>
          </v-card-text>
        </v-card>
        <br />
        <br />
        <br />
      </li>
    </ul>
  </div>
</template>


   

<script>
import { ifError } from "assert";
export default {
  data() {
    return {
      search: "",
      info: [],
      infoLongitud: 0,
      usersLongitud: 0,

      status: "",
      album: "",
      users: [],
      userBuscado: "",
      usuariosBuscados: [],
      usuariosBuscadosLongitud: "",
      nameRules: [
        v => !!v || "Obligatorio",
        v => v.length <= 10 || "tasss pasao"
      ],

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
  computed: {
    //con esto simulamos el true o false para mostrarlo,
    //cuando es mayoy que 3 ya no la cumple y el boton de visit se oculta
    // lo podemos usar para otra cosas como un login vacio,
    // de modo que se recalculo solo al estar en la parte computed y no method
    canBeVisited: function() {
      return this.usersLongitud > 0;
    },
    verDataTable: function() {
      return this.infoLongitud > 0;
    }
  },
  methods: {
    async aconsulta() {
      try {
        const baseURI = "https://jsonplaceholder.typicode.com/photos";
        let respuesta = await this.$axios.get(baseURI);
        this.info = respuesta.data;
        this.status = respuesta.status;
        this.infoLongitud = this.info.length;

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
        this.usersLongitud = this.users.length;
      } catch (error) {
        console.log(error);
      }
    },
    buscarUnAlbum() {
      this.consultaUsers;
      this.usuariosBuscados = [];
      var usuarios = this.users;
      for (let i = 0; i < usuarios.length; i++) {
        var usuario = usuarios[i];
        var username = usuario.name;
        if (username.includes(this.userBuscado)) {
          this.usuariosBuscados.push(usuario);
        }
      }
      this.usuariosBuscadosLongitud = this.usuariosBuscados.length;

      if (this.usuariosBuscadosLongitud > 0) {
        this.usuariosBuscadosLongitud = 0;
      } else {
        this.usuariosBuscadosLongitud = 1;
      }
    },
    verAlbum(id,title,url,albumId) {
      this.$store.commit("SET_IDFOTO", id);
      this.$store.commit("SET_TITLE", title);
      this.$store.commit("SET_URL", url);
      this.$store.commit("SET_ALBUMID", albumId);

      this.$router.push("/formAlbumV");
    }
  }
};
</script>
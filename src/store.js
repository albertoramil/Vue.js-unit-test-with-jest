import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      loggedIn: false,
      username: "",
      token: ""
    },
    perros: {
      edad: "",
      genero: "",
      linea: ""

    }, calculadoraVariables: {
      primera: "",
      segunda: "",
      tercera: "",
      resultado: "0.0",
      cientifica: true

    }, foto: {
      idfoto: ""
      , title: ""
      , url: ""
      , albumId: ""
    }
  },
  getters: {
    isLoggedIn(state) {
      return state.auth.loggedIn
    },
    getUsername(state) {
      return state.auth.username
    },
    getToken(state) {
      return state.auth.token
    },
    getedad(state) {
      return state.perros.edad

    },
    getgenero(state) {
      return state.perros.genero
    },
    getlinea(state) {
      return state.perros.linea

    },
    getprimera(state) {

      return state.calculadoraVariables.primera
    },
    getsegunda(state) {
      return state.calculadoraVariables.segunda

    },
    gettercera(state) {
      return state.calculadoraVariables.tercera

    }, getresultado(state) {
      return state.calculadoraVariables.resultado

    }, getcientifica(state) {
      return state.calculadoraVariables.cientifica

    }, getidfoto(state) {
      return state.foto.idfoto

    }, gettitle(state) {
      return state.foto.title

    }, geturl(state) {
      return state.foto.url

    }, getalbumId(state) {
      return state.foto.albumId

    }
  },
  mutations: {
    SET_LOGGED_IN(state, status) {
      state.auth.loggedIn = status;
    },
    SET_USERNAME(state, username) {
      state.auth.username = username;
    },
    SET_TOKEN(state, token) {
      state.auth.token = token;
    },



    SET_EDAD(state, edad) {
      state.perros.edad = edad;
    },
    SET_GENERO(state, genero) {
      state.perros.genero = genero;
    },
    SET_LINEA(state, linea) {
      state.perros.linea = linea;
    },
    SET_PRIMERA(state, primera) {
      state.calculadoraVariables.primera = primera;
    },
    SET_SEGUNDA(state, segunda) {
      state.calculadoraVariables.segunda = segunda;
    },
    SET_TERCERA(state, tercera) {
      state.calculadoraVariables.tercera = tercera;
    },
    SET_RESULTADO(state, resultado) {
      state.calculadoraVariables.resultado = resultado;
    },
    SET_CIENTIFICA(state, cientifica) {
      state.calculadoraVariables.cientifica = cientifica;
    },
    SET_IDFOTO(state, idfoto) {
      state.foto.idfoto = idfoto;
    },
    SET_TITLE(state, title) {
      state.foto.title = title;
    },
    SET_URL(state, url) {
      state.foto.url = url;
    },
    SET_ALBUMID(state, albumId) {
      state.foto.albumId = albumId;
    }
  }
})

// actions -> mutations -> state
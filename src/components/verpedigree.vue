
<template>
  <div>
    <i>{{hint}}</i>

    <v-text-field type="input" data-test="zipCodeText" v-model="inputText"></v-text-field>

<!--
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label=" label=LABEL"
      required
    ></v-text-field>-->


    <v-text-field
      type="input"
      :rules="[v => !!v || '']"
      maxlength="25"
      hint="Tamaño máximo"
      data-test="entradaperro"
      v-model="perro"
    ></v-text-field>

    <v-btn v-on:click="save" data-test="saveButton" color="primary">Enter</v-btn>
    <v-btn
      color="success"
      data-test="handleClickButton"
      class="mr-4"
      @click="handleClick"
    >Ver Pedigree</v-btn>

    <br />
  </div>
</template>

<script>
export default {
  props: {
    hint: {
      type: String
    }
  },
  data() {
    return {
      inputText: "",
      perro: "",
      url:"",
      count: 0,

    };
  },
  methods: {
    save() {
      this.$emit("save", this.inputText);
      this.inputText = "";
    },
    increment () {
      this.count++
    },
    handleClick() {
      var valor = this.perro;
      console.log(valor);


      switch (valor) {
        case "cora": 
                    this.count++

          location.href ="https://pedigree.setter-anglais.fr/genealogie/arbre.php?id=11475&fn=pedigree&rq=CORA";
                this.url="https://pedigree.setter-anglais.fr/genealogie/arbre.php?id=11475&fn=pedigree&rq=CORA"

          break;

        case "imba":
          location.href ="https://pedigree.setter-anglais.fr/genealogie/arbre.php?id=32657";
          url=location.href
          break;

        case "lula":
          location.href ="https://pedigree.setter-anglais.fr/genealogie/arbre.php?id=48852";
          url=location.href
          break;

        case "lupin":
          location.href ="https://pedigree.setter-anglais.fr/genealogie/arbre.php?id=48853&fn=pedigree&rq=LUPIN+DE+LA+BARRERA";
          url=location.href
          break;

        default:
          break;
      }
    }
  }
};
</script>

<style>
.inputBox {
  height: 30px;
  width: 200px;
  border: 5px;
}
</style>









<!--
<template>
  <v-row align="center">
    <v-form
      ref="form"
      v-model="valid">

      <v-text-field
        v-model="perro"
        :counter="10"
        :rules="nameRules"
        label="Perro"
        required
      ></v-text-field>
      <v-btn
        color="success"
        class="mr-4"
        @click="handleClick"
      >
        Ver Pedigree
      </v-btn>     
    </v-form>
  </v-row>
</template>


<template>
    <v-container>
        <v-text-field
              type="input"

        data-test="entradaPerro"
          v-model="perro"
          :rules="[v => !!v || '']"
          maxlength="25"
          hint="Tamaño máximo"
          label="Introduce el nombre del perro"
        ></v-text-field>

        <v-btn  color="success" data-test="handleClickButton" class="mr-4" @click="handleClick">Ver Pedigree</v-btn>
    </v-container>
</template>




<script>
export default {
  data: () => {
   return {
      perro: "",
          habilitar: true,

      
    }
  },

  methods: {
    handleClick: function(event) {
      var valor = this.perro;
      console.log(valor);
      switch (valor) {
        case "cora":
          location.href =
            "https://pedigree.setter-anglais.fr/genealogie/arbre.php?id=11475&fn=pedigree&rq=CORA";
          break;

        case "imba":
          location.href =
            "https://pedigree.setter-anglais.fr/genealogie/arbre.php?id=32657";
          break;

        case "lula":
          location.href =
            "https://pedigree.setter-anglais.fr/genealogie/arbre.php?id=48852";
          break;

        case "lupin":
          location.href =
            "https://pedigree.setter-anglais.fr/genealogie/arbre.php?id=48853&fn=pedigree&rq=LUPIN+DE+LA+BARRERA";
          break;

        default:
          break;
      }
    },save(){
      this.$emit('save', this.perro)
      this.perro = "";
    }
  }
};
</script>
<style scoped>
.container {
  max-width: 1500px;
  margin: auto;
  padding: 15px 30px;
  /*  background-color: rgb(136,126,0);*/
  font-size: 180%;
}
</style>
-->

<template>
  <div>
    <i>{{hint}}</i>
    <v-text-field
      type="input"
      single-line
      placeholder="Enter US Zip code"
      data-test="zipCodeText"
      v-model="inputText"
    ></v-text-field>
    <v-btn v-on:click="save" data-test="saveButton" color="primary">Enter</v-btn>
    <v-btn  color="success" data-test="handleClickButton" class="mr-4" @click="handleClick">Ver Pedigree</v-btn>

    <br>
  </div>
</template>

<script>
export default {
  props: {
    hint: {
      type: String
    }
  },
  data () {
    return {
      inputText: "",
    }
  },
  methods: {
    save(){
      this.$emit('save', this.inputText)
      this.inputText = "";
    }
  }
}
</script>

<style>
  .inputBox{
    height:30px;
    width: 200px;
    border: 5px;
  }
</style>

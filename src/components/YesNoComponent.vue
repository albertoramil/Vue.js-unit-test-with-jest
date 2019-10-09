<template>
  <div>
    <button class="yes" @click="callYes">Yes</button>
    <button class="no" @click="callNo">No</button>
  </div>
</template>

<script>
  export default {
    name: 'YesNoComponent',

    props: {
      respuesta: {
        type: Function
      }
    },

    methods: {
      callYes() {
        this.respuesta('yes')
      },
      callNo() {
        this.respuesta('no')
      }
    }
  }
</script>
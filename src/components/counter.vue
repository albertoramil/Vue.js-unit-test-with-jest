<template>
    <div>
      <span class="count">{{ count }}</span>
      <buttonIncrement @click="increment">Increment</buttonIncrement>
      <buttonDecrement @click="decrement">decrement</buttonDecrement>

      <buttonResponder @click="responder">respuesta</buttonResponder>
      <span class="respuesta">{{ respuesta }}</span>

    </div>
</template>

<script>

export default {
  

 data () {
    return {
      count: 0,
      respuesta :""

    }
  },

  methods: {
    increment () {
      this.count++
    },
    decrement () {
      this.count--
    },
    responder () {
      this.respuesta="tonto"
    }
  }
}
</script>

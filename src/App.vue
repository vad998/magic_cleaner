<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;900&display=swap');

html {
  height: 100%;
  font-family: 'Roboto', sans-serif;
  body {
    height: 100%;
    #app {
      height: 100%;
    }
  }
}
</style>

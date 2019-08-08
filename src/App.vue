<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {

  name: 'App',

  mounted() {
    console.log('[init] mounted App')
    this.$store.dispatch('stoneheart/startLoading')
    setTimeout(()=>{
      this.$store.dispatch('stoneheart/stopLoading')
      console.log('hi',this.$store.state.stoneheart.isLoading)
      this.$forceUpdate()
    },2000)
  },

}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
  body {
    font-family: 'Press Start 2P', cursive;
  }
</style>

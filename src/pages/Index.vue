<template>
  <q-page style="max-width: 400px; margin: auto; background-color: white;">
    <transition
      leave-active-class="animated fadeOut"
    >
      <div v-show="isLoading" class="fullscreen absolute bg-black text-white flex flex-center">
        <div class="text-center">
          <div class="full-width">Loading...</div>
          <q-spinner
            color="white"
            size="3em"
            class="q-mt-sm"
          />
        </div>
      </div>
    </transition>
    <div>
      <login-component v-if="!game">
      </login-component>

    </div>
  </q-page>
</template>

<style>
</style>

<script>
import loginComponent from '../components/login.vue'
import mainScreenComponent from '../components/mainScreen.vue'
import battleScreenComponent from '../components/battleScreen.vue'

export default {

  name: 'Index',

  data(){
    return {
      
    }
  },

  computed: {
    game: function() {
      return this.$store.state.stoneheart.game
    },
    isLoading: function() {
      return this.$store.state.stoneheart.isLoading
    },
    save: function() {
      return this.$store.state.stoneheart.saveOne
    }
  },

  components:{
    "login-component": loginComponent,
    "main-screen-component": mainScreenComponent,
    "battle-screen-component": battleScreenComponent
  }
  
}
</script>

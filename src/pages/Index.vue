<template>
  <q-page style="max-width: 400px; margin: auto; background-color: yellow;">
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
      <login-component>
      </login-component>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import loginComponent from '../components/login'
export default {

  name: 'Index',

  data(){
    return {
      
    }
  },

  computed: {
    isLoading: function() {
      return this.$store.state.stoneheart.isLoading
    },
    save: function() {
      return this.$store.state.stoneheart.saveOne
    }
  },

  components:{
    "login-component": loginComponent
  }
  
}
</script>

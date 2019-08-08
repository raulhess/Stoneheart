<template>
  <q-page>
    <div v-show="isLoading" class="fullscreen absolute bg-grey flex flex-center">
      Ta carregando
    </div>
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

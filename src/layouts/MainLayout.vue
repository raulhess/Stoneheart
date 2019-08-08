<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar v-if="game">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {

  name: 'Layout',

  data () {
    return {
      
    }
  },

  computed: {
    game: function() {
      return this.$store.state.stoneheart.game
    },
  },

  methods: {

  }
}
</script>

<style>
</style>

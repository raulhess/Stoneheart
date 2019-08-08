import Vue from 'vue'
import Vuex from 'vuex'

import stoneheart from './stoneheart'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      stoneheart
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  console.log('[init] mounted store')

  return Store
}

import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from '@/Services/Pessoa/actions'
import * as getters from '@/Services/Pessoa/getters'
import mutations from '@/Services/Pessoa/mutations'
import state from '@/Services/Pessoa/state'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  strict: true,
  plugins: [createPersistedState({
    key: '_p_web',
    paths: [
      'currentPessoa'
    ],
    storage: window.sessionStorage
  })]
})

import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from '@/Services/Pessoa/actions'
import * as getters from '@/Services/Pessoa/getters'
import mutations from '@/Services/Pessoa/mutations'
import state from '@/Services/Pessoa/state'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

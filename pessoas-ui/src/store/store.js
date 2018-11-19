import Vue from 'vue'
import Vuex from 'vuex'
import * as pessoa from '@/Services/pessoa'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    confirmationModal: false,
    openModal: false,
    currentPessoa: {}
  },

  actions: {
    deletePesssoa ({ commit }, id) {
      pessoa.deletePessoa(id)
        .then(res => {
          commit('')
        })
    }
  },

  mutations: {
    changeConfirmationModal (state, confirmationModal) {
      console.log('confirmationModal (Antes): ' + state.confirmationModal)
      state.confirmationModal = confirmationModal
      console.log('confirmationModal (Depois): ' + state.confirmationModal)
    },
    changeOpenModal (state, openModal) {
      console.log('openModal (Antes): ' + state.openModal)
      state.openModal = openModal
      console.log('openModal (Depois): ' + state.openModal)
    },
    changeCurrentPessoa (state, currentPessoa) {
      console.log('currentPessoa (Antes): ' + state.currentPessoa._id)
      state.currentPessoa = currentPessoa
      console.log('currentPessoa (Depois): ' + state.currentPessoa._id)
    }
  },
  getters: {
    openModal: state => state.openModal,
    confirmationModal: state => state.confirmationModal,
    currentPessoa: state => state.currentPessoa
  }
})

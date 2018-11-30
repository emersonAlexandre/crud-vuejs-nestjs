export default {

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
  },

  changePessoas (state, pessoas) {
    state.pessoas = pessoas
  }
}

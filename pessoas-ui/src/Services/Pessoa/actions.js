import * as pessoa from './pessoa'

export const deletePesssoa = ({ commit }, id) => {
  pessoa.deletePessoa(id)
    .then(res => {
      commit('deletePessoa')
    })
}

export const getPessoas = ({ commit }) => {
  pessoa.getPessoas()
    .then(res => {
      commit('changePessoas', res.data)
    })
}

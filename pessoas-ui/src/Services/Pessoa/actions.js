import * as pessoa from './pessoa'

export const deletePessoa = ({ commit }, id) => {
  return pessoa.deletePessoa(id)
}

export const getPessoas = ({ commit }) => {
  pessoa.getPessoas()
    .then(res => {
      commit('changePessoas', res.data)
    })
}

export const setCurrentPessoa = ({ commit }, pessoa) => {
  commit('changeCurrentPessoa', pessoa)
}

export const alterarAlert = ({ commit }, alert) => {
  commit('changeAlert', alert)
}

export const createOrEditPessoa = ({ commit }, people) => {
  if (people._id) {
    return pessoa.updatePessoa(people)
  } else {
    return pessoa.createPessoa(people)
  }
}

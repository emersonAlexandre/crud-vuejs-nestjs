import axios from 'axios'

var url = 'http://localhost:3000/api/pessoas'

export const deletePessoa = (id) => {
  return axios.delete(`http://localhost:3000/api/pessoas/${id}`)
}

export const getPessoas = () => {
  return axios.get(url)
}

export const createPessoa = (pessoa) => {
  return axios.post(url, { name: pessoa.name, age: pessoa.age, birthday: pessoa.birthday }, { headers: { 'content-type': 'application/json' } })
}

export const updatePessoa = (pessoa) => {
  return axios.put(`http://localhost:3000/api/pessoas/${pessoa._id}`, { name: pessoa.name, age: pessoa.age, birthday: pessoa.birthday }, { headers: { 'content-type': 'application/json' } })
}

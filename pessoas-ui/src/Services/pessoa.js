import axios from 'axios'

export const deletePessoa = (id) => {
  const params = {
    id
  }
  return axios.delete('http://localhost:3000/api/pessoas', { params })
}

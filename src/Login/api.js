import axios from 'axios'

const API_URL = 'http://localhost:3001/api/v1/users'

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true // Necesario para cookies
})

export const login = async (username, password) => {
  const { data } = await api.post('/login', { username, password })
  return data
}

export const register = async (name,username, password) => {
  const { data } = await api.post('/register', {name, username, password })
  return data
}

export const logout = async () => {
  await api.post('/logout')
}

export const getProtected = async () => {
  const { data } = await api.get('/protected')
  return data
}

import api from './apiConfig';

export const loginUser = async (loginData) => {
  try {
    const resp = await api.post('/auth/login', { authentication: loginData })
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    return resp.data.user
  } catch (err) {
    alert('Login information incorrect, please re-enter')
  }
}

export const registerUser = async (registerData) => {
  try {
    const resp = await api.post('/users/', { user: registerData })
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    return resp.data.user
  } catch (err) {
    alert('Registration Error; Either email is already in use or you forgot to enter a password')
  }
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return null
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null
}

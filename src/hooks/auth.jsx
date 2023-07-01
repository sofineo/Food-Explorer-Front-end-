import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'
import { toast } from 'react-toastify'


const AuthContext = createContext({})


function AuthProvider({ children }) {
  const [data, setData] = useState({})
  
  async function signIn({ email, password }) {
    try {
      const response = await api.post('/session', { email, password })
      const { user, token } = response.data

      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
      localStorage.setItem('@foodexplorer:token', token)
  
      api.defaults.headers.common['Authorization'] = `Bear ${token}`
  
      setData({ user, token })

      toast(`Bem-vindo(a) ${user.name}`)
    } catch (error) {
      if(error.response) {
        toast.error(error.response.data.message)
      } else {
        toast.error('Não foi possível entrar')
      }
    }

  }

  async function signOut() {
    localStorage.removeItem('@foodexplorer:user')
    localStorage.removeItem('@foodexplorer:token')

    setData({})
  }


  useEffect(() => {
    const user = localStorage.getItem('@foodexplorer:user')
    const token = localStorage.getItem('@foodexplorer:token')

    if(token && user) {
      api.defaults.headers.common['Authorization'] = `Bear ${token}`

      setData({
        user: JSON.parse(user),
        token
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{
        signIn,
        signOut,
        user: data.user,
        token: data.token
      }}>
      { children }
    </AuthContext.Provider>  
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }
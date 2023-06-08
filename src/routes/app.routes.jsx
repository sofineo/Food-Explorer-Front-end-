import { Routes, Route } from 'react-router-dom'
import { useAuth } from '../hooks/auth'
import { HomeClient } from '../pages/HomeClient'
import { HomeAdmin } from '../pages/HomeAdmin'
import { NewDish } from '../pages/NewDish'
import { Error404 } from '../pages/Error404'
import { EditDish } from '../pages/EditDish'
import jwt_decode from 'jwt-decode'

export function AppRoutes() {
  const { token } = useAuth()

  let decoded = jwt_decode(token);
  const admin = Boolean(decoded.admin)

  return (
    <Routes>
      {admin ? <Route path='/' element={<HomeAdmin/>}/> : <Route path='/' element={<HomeClient/>}/>}
      {admin ? <Route path='/new' element={<NewDish/>}/> : <Route path='/new' element={<Error404/>}/>}
      {admin ? <Route path='/details/:id/edit' element={<EditDish/>}/> : <Route path='/details/:id/edit' element={<Error404/>}/>}
    </Routes>
  )
}
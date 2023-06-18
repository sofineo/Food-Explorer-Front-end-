import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/auth"
import jwt_decode from 'jwt-decode'



export function ProtectedRoutes() {
    const { token } = useAuth()
    let decoded = jwt_decode(token)
    console.log(decoded)

    const navigate = useNavigate()

    useEffect(() =>{
        if(!token){
          navigate('/')
        }
    })
    return(
        <>
            { token ? <Outlet/> : null }
        </>
    )
}

import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/auth"


export function ProtectedRoutes() {
    const { user } = useAuth()

    const navigate = useNavigate()

    useEffect(() =>{
        if(!user){
          navigate('/')
        }
    })
    return(
        <>
            { user ? <Outlet/> : null }
        </>
    )
}

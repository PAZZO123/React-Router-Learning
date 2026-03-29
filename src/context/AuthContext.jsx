import {createContext , useContext, useState} from 'react'

const AuthContext=createContext(null)
export default function AuthProvider({children}){
    const [user, setUser]=useState(null)
    const login =(email)=>setUser({email, name:'Pazzo'});
    const logout =()=>setUser(null)


    return (
        <AuthoContext.Provider value={{user, login , logout}}>
        {children}
        </AuthoContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext)
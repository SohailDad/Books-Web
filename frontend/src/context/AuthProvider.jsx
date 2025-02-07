import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()

function AuthProvider({Children}) {
    const initialAuthUser = localStorage.getItem("Users");
    const [authUser, setAuthUser] = useState(
        initialAuthUser? JSON.parse(initialAuthUser) :undefined
    );



  return (
    <AuthContext.Provider value={[authUser,setAuthUser]}>
        {Children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = ()=> useContext(AuthContext);
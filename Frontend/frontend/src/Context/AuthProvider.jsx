import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext();
export default function AuthProvider({children}) {
  const inAuthUser = localStorage.getItem("User");
  
  const [authUser, setAuthUser] = useState(
    inAuthUser ? JSON.parse(inAuthUser) : undefined
  )
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
        {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => useContext(AuthContext);

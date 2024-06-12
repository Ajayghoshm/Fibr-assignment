'use client'
import { useRouter } from 'next/navigation';
import { createContext, useContext, useState, useEffect } from 'react';


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  
  const login = async (userName, password) => {
    if(userName=='dashboard' && password=='password'){
        localStorage.setItem('auth',true)
        }
  };

  const logout = async () => {
    localStorage.setItem('auth',false)
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
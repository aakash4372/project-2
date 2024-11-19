import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authen, setAuthen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("authentication") || null);

  useEffect(() => {
    if (token) {
      setAuthen(true);
    }
  }, [token]);

  const login = (dummyToken) => {
    setToken(dummyToken);
    setAuthen(true);
    localStorage.setItem("authentication", dummyToken);
  };


  return (
    <AuthContext.Provider value={{ authen, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

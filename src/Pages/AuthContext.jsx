import { createContext, useContext, useState } from "react";


const AuthContext = createContext();


export const useAuth = () => {

  return useContext(AuthContext);
};

export const AuthProvider = ([children]) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    
    setUser(null)
   
  };

  const contextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
      </AuthContext.Provider>
  );
};

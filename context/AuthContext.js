import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [id, setId] = useState("");

  const login = (token, id) => {
    setToken(token);
    setId(id);
  };

  const logout = (token, id) => {
    setToken(null);
    setId(null);
  };

  return (
    <AuthContext.Provider value={{ token, id, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;

import React, { createContext, useState } from "react";

const initialState = { visible: false, type: "login" };

const AuthContext = createContext({
  showAuth: initialState,
  setShowAuth: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [showAuth, setShowAuth] = useState(initialState);

  return (
    <AuthContext.Provider value={{ showAuth, setShowAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

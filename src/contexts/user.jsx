import React, { createContext, useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  otp: 0,
};

const UserContext = createContext({ user: initialState, setUser: () => {} });

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

import React, { createContext, useState } from "react";

const initialState = { visible: false, header: "", message: "" };

const ToasterContext = createContext({
  showToast: initialState,
  setToast: () => {},
});

export const ToasterContextProvider = ({ children }) => {
  const [toast, setToast] = useState(initialState);

  return (
    <ToasterContext.Provider value={{ toast, setToast }}>
      {children}
    </ToasterContext.Provider>
  );
};

export default ToasterContext;

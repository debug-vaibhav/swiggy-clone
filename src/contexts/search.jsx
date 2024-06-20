import React, { createContext, useState } from "react";

const initialState = { visible: false };

const SearchContext = createContext(initialState);

export const SearchContextProvider = ({ children }) => {
  const [showSearch, setShowSearch] = useState(initialState);

  return (
    <SearchContext.Provider value={{ showSearch, setShowSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;

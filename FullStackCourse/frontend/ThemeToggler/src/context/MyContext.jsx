import React from "react";

export const MyContext = React.createContext();

const MyContextProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(false);
  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      {children}
    </MyContext.Provider>
  );
};
export default MyContextProvider;
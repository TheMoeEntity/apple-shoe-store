import { createContext, useState } from "react";
export const menu = createContext(null);

const Context = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <menu.Provider value={{ menuOpen, setMenuOpen }}>
        {children}
      </menu.Provider>
    );
  }
export default Context
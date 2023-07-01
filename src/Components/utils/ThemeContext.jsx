import { createContext, useState } from "react";

export const ContextGlobal = createContext();

export const ThemeContext = (props) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const body = document.body;
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      body.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      body.classList.remove("dark");
    }
  };

  const returnedValue = {
    value: theme,
    changeTheme: toggleTheme,
  };

  return (
    <ContextGlobal.Provider value={returnedValue}>
      {props.children}
    </ContextGlobal.Provider>
  );
};

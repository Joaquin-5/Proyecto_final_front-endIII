import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = (props) => {
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
    <ThemeContext.Provider value={returnedValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};

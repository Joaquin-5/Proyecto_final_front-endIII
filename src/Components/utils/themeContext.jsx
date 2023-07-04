import { createContext, useEffect, useRef, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = (props) => {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme || "light");
  const bodyRef = useRef(document.body);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    bodyRef.current.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const returnedValue = {
    actualTheme: theme,
    changeTheme: toggleTheme,
  };

  return (
    <ThemeContext.Provider value={returnedValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};

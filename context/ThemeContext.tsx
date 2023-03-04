import { createContext, useContext, useEffect, useState } from "react";

interface IThemeState {
  theme: string,
  darkMode: boolean
}

interface IThemeContext {
  state: IThemeState,
  toggleDarkMode: (checked: any) => void
}

const ThemeContext = createContext<IThemeContext>({
  state: { theme: "light", darkMode: false },
  toggleDarkMode: (checked: any) => false
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: any) {
  const [theme, setTheme] = useState("light");
  const [darkMode, setDarkMode] = useState(false);

  const previousTheme = theme === "dark" ? "light" : "dark";

  const toggleDarkMode = (checked: any) => {
    setTheme(checked ? "dark" : "light");
    setDarkMode(checked);
  }

  useEffect(() => {
    document.documentElement.classList.remove(previousTheme);
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ state: { theme, darkMode }, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
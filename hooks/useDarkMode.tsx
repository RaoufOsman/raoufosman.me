import { useState, useEffect } from "react";

export default function useDarkMode() {
  const [theme, setTheme] = useState("light");
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    document.documentElement.classList.remove(colorTheme);
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
    setTheme(theme);

  }, [theme, colorTheme]);


  // The return value is inferred as an array and not as a tuple.
  // https://stackoverflow.com/a/66216679
  return [colorTheme, setTheme] as const;
}
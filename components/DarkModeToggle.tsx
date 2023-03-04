import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "@/context/ThemeContext";
//import useDarkMode from "@/hooks/useDarkMode";

interface IDarkModeToggleProps {
  className?: string
}

export default function DarkModeToggle({ className }: IDarkModeToggleProps) {
  //const [colorTheme, setTheme] = useDarkMode();
  // const [darkMode, setDarkMode] = useState(
  //   colorTheme === "light" ? true : false
  // );

  // const toggleDarkMode = (checked: any) => {
  //   setTheme(colorTheme);
  //   setDarkMode(checked);
  // };

  const { state, toggleDarkMode } = useTheme();

  return (
    <DarkModeSwitch
      className={className}
      checked={state.darkMode}
      onChange={toggleDarkMode}
      size={30}
    />
  );
}
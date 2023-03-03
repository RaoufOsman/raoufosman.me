import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "@/hooks/useDarkMode";

interface IDarkModeToggleProps {
  className?: string
}

export default function DarkModeToggle({ className }: IDarkModeToggleProps) {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkMode, setDarkMode] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked: any) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  return (
    <DarkModeSwitch
      className={className}
      checked={darkMode}
      onChange={toggleDarkMode}
      size={30}
    />
  );
}
import { getItem, setItem } from "@/lib/utils";
import { useEffect, useState } from "react";

function useDarkmode() {
  const [darkMode, setDarkMode] = useState(getItem("darkMode", false));
  useEffect(() => {
    setItem("darkMode", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
  const toggleDarkMode = () => {
    setDarkMode((x: boolean) => !x);
  };
  return [darkMode, toggleDarkMode];
}

export default useDarkmode;

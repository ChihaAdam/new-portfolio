import { getItem, setItem } from "@/lib/utils";
import { useEffect, useState } from "react";

function useDarkmode() {
  const [darkMode, setDarkMode] = useState(getItem("darkMode", "false"));
  useEffect(() => {
    setItem("darkMode", darkMode);
    document.documentElement.classList.toggle("dark", darkMode === "true");
  }, [darkMode]);
  const toggleDarkMode = () => {
    setDarkMode(darkMode === "true" ? "false" : "true");
  };
  return [darkMode, toggleDarkMode];
}

export default useDarkmode;

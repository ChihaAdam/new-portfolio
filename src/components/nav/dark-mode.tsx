"use client";
import { Sun, Moon } from "lucide-react";
import { Button } from "../ui/button";
import useDarkmode from "@/hooks/useDarkmode";
import { useEffect, useState } from "react";

function DarkMode() {
  const [darkMode, toggleDarkMode] = useDarkmode();

  // prevent hydration error
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Button
      onClick={toggleDarkMode as React.MouseEventHandler<HTMLButtonElement>}
      className="cursor-pointer"
      variant="secondary"
    >
      {darkMode === "true" ? <Sun /> : <Moon />}
    </Button>
  );
}

export default DarkMode;

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="theme toggler"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-gray-2 dark:bg-dark-bg absolute right-17 mr-1.5 flex cursor-pointer items-center justify-center rounded-full text-black dark:text-white lg:static"
    >
      <Sun width={21} height={21} className="dark:hidden"/>
      <Moon width={21} height={21} className="hidden dark:block"/>
      
    </button>
  );
};

export default ThemeToggler;

"use client";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="transition-all duration-100"
    >
      <FontAwesomeIcon
        icon={faLightbulb}
        className="text-blue-500 dark:text-yellow-300"
      />
    </button>
  );
};

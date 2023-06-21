"use client";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="transition-all duration-100"
    >
      <FontAwesomeIcon
        icon={faLightbulb}
        className="text-indigo dark:text-yellow-300"
      />
    </button>
  );
};

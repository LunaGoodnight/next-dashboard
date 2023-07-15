"use client";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      className="p-2 cursor-pointer px-4 rounded dark:hover:bg-gray-500 hover:bg-gray-100"
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
    >
      <FontAwesomeIcon icon={faLightbulb} className="text-[#adb4d2]-500" />
    </button>
  );
};

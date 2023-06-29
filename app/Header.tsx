import { HideMenuButton } from "@/app/HideMenuButton";
import { Notification } from "@/app/Notification";
import { SearchBlock } from "@/app/SearchBlock";
import { ThemeButton } from "@/app/ThemeButton";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
  return (
    <header className="flex w-full justify-between bg-white fixed top-0 z-20">
      <div className="p-5 w-full flex justify-between shadow-md dark:bg-neutral-600 dark:text-gray-300">
        <div className="flex justify-between items-center w-2/12">
          <div className="font-bold text-indigo-900 text-3xl dark:text-yellow-300 pr-9">
            LunaAdmin
          </div>
          <HideMenuButton />
        </div>
        <nav className="flex gap-5 items-center">
          <SearchBlock />
          <ThemeButton />
          <Notification />
          <FontAwesomeIcon className="text-[#adb4d2]-500" icon={faCircleUser} />
        </nav>
      </div>
    </header>
  );
};

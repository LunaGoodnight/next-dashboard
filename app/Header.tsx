import { HideMenuButton } from "@/app/HideMenuButton";
import { Notification } from "@/app/Notification";
import { SearchBlock } from "@/app/SearchBlock";
import { ThemeButton } from "@/app/ThemeButton";
import { UserPanel } from "@/app/UserPanel";

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
        <nav className="gap-5 items-center sm:flex hidden">
          <SearchBlock />
          <ThemeButton />
          <Notification />
          <UserPanel />
        </nav>
      </div>
    </header>
  );
};

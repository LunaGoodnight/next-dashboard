"use client";

import Link from "next/link";
import {
  SideBarContextProvider,
  useSideBarContextContext,
} from "@/app/SideBarContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { leftMenuList } from "@/app/_config/leftMenuList";

export const SideBar = () => {
  return <Menu />;
};

export const Menu = () => {
  const { sideBarTextShow } = useSideBarContextContext();

  console.log("🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢", { sideBarTextShow });
  return (
    <ul className="flex w-60 flex-col shadow-md absolute left-0 bottom-0 h-max p-2 bg-white top-[5rem] transition-all duration-150">
      {leftMenuList.map(({ name, icon }) => {
        return (
          <li key={name}>
            <Link
              href={name}
              className="flex gap-2.5 p-3 rounded hover:bg-gray-50"
            >
              <div>
                <FontAwesomeIcon className="text-[#adb4d2]-500" icon={icon} />
              </div>
              {sideBarTextShow ? name : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

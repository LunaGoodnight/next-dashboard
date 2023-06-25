"use client";

import { leftMenuList } from "@/app/_config/leftMenuList";
import { useSideBarContextContext } from "@/app/SideBarContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const SideBar = () => {
  const { sideBarTextShow } = useSideBarContextContext();
  return (
    <ul className="flex flex-col shadow-md pt-[5.5rem] h-max p-2 bg-white top-[5rem] w-1/5">
      {leftMenuList.map(({ name, icon }) => {
        return (
          <li key={name}>
            <Link href={name} className="flex p-3 rounded hover:bg-gray-50">
              <div>
                <FontAwesomeIcon className="text-[#adb4d2]-500" icon={icon} />
              </div>
              {sideBarTextShow ? (
                <div className="transition-all duration-200 w-40 pl-3">
                  {name}
                </div>
              ) : (
                <div className="transition-all duration-200 w-0"></div>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

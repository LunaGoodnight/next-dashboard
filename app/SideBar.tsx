"use client";

import { useSideBarContextContext } from "@/app/useSideBarContextContext";
import Link from "next/link";
import { leftMenuList } from "@/app/_config/leftMenuList";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SideBar = () => {
  const { sideBarTextShow } = useSideBarContextContext();
  return (
    <ul className="flex flex-col shadow-md pt-[5.5rem] p-2 bg-white top-[5rem] min-h-screen">
      {leftMenuList.map(({ name, icon, path }) => {
        return (
          <li key={name}>
            <Link href={path} className="flex p-3 rounded hover:bg-gray-50">
              <div className="w-6">
                <FontAwesomeIcon className="text-[#adb4d2]-500" icon={icon} />
              </div>
              {sideBarTextShow ? (
                <div className="transition-all duration-200 w-60 pl-3">
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

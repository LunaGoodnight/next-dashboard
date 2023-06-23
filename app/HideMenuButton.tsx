"use client";

import { SideBarContextProvider } from "@/app/SideBarContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const HideMenuButton = () => {
  return (
    <SideBarContextProvider>
      <FontAwesomeIcon className="text-[#adb4d2]-500" icon={faBars} />
    </SideBarContextProvider>
  );
};

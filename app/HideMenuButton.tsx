"use client";

import {
  SideBarContextProvider,
  useSideBarContextContext,
} from "@/app/SideBarContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const HideMenuButton = () => {
  return <ToggleMenuButton />;
};

const ToggleMenuButton = () => {
  const { toggleSideBarTextShow, sideBarTextShow } = useSideBarContextContext();

  return (
    <div>
      <FontAwesomeIcon
        className="text-[#adb4d2]-500 cursor-pointer"
        icon={faBars}
        onClick={() => (toggleSideBarTextShow ? toggleSideBarTextShow() : null)}
      />
    </div>
  );
};

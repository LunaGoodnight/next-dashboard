"use client";

import { useSideBarContextContext } from "@/app/useSideBarContextContext";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HideMenuButton = () => {
  const { toggleSideBarTextShow } = useSideBarContextContext();
  return (
    <>
      <FontAwesomeIcon
        className="text-[#adb4d2]-500 cursor-pointer"
        icon={faBars}
        onClick={() => (toggleSideBarTextShow ? toggleSideBarTextShow() : null)}
      />
    </>
  );
};

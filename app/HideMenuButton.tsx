"use client";

import { useSideBarContextContext } from "@/app/SideBarContextProvider";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HideMenuButton = () => {
  return <ToggleMenuButton />;
};

const ToggleMenuButton = () => {
  const { toggleSideBarTextShow } = useSideBarContextContext();

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

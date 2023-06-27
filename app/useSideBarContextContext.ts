import { createContext, useContext } from "react";

interface ISideBarContext {
  sideBarTextShow: boolean;
  toggleSideBarTextShow?: () => void;
}

export const defaultState = {
  sideBarTextShow: true,
};

export const SideBarContext = createContext<ISideBarContext>(defaultState);
export const useSideBarContextContext = () => useContext(SideBarContext);

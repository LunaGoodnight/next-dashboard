"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface ISideBarContext {
  sideBarTextShow: boolean;
  toggleSideBarTextShow?: () => void;
}

const defaultState = {
  sideBarTextShow: true,
};

const SideBarContext = createContext<ISideBarContext>(defaultState);
export const useSideBarContextContext = () => useContext(SideBarContext);
export const SideBarContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [sideBarTextShow, setSideBarTextShow] = useState(
    defaultState.sideBarTextShow
  );
  const toggleSideBarTextShow = () => {
    setSideBarTextShow(!sideBarTextShow);
  };
  return (
    <SideBarContext.Provider value={{ sideBarTextShow, toggleSideBarTextShow }}>
      {children}
    </SideBarContext.Provider>
  );
};
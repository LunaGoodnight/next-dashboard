"use client";
import { defaultState, SideBarContext } from "@/app/useSideBarContextContext";
import { ReactNode, useState, useMemo, useCallback } from "react";

export const SideBarContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [sideBarTextShow, setSideBarTextShow] = useState(
    defaultState.sideBarTextShow
  );
  const toggleSideBarTextShow = useCallback(() => {
    setSideBarTextShow(!sideBarTextShow);
  }, [sideBarTextShow]);

  const sideBarValue = useMemo(
    () => ({ sideBarTextShow, toggleSideBarTextShow }),
    [sideBarTextShow, toggleSideBarTextShow]
  );

  return (
    <SideBarContext.Provider value={sideBarValue}>
      {children}
    </SideBarContext.Provider>
  );
};

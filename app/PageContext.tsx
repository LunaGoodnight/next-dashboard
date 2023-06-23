import { createContext, ReactNode, useState } from "react";

interface ISideBarContext {
  sideBarTextShow: boolean;
  toggleSideBarTextShow?: (sideBarTextShow: boolean) => void;
}

const defaultState = {
  sideBarTextShow: false,
};

const SideBarContext = createContext<ISideBarContext>(defaultState);

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

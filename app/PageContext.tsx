import { createContext, ReactNode } from "react";

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
  return (
    <SideBarContext.Provider value={{ sideBarTextShow: false }}>
      {children}
    </SideBarContext.Provider>
  );
};

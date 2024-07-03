import { createContext, FC, useContext, useMemo, useState } from "react";
import { TabContextWrapperProps, TabId, TabSelector } from "./types";

const defaultSelectedTab: TabId = 0;

const TabContext = createContext<TabSelector>({
  selectedTab: defaultSelectedTab,
  selectTab: () => {},
});

export const TabContextWrapper: FC<TabContextWrapperProps> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(defaultSelectedTab);
  const value = useMemo(
    () => ({ selectedTab, selectTab: setSelectedTab }),
    [selectedTab]
  );

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};

export const useTabContext = () => {
  return useContext(TabContext);
};

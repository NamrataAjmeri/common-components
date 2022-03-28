import React, { useContext, useState } from "react";
import classNames from "classnames/bind";
import { TabsType, TabType } from "../types/Tabs";
import styles from "./Tabs.module.scss";
import { TabsHeader } from "./TabsHeader";

const cx = classNames.bind(styles);
export const TabContext = React.createContext<string>("");

export const Tabs = ({ activeKey, children }: TabsType) => {
  const [activeTab, setActiveTab] = useState(activeKey);
  const onClickTabItem = (tab: string) => {
    setActiveTab(tab);
  };
  const tabElement = Array.isArray(children) ? children : [children];
  return (
    <TabContext.Provider value={activeTab}>
      <TabsHeader onClick={onClickTabItem}>{tabElement}</TabsHeader>
      {tabElement}
    </TabContext.Provider>
  );
};

export default Tabs;

import React, { ReactNode } from "react";

export type TabsType = {
  //tabKey of the tab displayed by default
  activeKey: string;
  /** Tabs that are to be displayed */
  children: TabType[];
};

export type TabType = React.ReactElement & {
  //Unique identity of the tab
  tabKey: string;
  /** Tile of the tab displayed at the header */
  title: string;
  //tabKey of the tab currently displayed
  activeKey: string;
  /** Tabs that are to be displayed */
  children: React.ReactNode | React.ReactNode[];
};

export type TabsHeaderType = {
  onClick: (tabKey: string) => void;
  /** Tabs that are to be displayed */
  children: TabType[];
  //styling header
  className?: string;
};

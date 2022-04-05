import React, { ReactNode } from "react";

export type TabsType = {
  /** tabKey of the tab displayed by default */
  activeKey: string;
  /** callback logic when the tab is selected */
  onSelect?: (tabKey: string) => void;
  /** Tabs to be displayed */
  children: TabType[];
  /** styling header container */
  className?: string;
};

export type TabType = React.ReactElement & {
  /** Unique identity of the tab */
  tabKey: string;
  /** Tile of the tab displayed at the header */
  title: string;
  /** tabKey of the tab currently displayed */
  activeKey: string;
  /** Styling header separately */
  className?: string;
  /** Styling tab content */
  tabContentClassName?: string;
  /** Tabs that are to be displayed */
  children: React.ReactNode | React.ReactNode[];
};

export type TabsHeaderType = {
  onClick: (tabKey: string) => void;
  /** Tabs that are to be displayed */
  children: TabType[];
  /** styling header container */
  className?: string;
};

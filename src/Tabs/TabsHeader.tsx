import React, { useContext } from "react";
import classNames from "classnames/bind";
import { TabsHeaderType } from "../types/Tabs";
import styles from "./Tabs.module.scss";
import { TabContext } from "./Tabs";

const cx = classNames.bind(styles);

export const TabsHeader = ({
  onClick,
  className,
  children,
}: TabsHeaderType) => {
  const activeTab = useContext(TabContext);

  return (
    <div className={`${className} ${cx("headerContainer")}`}>
      {children.map((tab) => {
        const { tabKey, title, className } = tab.props;
        return (
          <div
            className={`${cx("header", {
              "header--selected": tabKey === activeTab,
            })} ${className ?? ""}
          `}
            key={tabKey}
            onClick={() => onClick(tabKey)}
          >
            {title}
          </div>
        );
      })}
    </div>
  );
};

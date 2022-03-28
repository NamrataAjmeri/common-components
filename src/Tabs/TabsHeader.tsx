import React, { useContext } from "react";
import classNames from "classnames/bind";
import { TabsHeaderType } from "../types/Tabs";
import styles from "./Tabs.module.scss";
import { TabContext } from "./Tabs";

const cx = classNames.bind(styles);

export const TabsHeader = ({ onClick, children }: TabsHeaderType) => {
  const activeTab = useContext(TabContext);

  return (
    <div className={cx("headerContainer")}>
      {children.map((tab) => {
        const { tabKey, title, className } = tab.props;
        return (
          <div
            className={cx(
              "header",
              `${className}`,
              tabKey === activeTab ? "headerActive" : null
            )}
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

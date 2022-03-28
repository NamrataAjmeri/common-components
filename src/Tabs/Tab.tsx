import React, { useContext, useState } from "react";
import classNames from "classnames/bind";
import { TabType } from "../types/Tabs";
import styles from "./Tabs.module.scss";
import { TabContext } from "./Tabs";

const cx = classNames.bind(styles);

export const Tab = ({ tabKey, children }: TabType) => {
  const active = useContext(TabContext);
  return (
    <div>
      {tabKey === active ? (
        <div className={cx("tabItem")}>{children}</div>
      ) : null}
    </div>
  );
};

export default Tab;

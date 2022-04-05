import React, { useContext, useState } from "react";
import classNames from "classnames/bind";
import { TabType } from "../types/Tabs";
import styles from "./Tabs.module.scss";
import { TabContext } from "./Tabs";
import { CSSTransition } from "react-transition-group";

const cx = classNames.bind(styles);

export const Tab = ({
  tabKey,
  tabContentClassName = "",
  children,
}: TabType) => {
  const active = useContext(TabContext);
  return (
    <div>
      <CSSTransition
        in={tabKey === active}
        timeout={300}
        classNames={{
          enter: cx("my-enter"),
          enterActive: cx("my-active-enter"),
          exit: cx("my-exit"),
          exitActive: cx("my-active-exit"),
        }}
        unmountOnExit
      >
        <div className={cx("tabItem", tabContentClassName)}>{children}</div>
      </CSSTransition>
    </div>
  );
};

export default Tab;

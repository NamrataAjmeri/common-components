import React from "react";
import ReactLoader from "../Loader/ReactLoader";
import Title from "../Title/Title";
import styles from "./Panel.module.scss";
import PanelType from "../types/Panel";
import FontAwesome from "react-fontawesome";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const Panel = ({
  className = "",
  style,
  title,
  loaded,
  onClick,
  children,
  iconName,
}: PanelType) => {
  const isClickable = onClick && (loaded === undefined || loaded);

  return (
    <div
      className={cx(
        "commonPanel",
        {
          commonPanel__clickable: isClickable,
        },
        `${className}`
      )}
      style={style}
      onClick={isClickable ? onClick : () => null}
    >
      <div className={cx("commonPanel__titleContainer")}>
        {iconName && (
          <FontAwesome className={cx("commonPanel__icon")} name={iconName} />
        )}
        {title && (
          <Title type="panelheader" className={cx("commonPanel__title")}>
            {title}
          </Title>
        )}
      </div>
      {loaded !== undefined ? (
        <ReactLoader loaded={loaded} position={50}>
          {children}
        </ReactLoader>
      ) : (
        children
      )}
    </div>
  );
};

export default Panel;

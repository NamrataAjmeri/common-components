import React from "react";
import ReactLoader from "../Loader/ReactLoader";
import Title from "../Title/Title";
import "./Panel.css";
import PanelType from "../types/Panel";
import FontAwesome from "react-fontawesome";

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
      className={`commonPanel ${
        isClickable ? "commonPanel__clickable" : ""
      } ${className}`}
      style={style}
      onClick={isClickable ? onClick : () => null}
    >
      {iconName && <FontAwesome className={`customIcon`} name={iconName} />}
      {title && (
        <Title type="panelheader" className="commonPanel__title">
          {title}
        </Title>
      )}

      {loaded !== undefined ? (
        <div>
          <ReactLoader loaded={loaded} position={50}>
            {children}
          </ReactLoader>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default Panel;

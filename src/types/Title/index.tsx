import React from "react";

type TitleProps = {
  /** The inline style object applied to the containing div */
  style: React.CSSProperties;
  /** Determines the default inline style ("header", "subheader", "panelheader") the Title will use */
  type: string;
  /** The className applied to the containing div, useful for positioning */
  className: string;
  /** The content displayed */
  children: React.ReactNode | React.ReactNode[];
};

export default TitleProps;

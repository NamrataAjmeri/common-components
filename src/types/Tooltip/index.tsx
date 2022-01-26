import React, { ReactNode } from "react";

export type PositionType = "top" | "right" | "bottom" | "left";
export type triggerType = "hover" | "click";
export type alignType = "start" | "end" | "center";

type TooltipType = {
  /** A boolean to force the tooltip to become visible*/
  show: boolean;
  /** The possible values are top, right, bottom and left. */
  position: PositionType[];
  /** Boolean value on whether close button should be shown or not on the tooltip */
  shouldShowCloseButton: boolean;
  /** The heading of the tooltip. */
  title: string;
  /** The content of the tooltip. */
  content: ReactNode;
  /** The width of the tooltip. */
  width: number;
  /** Background theme of the tooltip. */
  isWhiteTheme: boolean;
  /** Tooltip gets displayed based on the trigger type */
  trigger: triggerType;
  // Align tooltip with respect to the target
  align: alignType;
  /** Element/Entity around which tooltip has to be displayed */
  children: React.ReactNode | React.ReactNode[];
};

export default TooltipType;

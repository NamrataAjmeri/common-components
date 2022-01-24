import React from "react";

export type PositionType = "top" | "right" | "bottom" | "left";
export type triggerType = "hover" | "click";

type TooltipType = {
  /** The inline style object applied to the containing div */
  show: boolean;
  /** The possible values are top, right, bottom and left. */
  position: PositionType[];
  /** Boolean value on whether close button should be shown or not on the tooltip */
  shouldShowCloseButton: boolean;
  /** The heading of the tooltip. */
  title: string;
  /** The content of the tooltip. */
  content: string;
  /** The width of the tooltip. */
  width: number;
  /** Background theme of the tooltip. */
  isWhiteTheme: boolean;
  /** true when tooptip is to be displayed after some user action. false when tooltip is to be displayed by hovering*/
  manual: boolean;
  /** Tooltip gets displayed based on the trigger type */
  trigger: triggerType;
  /** Element/Entity around which tooltip has to be displayed */
  children: React.ReactNode | React.ReactNode[];
};

export default TooltipType;

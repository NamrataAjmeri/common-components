import Panel from "../Panel/Panel";
import React from "react";
import Tooltip from "./Tooltip";

const Template = (args) => (
  <Panel
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      margin: "auto 0",
      display: "flex",
      justifyContent: "center",
      border: "none",
    }}
  >
    <Tooltip {...args}>
      <div>Hover Me</div>
    </Tooltip>
  </Panel>
);

export const Default = Template.bind({});
Default.args = {
  title: "This is a Headline",
  position: ["top"],
  show: false,
  shouldShowCloseButton: false,
  isWhiteTheme: false,
  content: "This is the tooltip content",
  trigger: "hover",
};

export default {
  title: "Tooltip",
  component: Tooltip,
  parameters: {
    componentSubtitle:
      "A wrapper component that enforces the same padding and border around content",
  },
};

import React from "react";
import Tabs from "./Tabs";
import Tab from "./Tab";

const Template = ({ ...args }) => (
  <Tabs activeKey="tabMenu01">
    <Tab tabKey="tabMenu01" title="Tab Menu 01">
      <div>Content for tab menu 1 </div>
    </Tab>
    <Tab tabKey="tabMenu02" title="Tab Menu 02">
      <div>Content for tab menu 2 </div>
    </Tab>
  </Tabs>
);

export const Default = Template.bind({});

export default {
  title: "Tabs",
  component: Tabs,
  parameters: {
    componentSubtitle:
      "A wrapper component that displays all tabs and contents if the active tab.",
  },
};

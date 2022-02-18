import React from "react";
import AlertMessage from "./AlertMessage";

const Template = (args) => (
  <AlertMessage {...args}>
    {
      "Changing the schedule will cause this workflow to restart the new scheduling period and cancel all current tasks under this window."
    }
  </AlertMessage>
);

export const Default = Template.bind({});
Default.args = {
  type: "warning",
  simplified: false,
};

export default {
  title: "AlertMessage",
  component: AlertMessage,
  parameters: {
    componentSubtitle: "",
  },
};

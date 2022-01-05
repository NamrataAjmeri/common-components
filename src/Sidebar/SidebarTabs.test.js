import React from "react";
import { render } from "@testing-library/react";
import SidebarTabs from "./SidebarTabs";
import userEvent from "@testing-library/user-event";

describe("Sidebar tab tests", () => {
  test("Should render SidebarTab ", () => {
    const activeTab = "manage_workflows";
    const setOpenListTab = jest.fn();
    const sampleLink = jest.fn();
    const sampleTabDetail = {
      id: "samples",
      title: "Samples",
      icon: "code-fork",
      link: sampleLink,
    };

    const { getByRole } = render(
      <SidebarTabs
        tabDetails={sampleTabDetail}
        activeTab={activeTab}
        openListTab={activeTab}
        setOpenListTab={setOpenListTab}
        isSidebarExpanded={true}
      />
    );

    const sampleItem = getByRole("tabTitle", {
      hidden: true,
    });
    userEvent.click(sampleItem);
    expect(sampleLink).toHaveBeenCalledTimes(1);
  });

  test("Should click dropdown on Sidebar ", () => {
    const scheduledTaskLink = jest.fn();
    const manageWorkflowLink = jest.fn();

    const activeTab = "manage_workflows";
    const setOpenListTab = jest.fn();

    const tabDetail = {
      id: "workflow",
      title: "Workflow",
      icon: "calendar",
      nested: [
        {
          id: "scheduled_task",
          title: "Scheduled Tasks",
          link: scheduledTaskLink,
        },
        {
          id: "manage_workflows",
          title: "Manage Workflows",
          link: manageWorkflowLink,
        },
      ],
    };

    const { getByRole, container } = render(
      <SidebarTabs
        tabDetails={tabDetail}
        activeTab={activeTab}
        openListTab={activeTab}
        setOpenListTab={setOpenListTab}
        isSidebarExpanded={true}
      />
    );

    const tasks = getByRole("list");
    const dropdownlist = getByRole("listdropdown");
    const scheduledTask = tasks.children[0];

    userEvent.click(dropdownlist);
    userEvent.click(scheduledTask);

    expect(scheduledTaskLink).toHaveBeenCalledTimes(1);
  });
});

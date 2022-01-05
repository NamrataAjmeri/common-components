import React from "react";
import { render } from "@testing-library/react";
import Sidebar from "./Sidebar";
import userEvent from "@testing-library/user-event";

describe("Sidebar tests", () => {
  const scheduledTaskLink = jest.fn();
  const manageWorkflowLink = jest.fn();
  const instrumentsListLink = jest.fn();
  const manageInstrumentsLink = jest.fn();
  const manageTestsLink = jest.fn();
  const sampleLink = jest.fn();
  const tabs = [
    {
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
    },
    {
      id: "field_lab",
      title: "Instruments",
      icon: "cubes",
      nested: [
        {
          id: "field_labs",
          title: "Instruments List",
          link: instrumentsListLink,
        },
        {
          id: "instruments_manage",
          title: "Manage Instruments",
          link: manageInstrumentsLink,
        },
        {
          id: "tests_manage",
          title: "Manage Tests",
          link: manageTestsLink,
        },
      ],
    },
    {
      id: "samples",
      title: "Samples",
      icon: "code-fork",
      link: sampleLink,
    },
  ];
  test("Should render Sidebar ", () => {
    const activeTab = "manage_workflows";
    const name = "Validere";
    const style = { background: "red" };
    const version = "a version";
    const onSignOut = jest.fn();
    const isPinned = true;
    const onPinClick = jest.fn();
    const onProfileClick = jest.fn();
    const onBackClick = jest.fn();

    const { container, getByRole } = render(
      <Sidebar
        activeTab={activeTab}
        tabs={tabs}
        name={name}
        onSignOut={onSignOut}
        style={style}
        isPinned={isPinned}
        onPinClick={onPinClick}
        version={version}
        onProfileClick={onProfileClick}
        onBackClick={onBackClick}
      />
    );

    const backToHubsButton = getByRole("button", { name: /backtohub/i });
    const settingButton = getByRole("button", { name: /settings/i });
    userEvent.click(backToHubsButton);
    userEvent.click(settingButton);
    userEvent.click(container);
    expect(onBackClick).toHaveBeenCalledTimes(1);
  });

  test(" Should render sidebar features even though sidebar not pinned ", () => {
    const activeTab = "manage_workflows";
    const name = "Validere";
    const className = "aClassName";
    const style = { background: "red" };
    const version = "a version";
    const onSignOut = jest.fn();
    const onPinClick = jest.fn();
    const onProfileClick = jest.fn();
    const onBackClick = jest.fn();

    const { getAllByRole } = render(
      <Sidebar
        activeTab={activeTab}
        tabs={tabs}
        name={name}
        onSignOut={onSignOut}
        className={className}
        style={style}
        onPinClick={onPinClick}
        version={version}
        onProfileClick={onProfileClick}
        onBackClick={onBackClick}
        homeTabText="Operations"
      />
    );

    const tabTitles = getAllByRole("tabTitle");
    expect(tabTitles[0].textContent).toEqual("Back to hubs");
    expect(tabTitles[1].textContent).toEqual("Operations");
    expect(tabTitles[2].textContent).toEqual("Workflow");
    expect(tabTitles[3].textContent).toEqual("Instruments");
    expect(tabTitles[4].textContent).toEqual("Samples");
    expect(tabTitles[5].textContent).toEqual("Lock Sidebar");
  });
});

import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBar from "./NavBar";

describe(" Navbar tests ", () => {
  test(" Should render Navbar with application links and profile button should be clicked", () => {
    const activeApplication = "dashboard";
    const permissions = {
      "dashboard:core": ["read"],
      "operations:core": ["read"],
      "commercial:core": ["read"],
      "esg:core": ["read"],
    };
    const name = "Validere";
    const onSignOut = jest.fn();
    const className = "ClassNameTest";
    const style = { background: "red" };
    const version = "version test";

    const { getByRole } = render(
      <NavBar
        activeApplication={activeApplication}
        permissions={permissions}
        name={name}
        onSignOut={onSignOut}
        className={className}
        style={style}
        version={version}
        url="https://validere.com"
      />
    );
    const profileIconButton = getByRole("button");

    const validereImage = getByRole("img", {
      name: /validere-icon-image/i,
    });

    const operationLink = getByRole("link", {
      name: /Operations/i,
    });

    const dashboardLink = getByRole("link", {
      name: /Dashboard/i,
    });

    const commercialLink = getByRole("link", {
      name: /Commercial/i,
    });

    const esgLink = getByRole("link", {
      name: /ESG/i,
    });

    userEvent.click(profileIconButton);

    expect(validereImage.getAttribute("src")).toEqual(
      "https://validere.com/wp-content/uploads/logo_validere_full.png"
    );

    expect(dashboardLink.getAttribute("href")).toEqual(
      "https://validere.com/app/dashboard"
    );
    expect(commercialLink.getAttribute("href")).toEqual(
      "https://validere.com/app/commercial"
    );
    expect(operationLink.getAttribute("href")).toEqual(
      "https://validere.com/app/operations"
    );
    expect(esgLink.getAttribute("href")).toEqual(
      "https://validere.com/app/esg"
    );
  });

  test(" Should render Navbar and sigout label should dissappear when clicked at random place  ", () => {
    const activeApplication = "dashboard";
    const permissions = {
      "dashboard:core": ["read"],
      "operations:core": ["read"],
      "commercial:core": ["read"],
      "esg:core": ["read"],
    };
    const name = "Validere";
    const onSignOut = jest.fn();
    const className = "aClassName";
    const style = { background: "red" };
    const version = "a version";

    const { container, getByRole } = render(
      <NavBar
        activeApplication={activeApplication}
        permissions={permissions}
        name={name}
        onSignOut={onSignOut}
        className={className}
        style={style}
        version={version}
        url="https://validere.com"
      />
    );

    const profileIconButton = getByRole("button");
    userEvent.click(profileIconButton);
    userEvent.click(container);
  });

  test("Active application is not dashboard ", () => {
    const activeApplication = "operations";
    const permissions = {
      "dashboard:core": ["read"],
      "operations:core": ["read"],
      "commercial:core": ["read"],
      "esg:core": ["read"],
    };
    const name = "Validere";
    const onSignOut = jest.fn();
    const style = { background: "red" };
    const version = "a version";

    const { container, getByRole } = render(
      <NavBar
        activeApplication={activeApplication}
        permissions={permissions}
        name={name}
        onSignOut={onSignOut}
        style={style}
        version={version}
        url="https://validere.com"
      />
    );

    const profileIconButton = getByRole("button");
    userEvent.click(profileIconButton);
    userEvent.click(container);
  });

  test("Should not render Dashboard, Operation and ESG link if user does not have read permission", () => {
    const activeApplication = "dashboard";
    const permissions = {
      "dashboard:core": [],
      "operations:core": [],
      "commercial:core": [],
      "esg:core": [],
    };
    const name = "Validere";
    const onSignOut = jest.fn();
    const className = "aClassName";
    const style = { background: "red" };
    const version = "a version";

    const { queryByRole, getByRole } = render(
      <NavBar
        activeApplication={activeApplication}
        permissions={permissions}
        name={name}
        onSignOut={onSignOut}
        className={className}
        style={style}
        version={version}
        url="https://validere.com"
      />
    );

    const validereImage = getByRole("img", {
      name: /validere-icon-image/i,
    });
    expect(validereImage.getAttribute("src")).toEqual(
      "https://validere.com/wp-content/uploads/logo_validere_full.png"
    );
    const operationLink = queryByRole("link", {
      name: /Operations/i,
    });

    const dashboardLink = queryByRole("link", {
      name: /Dashboard/i,
    });

    const commercialLink = queryByRole("link", {
      name: /Commercial/i,
    });

    const esgLink = queryByRole("link", {
      name: /ESG/i,
    });

    expect(operationLink).toBeFalsy();
    expect(dashboardLink).toBeFalsy();
    expect(commercialLink).toBeFalsy();
    expect(esgLink).toBeFalsy();

    const profileIconButton = queryByRole("button");
    userEvent.click(profileIconButton);
  });
});

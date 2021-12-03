import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Breadcrumbs from "./Breadcrumbs";

describe("Breadcrumbs tests", () => {
  test("Dom tree of one breadcrumb should be returned when one breadcrumb is given as input ", () => {
    const title = "A title";
    const onClick = jest.fn();
    const islastCrumb = true;

    const style = { background: "red" };
    const className = "TestClassName";

    const breadcrumbs = [{ title, onClick, islastCrumb }];
    const { getByText, container } = render(
      <Breadcrumbs
        breadcrumbs={breadcrumbs}
        className={className}
        style={style}
      />
    );
    const breadcrumbElement = getByText("A title");

    expect(container.firstChild.className).toMatch(/common__breadcrumbs/);
    expect(container.firstChild.className).toMatch(/TestClassName/);
    expect(container.firstChild.style.background).toMatch(/red/);
    expect(breadcrumbElement.textContent).toMatch("A title");
    expect(breadcrumbElement.className).toMatch(/breadcrumb__item/);
  });

  test("Dom tree of more than one breadcrumb should be returned when more than one breadcrumb is given as input", () => {
    const firstBreadcrumbFunction = jest.fn();
    const secondBreadcrumbFunction = jest.fn();

    const style = { background: "red" };
    const className = "TestClassName";
    const breadcrumbs = [
      {
        key: "1",
        title: "test",
        onClick: { firstBreadcrumbFunction },
        isLastBreadcrumb: false,
      },
      {
        key: "2",
        title: "test2",
        onClick: { secondBreadcrumbFunction },
        isLastBreadcrumb: true,
      },
    ];
    const { getByText, container } = render(
      <Breadcrumbs
        breadcrumbs={breadcrumbs}
        className={className}
        style={style}
      />
    );
    const firstBreadcrumbElement = getByText("test");
    const secondBreadcrumbElement = getByText("test2");

    expect(container.firstChild.className).toMatch(/common__breadcrumbs/);
    expect(container.firstChild.className).toMatch(/TestClassName/);
    expect(container.firstChild.style.background).toMatch(/red/);
    expect(container.firstChild.className).toMatch(/TestClassName/);
    expect(container.firstChild.style.background).toMatch(/red/);

    expect(firstBreadcrumbElement.parentElement.className).toMatch(
      "breadcrumb__item"
    );
    expect(firstBreadcrumbElement.textContent).toMatch("test");
    expect(firstBreadcrumbElement.className).toMatch("breadcrumb__link");
    expect(secondBreadcrumbElement.className).toMatch("breadcrumb__item");
    expect(secondBreadcrumbElement.textContent).toMatch("test2");
  });

  test("Empty div tag is returned when no breadcrumb is given as an input", () => {
    const breadCrumbs = [];
    const { container } = render(<Breadcrumbs breadcrumbs={breadCrumbs} />);
    expect(container.firstChild).toBeFalsy();
  });
});

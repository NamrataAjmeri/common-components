import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";
import FontAwesome from "react-fontawesome";

describe("Button tests", () => {
  test("Button should be returned with specific label and classname", () => {
    const buttonContent = "Button Text";
    const className = "a ClassName";
    const icon = "fa-download";
    const iconClassName = "iconClassName";
    const variant = "primary";
    const onClick = jest.fn();

    const { queryByText, container } = render(
      <Button
        className={className}
        icon={icon}
        variant={variant}
        onClick={onClick}
        iconClassName={iconClassName}
      >
        <div className="content">{buttonContent}</div>
      </Button>
    );

    const result = queryByText("Button Text");
    expect(container.firstChild.firstChild.className).toMatch(/fa-download/);
    expect(result.textContent).toMatch(buttonContent);
  });

  test("onClick method should be called when button is clicked", () => {
    const buttonContent = "Button Text";
    const className = "a ClassName";
    const icon = "fa-download";
    const iconClassName = "iconClassName";
    const variant = "primary";
    const onClick = jest.fn();

    const { container } = render(
      <Button
        className={className}
        icon={icon}
        variant={variant}
        onClick={onClick}
        iconClassName={iconClassName}
      >
        <div className="content">{buttonContent}</div>
      </Button>
    );
    fireEvent.click(container.firstChild);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

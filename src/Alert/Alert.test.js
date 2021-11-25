import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Alert from "./Alert";

describe("Alert tests", () => {
  test("OnClick method should be called when Close button is clicked", () => {
    const onCloseMock = jest.fn();
    const { getByTestId } = render(
      <Alert message={"Test"} onClose={onCloseMock} />
    );
    const addSettingsButton = getByTestId("on-close-id");
    fireEvent.click(addSettingsButton);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test("Button should not be displayed when OnClick method not passed", () => {
    const { queryByTestId } = render(<Alert message={"Test"} />);
    const addSettingsButton = queryByTestId("on-close-id");
    expect(addSettingsButton).toBeFalsy();
  });

  test("Message text that is passed should be displayed", () => {
    const onCloseMock = jest.fn();
    const { queryByTestId } = render(
      <Alert message={"Test"} onClose={onCloseMock} />
    );
    const message = queryByTestId("message-id");
    expect(message.textContent).toBe("Test");
  });
});

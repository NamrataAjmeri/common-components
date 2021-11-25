import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AlertProvider from "./AlertProvider";

describe("Alert Provider tests", () => {
  test("Alert component should not be rendered when alertlist is empty", () => {
    const onCloseMock = jest.fn();
    const { queryByTestId } = render(<AlertProvider />);
    const alertComponent = queryByTestId("message-id");
    expect(alertComponent).toBeFalsy();
  });
});

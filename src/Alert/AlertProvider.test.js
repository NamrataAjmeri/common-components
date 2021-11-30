import React from "react";
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/react";
import AlertProvider, { useAlert } from "./AlertProvider";
import PropTypes from "prop-types";

const MockAlerts = ({ message }) => {
  const { addAlert, removeAlert } = useAlert();

  const addButtonClick = () => {
    addAlert({
      variant: "success",
      message: message,
    });
  };

  return (
    <div>
      <button onClick={() => removeAlert()}>Remove Alert</button>
      <button onClick={() => addButtonClick()}>Add Alert</button>
    </div>
  );
};
MockAlerts.propTypes = {
  message: PropTypes.string,
};

describe("Alert Provider tests", () => {
  test("Alert component should not be rendered when alertlist is empty", () => {
    const { queryByRole } = render(
      <AlertProvider timeout={100}></AlertProvider>
    );

    const alertComponent = queryByRole("text", { name: "message" });

    expect(alertComponent).toBeFalsy();
  });

  test("Alert messages should get displayed when alert button is clicked", async () => {
    const message = "Test Message";
    const { queryByText, queryByLabelText, queryByRole } = render(
      <AlertProvider timeout={100}>
        <MockAlerts message={message} />
      </AlertProvider>
    );

    const addAlertButton = queryByText("Add Alert");
    fireEvent.click(addAlertButton);

    expect(queryByRole("alert").textContent).toEqual(message);
    expect(queryByLabelText("close")).toBeTruthy();

    await waitForElementToBeRemoved(() => queryByRole("alert"));

    expect(queryByRole("alert")).toBeFalsy();
  });

  test("Alert message should get deleted when exceeds max alerts", async () => {
    const message = "Test Message";
    const { queryByText, queryAllByRole } = render(
      <AlertProvider timeout={100}>
        <MockAlerts message={message} />
      </AlertProvider>
    );

    const addAlertButton = queryByText("Add Alert");
    fireEvent.click(addAlertButton);
    fireEvent.click(addAlertButton);
    fireEvent.click(addAlertButton);
    fireEvent.click(addAlertButton);
    fireEvent.click(addAlertButton);
    fireEvent.click(addAlertButton);
    fireEvent.click(addAlertButton);
    expect(queryAllByRole("alert").length).toEqual(5);
  });
});

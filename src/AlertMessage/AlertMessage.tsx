import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./AlertMessage.module.scss";
import AlertMessageType from "../types/AlertMessage";
import FontAwesome from "react-fontawesome";

const cx = classNames.bind(styles);

const AlertMessage = ({
  type,
  simplified = false,
  children,
  onClose,
}: AlertMessageType) => {
  const getIconByType = (type: string) => {
    switch (type) {
      case "alert":
        return (
          <FontAwesome
            name="far fa-exclamation-triangle"
            className={`${cx("alerticon")}`}
          />
        );
      case "info":
        return (
          <FontAwesome
            name="fal fa-exclamation-circle"
            className={`${cx("infoicon")}`}
          />
        );
      case "warning":
        return (
          <FontAwesome
            name="exclamation-circle"
            className={`${cx("warningicon")}`}
          />
        );
    }
    return null;
  };

  return (
    <div
      className={
        simplified
          ? `${cx(
              "alertMessageContainer",
              "alertMessageContainer--simplified"
            )}`
          : `${cx("alertMessageContainer", `alertMessageContainer--${type}`)}`
      }
      role="alert-message"
    >
      <div className={cx("informationContainer")}>
        <div className={cx("icon")}>{getIconByType(type)} </div>
        <div className={cx("text")}>{children}</div>
        {onClose && (
          <button
            aria-label="close"
            className={cx("closeButton")}
            onClick={onClose}
          >
            <FontAwesome name="times fa fa-fw" />
          </button>
        )}
      </div>
    </div>
  );
};

export default AlertMessage;

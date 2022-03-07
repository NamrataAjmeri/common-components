import React from "react";
import styles from "./AlertMessage.module.scss";
import FontAwesome from "react-fontawesome";
import classNames from "classnames/bind";
import { AlertMessageIconType } from "../types/AlertMessage";

const cx = classNames.bind(styles);

export const AlertMessageIcon = ({ type }: AlertMessageIconType) => {
  switch (type) {
    case "alert":
      return (
        <FontAwesome
          name="exclamation-circle"
          className={`${cx("alerticon")}`}
        />
      );
    case "info":
      return <FontAwesome name="info-circle" className={`${cx("infoicon")}`} />;
    case "warning":
      return (
        <FontAwesome
          name="exclamation-circle"
          className={`${cx("warningicon")}`}
        />
      );
  }
};

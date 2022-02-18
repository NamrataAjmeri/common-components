import { ReactNode } from "react";

export type MessageType = "alert" | "warning" | "info";

type AlertMessageType = {
  /** Describes if the message displayed is info, alert or warning */
  type: MessageType;
  /**  */
  simplified: boolean;
  /** Text to be displayed */
  children: string;
};

export default AlertMessageType;

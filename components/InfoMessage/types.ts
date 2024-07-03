import { ReactNode } from "react";

export enum MessageTypes {
  succes = "succes",
  error = "error",
  warning = "warning",
  info = "info",
}

export type MessageType = keyof typeof MessageTypes;

export interface InfoMessage {
  children: ReactNode;
  type: MessageType;
}

import React from "react";
import { MessageType } from "../../components/InfoMessage/types";

export type showToastType = ({
  message,
  type,
}: {
  message: string;
  type: MessageType;
}) => void;

export type ToastMessageType = {
  message: string;
  type: MessageType;
};

export interface Toast {
  message: ToastMessageType;
  showToast: showToastType;
  isShow: boolean;
}

export interface ToastContextWrapperType {
  children: React.ReactNode;
}

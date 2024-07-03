import { useEffect } from "react";
import { useToastContext } from "../context/ToastContext";
import { ToastMessageType } from "../context/ToastContext/types";

export const useToast = ({ message, type }: ToastMessageType) => {
  const { showToast, isShow } = useToastContext();

  useEffect(() => {
    if (message) {
      showToast({ message, type });
    }
  }, [message]);

  return isShow;
};

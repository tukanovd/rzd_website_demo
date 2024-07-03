import { MessageTypes } from "./types";

export const iconSrcSuccess = "/assets/success.svg";
export const iconSrcError = "/assets/error.svg";
export const iconSrcWarning = "/assets/warning.svg";
export const iconSrcInfo = "/assets/info.svg";

export const iconSize = 20;

export const iconTypes = {
  [MessageTypes.succes]: iconSrcSuccess,
  [MessageTypes.error]: iconSrcError,
  [MessageTypes.warning]: iconSrcWarning,
  [MessageTypes.info]: iconSrcInfo,
};

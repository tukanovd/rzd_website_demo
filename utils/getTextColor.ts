import { TextColorType } from "./types";

export const getTextColor = (textColor?: TextColorType) => {
  switch (textColor) {
    case "black":
      return "color-primary-black";
    case "primary":
      return "color-primary";
    case "secondary":
      return "color-secondary";
    default:
      return "";
  }
};

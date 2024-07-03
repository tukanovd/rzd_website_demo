import c from "classnames";
import { Size, SizeType } from "../../utils";
import { TypographyVariant } from "../Typography/types";
import { TabVariantType } from "./types";

export const getTabStyle = (variant: TabVariantType, isSelected: boolean) => {
  switch (variant) {
    case "underline":
      return c("border-border-width_zero border-primaryHover", {
        "border-b border-b-width": isSelected,
      });
    case "framed":
      return "bg-color-primary";
  }
};
export const getTabSize = (size: SizeType) => {
  switch (size) {
    case "s":
      return "p-1";
    case "m":
      return "py-2 px-1";
    case "l":
      return "py-2 px-3";
  }
};
export const getTextSize: (size: SizeType) => TypographyVariant = (size) => {
  if (size === Size.l) return "h2";

  return "p1";
};

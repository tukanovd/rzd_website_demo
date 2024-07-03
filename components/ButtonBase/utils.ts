import c from "classnames";
import { VariantsType } from "./types";
import { Size, SizeType } from "../../utils";

type getClassNameByState = {
  variant?: VariantsType;
  isHovered?: boolean;
  isSelected?: boolean;
};

export const getClassNameByState = ({
  variant,
  isHovered,
  isSelected,
}: getClassNameByState) => {
  switch (variant) {
    case "disabled":
      return "border-blind-width_base border-custom-transparent color-secondary bg-color-common";
    case "outline":
      return c("border-controls border-blind-width_base", {
        "bg-color-primary color-primary-white border-custom-transparent border-width_hover":
          isHovered,
        "border-width_base color-primary-black": !isHovered,
      });
    case "text":
      return c("border-border-width_zero border-custom-transparent", {
        "bg-color-primaryHover color-primary-white border-width_hover":
          isHovered,
        "color-primary": !isHovered,
        "border-blind-width_base": isSelected,
      });
    default:
      return c(
        "border-custom-transparent border-blind-width_base color-primary-white bg-color-primary",
        {
          "bg-color-primaryHover border-width_hover": isHovered,
        }
      );
  }
};

export const getButtonSizeClass = (size?: SizeType) => {
  return c("px-4 min-w-[7.5rem]", {
    "h-8 py-2": size === Size.s,
    "h-11 py-3.5": size === Size.m,
    "h-input-l py-5": size === Size.l,
    "min-w-0 min-h-0 px-0": size === Size.content,
  });
};

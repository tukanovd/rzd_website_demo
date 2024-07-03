import { defaultSize, smallSize } from "./constants";
import { Size, SizeType } from "../../utils";
import { VariantsType } from "../ButtonBase/types";
import { ColorsType } from "../Icons/constants";

export const getIconSize = (size: SizeType) => {
  if (size === Size.s) {
    return smallSize;
  }
  return defaultSize;
};
export const calcBtnIconColor = (
  variant?: VariantsType,
  isHovered?: boolean
) => {
  if (isHovered && variant !== "disabled") {
    return ColorsType.white;
  }
  if (variant === "outline") {
    return ColorsType.grey;
  }
  if (variant === "disabled") {
    return ColorsType.grey;
  }
  if (variant === "text") {
    return ColorsType.primary;
  }
  return ColorsType.white;
};

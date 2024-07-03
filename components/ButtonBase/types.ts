import { ReactNode } from "react";
import { SizeType } from "../../utils";

export enum Variants {
  "text" = "text",
  "outline" = "outline",
  "disabled" = "disabled",
  "primary" = "primary",
}
export type VariantsType = keyof typeof Variants;

export interface ButtonBaseProps {
  id?: string;
  onClick?: () => void;
  onHover?: (isHovered: boolean) => void;
  size?: SizeType;
  children: ReactNode;
  classNames?: string;
  variant?: VariantsType;
  isSelected?: boolean;
}

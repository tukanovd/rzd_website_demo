import { ColorsType } from "./constants";

export type Color = keyof typeof ColorsType;
export type Icon = {
  color?: Color;
  width?: number;
  height?: number;
};

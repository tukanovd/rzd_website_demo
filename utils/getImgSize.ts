import { Size, SizeType } from "./types";

export const getSize = (size?: SizeType) => {
  if (size === Size.s) {
    return "md:h-[240px] h-[200px]";
  }
  if (size === Size.m) {
    return "md:h-[360px] h-[200px]";
  }
  if (size === Size.content) {
    return "";
  }
  return "h-[500px]";
};

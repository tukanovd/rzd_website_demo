import { Size, SizeType } from "./types";

export const getSizeClass = (size?: SizeType) => {
  const defaultStyle = "px-4 min-w-[7.5rem]";
  if (size === Size.s) {
    return `${defaultStyle} h-input-s py-2`;
  } else if (size === Size.m) {
    return `${defaultStyle} h-input-m py-4`;
  }
  return `${defaultStyle} h-input-l py-5`;
};

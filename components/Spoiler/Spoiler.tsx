import { useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";
import c from "classnames";
import Typography, { typographyVariants } from "../Typography";
import { closeSpoiler, defaultHeight, defaultStyle } from "./constants";
import type { Height, Spoiler as SpoilerType } from "./types";
import { Size, SizeType } from "@utils";
import { ChevronDown, ChevronUp } from "../Icons";

const getTextSize = (size: SizeType) => {
  if (size === Size.s) {
    return typographyVariants.p2;
  }
  if (size === Size.m) {
    return typographyVariants.p1;
  }
  return typographyVariants.h3;
};

const getStyleBySize = (size: SizeType) => {
  if (size === Size.s) {
    return "py-3";
  }
  if (size === Size.m) {
    return "py-4";
  }
  return "py-5";
};

const Spoiler = ({
  header,
  children,
  size = Size.m,
  isOpen,
  onClick,
  maxHeight,
  className,
  headerStyle,
}: SpoilerType) => {
  const [height, setHeight] = useState<Height>(closeSpoiler);
  const style = c(defaultStyle, className, getStyleBySize(size));
  const textSize = getTextSize(size);

  useEffect(() => {
    if (isOpen) setHeight(maxHeight || defaultHeight);
    else if (!isOpen) setHeight(closeSpoiler);
  }, [isOpen, maxHeight]);
  const Chevron = isOpen ? ChevronUp : ChevronDown;

  return (
    <div className={style}>
      <span
        className={c(
          "flex cursor-pointer justify-between items-center",
          headerStyle
        )}
        onClick={onClick}
      >
        <Typography variant={textSize}>{header}</Typography>
        <Chevron />
      </span>
      <AnimateHeight height={height}>{children}</AnimateHeight>
    </div>
  );
};

export default Spoiler;

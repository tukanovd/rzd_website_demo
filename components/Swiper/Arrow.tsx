import React from "react";
import c from "classnames";
import InlineImage from "../Image/InlineImage";
import { ArrowNextProps, ArrowPrevProps } from "./types";

const arrowLeftSrc = "/assets/arrowLeft.svg";
const arrowRightSrc = "/assets/arrowRight.svg";
const arrowSize = 48;

export const ArrowPrev = ({
  clickHandler,
  hasPrev,
  isStack,
}: ArrowPrevProps) => {
  if (!hasPrev) return null;

  const style = c({
    "pl-[8.33%] md:flex hidden": !isStack,
  });
  return (
    <Arrow
      className={style}
      imgSrc={arrowLeftSrc}
      clickHandler={clickHandler}
    />
  );
};

export const ArrowNext = ({
  clickHandler,
  hasNext,
  isStack,
}: ArrowNextProps) => {
  if (!hasNext) return null;

  const style = c("justify-end top-0", {
    "pr-[8.33%] md:flex hidden": !isStack,
  });
  return (
    <Arrow
      className={style}
      imgSrc={arrowRightSrc}
      clickHandler={clickHandler}
    />
  );
};

const Arrow = ({
  clickHandler,
  imgSrc,
  className,
}: {
  clickHandler: () => void;
  imgSrc: string;
  className?: string;
}) => {
  const style = c("absolute flex items-center h-full w-full", className);

  return (
    <div className={style}>
      <div className="cursor-pointer z-40" onClick={clickHandler}>
        <InlineImage src={imgSrc} width={arrowSize} height={arrowSize} />
      </div>
    </div>
  );
};

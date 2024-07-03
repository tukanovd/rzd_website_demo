import { useEffect } from "react";
import c from "classnames";
import { getButtonSizeClass, getClassNameByState } from "./utils";
import useHover from "../../hooks/useHover";
import { Size } from "@utils";
import { ButtonBaseProps, Variants } from "./types";
import { defaultStyle } from "./constants";

export const ButtonBase = ({
  id,
  classNames,
  variant = Variants.primary,
  onClick,
  onHover,
  isSelected,
  children,
  size = Size.m,
}: ButtonBaseProps) => {
  const [elementRef, isHovered] = useHover<HTMLButtonElement>();
  const disabled = variant === Variants.disabled;

  useEffect(() => {
    if (onHover) {
      onHover(isHovered);
    }
  }, [isHovered, onHover]);

  const className = c(
    classNames,
    defaultStyle,
    getClassNameByState({ variant, isHovered, isSelected }),
    getButtonSizeClass(size)
  );

  return (
    <button
      ref={elementRef}
      id={id}
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonBase;

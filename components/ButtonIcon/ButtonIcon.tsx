import { useCallback, useState } from "react";
import { Button } from "../index";
import { DownloadArrow } from "../Icons";
import { ButtonIconProps } from "./types";
import { calcBtnIconColor, getIconSize } from "./utils";
import { Size } from "@utils";

const ButtonIcon = ({ children, width, height, ...props }: ButtonIconProps) => {
  const { size = Size.m, variant } = props;
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = useCallback((isHovered: boolean) => {
    setIsHovered(isHovered);
  }, []);
  const iconWidth = width ? width : getIconSize(size);
  const iconHeight = height ? height : getIconSize(size);
  const iconColor = calcBtnIconColor(variant, isHovered);

  return (
    <Button {...props} onHover={handleHover}>
      <span className="flex justify-center gap-2 items-center">
        {children}
        <DownloadArrow
          width={iconWidth}
          height={iconHeight}
          color={iconColor}
        />
      </span>
    </Button>
  );
};

export default ButtonIcon;

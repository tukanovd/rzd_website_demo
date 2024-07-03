import cn from "classnames";
import { LayoutType } from "./types";
import { getColSize, getGap, getGapX, getGapY } from "./utils";

const Layout = ({
  className = "",
  cols,
  mdCols = "1",
  spacingX,
  spacingY,
  spacing,
  children,
  componentId = "",
}: LayoutType) => {
  const gap = getGap(spacing);
  const gapX = getGapX(spacingX);
  const gapY = getGapY(spacingY);
  const _cols = getColSize(cols, mdCols);

  return (
    <div
      id={componentId}
      className={cn("grid w-full", {
        [_cols]: _cols,
        [className]: className,
        [gap]: spacing,
        [gapX]: spacingX && !spacing,
        [gapY]: spacingY && !spacing,
      })}
    >
      {children}
    </div>
  );
};

export default Layout;

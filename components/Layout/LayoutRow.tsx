import cn from "classnames";
import { getColEnd, getColOffset, getColSpan, getRowSpan } from "./utils";
import { GridItemType } from "./types";

const LayoutRow = ({
  className = "",
  colSpan,
  mdColSpan,
  rowSpan,
  start,
  end,
  children,
}: GridItemType) => {
  const _offset = getColOffset(start);
  const _end = getColEnd(end);
  const _span = getColSpan(colSpan, mdColSpan);
  const _rowSpan = getRowSpan(rowSpan);

  return (
    <div
      className={cn("grow-0", className, {
        [_offset]: start,
        [_end]: end,
        [_span]: colSpan,
        [_rowSpan]: rowSpan,
      })}
    >
      {children}
    </div>
  );
};

export default LayoutRow;

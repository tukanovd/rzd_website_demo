import {
  ColumnsNumberType,
  ColumnsOffsetType,
  ColumnsSpanType,
  GapSize,
  GapSizeType,
} from "./types";

// LayoutRow helpers
export const getColOffset = (offset?: ColumnsOffsetType) => {
  switch (offset) {
    case "1":
      return `md:col-start-1`;
    case "2":
      return `md:col-start-2`;
    case "3":
      return `md:col-start-3`;
    case "4":
      return `md:col-start-4`;
    case "5":
      return `md:col-start-5`;
    case "6":
      return `md:col-start-6`;
    case "7":
      return `md:col-start-7`;
    case "8":
      return `md:col-start-8`;
    case "9":
      return `md:col-start-9`;
    case "10":
      return `md:col-start-10`;
    case "11":
      return `md:col-start-11`;
    case "12":
      return `md:col-start-12`;
    case "13":
      return `md:col-start-13`;
    default:
      return "";
  }
};

export const getColEnd = (end?: ColumnsOffsetType) => {
  switch (end) {
    case "1":
      return `md:col-end-1`;
    case "2":
      return `md:col-end-2`;
    case "3":
      return `md:col-end-3`;
    case "4":
      return `md:col-end-4`;
    case "5":
      return `md:col-end-5`;
    case "6":
      return `md:col-end-6`;
    case "7":
      return `md:col-end-7`;
    case "8":
      return `md:col-end-8`;
    case "9":
      return `md:col-end-9`;
    case "10":
      return `md:col-end-10`;
    case "11":
      return `md:col-end-11`;
    case "12":
      return `md:col-end-12`;
    case "13":
      return `md:col-end-13`;
    default:
      return "";
  }
};

export const getColSpan = (
  span?: ColumnsSpanType,
  mdColSpan?: ColumnsSpanType
) => {
  const mobileColSpan = mdColSpan ? getMdColSpan(mdColSpan) : "";
  switch (span) {
    case "1":
      return `md:col-span-1 ${mobileColSpan}`;
    case "2":
      return `md:col-span-2 ${mobileColSpan}`;
    case "3":
      return `md:col-span-3 ${mobileColSpan}`;
    case "4":
      return `md:col-span-4 ${mobileColSpan}`;
    case "5":
      return `md:col-span-5 ${mobileColSpan}`;
    case "6":
      return `md:col-span-6 ${mobileColSpan}`;
    case "7":
      return `md:col-span-7 ${mobileColSpan}`;
    case "8":
      return `md:col-span-8 ${mobileColSpan}`;
    case "9":
      return `md:col-span-9 ${mobileColSpan}`;
    case "10":
      return `md:col-span-10 ${mobileColSpan}`;
    case "11":
      return `md:col-span-11 ${mobileColSpan}`;
    case "12":
      return `md:col-span-12 ${mobileColSpan}`;
    case "full":
      return `col-span-full`;
    default:
      return "";
  }
};

export const getMdColSpan = (mdColSpan?: ColumnsSpanType) => {
  switch (mdColSpan) {
    case "1":
      return `col-span-1`;
    case "2":
      return `col-span-2`;
    case "3":
      return `col-span-3`;
    case "4":
      return `col-span-4`;
    case "5":
      return `col-span-5`;
    case "6":
      return `col-span-6`;
    case "7":
      return `col-span-7`;
    case "8":
      return `col-span-8`;
    case "9":
      return `col-span-9`;
    case "10":
      return `col-span-10`;
    case "11":
      return `col-span-11`;
    case "12":
      return `col-span-12`;
    case "full":
      return `col-span-full`;
    default:
      return "";
  }
};

export const getRowOffset = (offset?: ColumnsOffsetType) => {
  switch (offset) {
    case "1":
      return `md:row-start-1 row-start-0`;
    case "2":
      return `md:row-start-2 row-start-0`;
    case "3":
      return `md:row-start-3 row-start-0`;
    case "4":
      return `md:row-start-4 row-start-0`;
    case "5":
      return `md:row-start-5 row-start-0`;
    case "6":
      return `md:row-start-6 row-start-0`;
    case "7":
      return `md:row-start-7 row-start-0`;
    default:
      return "";
  }
};

export const getRowEnd = (end?: ColumnsOffsetType) => {
  switch (end) {
    case "1":
      return `md:row-end-1 row-end-0`;
    case "2":
      return `md:row-end-2 row-end-0`;
    case "3":
      return `md:row-end-3 row-end-0`;
    case "4":
      return `md:row-end-4 row-end-0`;
    case "5":
      return `md:row-end-5 row-end-0`;
    case "6":
      return `md:row-end-6 row-end-0`;
    case "7":
      return `md:row-end-7 row-end-0`;
    case "8":
      return `md:row-end-8 row-end-0`;
    case "9":
      return `md:row-end-9 row-end-0`;
    case "10":
      return `md:row-end-10 row-end-0`;
    case "11":
      return `md:row-end-11 row-end-0`;
    case "12":
      return `md:row-end-12 row-end-0`;
    default:
      return "";
  }
};

export const getRowSpan = (span?: ColumnsSpanType) => {
  switch (span) {
    case "1":
      return `md:row-span-1 row-span-0`;
    case "2":
      return `md:row-span-2 row-span-0`;
    case "3":
      return `md:row-span-3 row-span-0`;
    case "4":
      return `md:row-span-4 row-span-0`;
    case "5":
      return `md:row-span-5 row-span-0`;
    case "6":
      return `md:row-span-6 row-span-0`;
    case "7":
      return `md:row-span-7 row-span-0`;
    case "8":
      return `md:row-span-8 row-span-0`;
    case "9":
      return `md:row-span-9 row-span-0`;
    case "10":
      return `md:row-span-10 row-span-0`;
    case "11":
      return `md:row-span-11 row-span-0`;
    case "12":
      return `md:row-span-12 row-span-0`;
    case "full":
      return `md:row-span-full row-span-0`;
    default:
      return "";
  }
};

// Layout helpers
export const getColSize = (
  cols: ColumnsNumberType,
  mdCols?: ColumnsNumberType
) => {
  const mobileCols = mdCols ? getMdColSize(mdCols) : "grid-cols-2";
  switch (cols) {
    case "1":
      return `md:grid-cols-1 ${mobileCols}`;
    case "2":
      return `md:grid-cols-2 ${mobileCols}`;
    case "3":
      return `md:grid-cols-3 ${mobileCols}`;
    case "4":
      return `md:grid-cols-4 ${mobileCols}`;
    case "5":
      return `md:grid-cols-5 ${mobileCols}`;
    case "6":
      return `md:grid-cols-6 ${mobileCols}`;
    case "7":
      return `md:grid-cols-7 ${mobileCols}`;
    case "8":
      return `md:grid-cols-8 ${mobileCols}`;
    case "9":
      return `md:grid-cols-9 ${mobileCols}`;
    case "10":
      return `md:grid-cols-10 ${mobileCols}`;
    case "11":
      return `md:grid-cols-11 ${mobileCols}`;
    default:
      return `md:grid-cols-12 ${mobileCols}`;
  }
};
export const getMdColSize = (mdCols: ColumnsNumberType) => {
  switch (mdCols) {
    case "1":
      return `grid-cols-1`;
    case "2":
      return `grid-cols-2`;
    case "3":
      return `grid-cols-3`;
    case "4":
      return `grid-cols-4`;
    case "5":
      return `grid-cols-5`;
    case "6":
      return `grid-cols-6`;
    case "7":
      return `grid-cols-7`;
    case "8":
      return `grid-cols-8`;
    case "9":
      return `grid-cols-9`;
    case "10":
      return `grid-cols-10`;
    case "11":
      return `grid-cols-11`;
    default:
      return `grid-cols-12`;
  }
};
export const getGap = (gap?: GapSizeType) => {
  if (gap === GapSize.xl) {
    return "gap-8";
  } else if (gap === GapSize.m) {
    return "gap-5";
  } else if (gap === GapSize.sm) {
    return "gap-3";
  }
  return "";
};
export const getGapX = (gap?: GapSizeType) => {
  if (gap === GapSize.xl) {
    return "gap-x-8";
  } else if (gap === GapSize.m) {
    return "gap-x-5";
  } else if (gap === GapSize.sm) {
    return "gap-x-3";
  }
  return "";
};
export const getGapY = (gap?: GapSizeType) => {
  if (gap === GapSize.xl) {
    return "md:gap-y-20 gap-y-10";
  } else if (gap === GapSize.m) {
    return "gap-y-10";
  } else if (gap === GapSize.sm) {
    return "gap-y-5";
  }
  return "";
};

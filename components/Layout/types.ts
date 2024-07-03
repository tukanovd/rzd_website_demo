import { ReactNode } from "react";

export type ColumnsNumberType =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";

export type ColumnsOffsetType = ColumnsNumberType | "13";

export type ColumnsSpanType = ColumnsNumberType | "full";

export interface GridItemType {
  className?: string;
  colSpan?: ColumnsSpanType;
  mdColSpan?: ColumnsSpanType;
  rowSpan?: ColumnsSpanType;
  start?: ColumnsOffsetType;
  end?: ColumnsOffsetType;
  children: ReactNode;
}

export enum GapSize {
  "xl" = "xl",
  "m" = "m",
  "sm" = "sm",
}

export type GapSizeType = keyof typeof GapSize;
export type LayoutType = {
  className?: string;
  componentId?: string;
  spacingX?: GapSizeType;
  spacingY?: GapSizeType;
  spacing?: GapSizeType;
  cols: ColumnsNumberType;
  mdCols?: ColumnsNumberType;
  children?: ReactNode;
};

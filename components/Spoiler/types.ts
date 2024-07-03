import { MouseEvent, ReactNode } from "react";
import { SizeType } from "../../utils/types";

export type Height = 0 | 100 | 200 | 300 | 400 | 500 | "auto";

export interface Spoiler {
  header: string;
  className?: string;
  headerStyle?: string;
  size?: SizeType;
  children: ReactNode;
  isOpen: boolean;
  maxHeight?: Height;
  onClick: (event: MouseEvent<HTMLElement>) => void;
}

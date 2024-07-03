import { ReactElement, ReactNode } from "react";
import { SizeType } from "../../utils";

export enum TabVariant {
  "underline" = "underline",
  "framed" = "framed",
}

export type TabVariantType = keyof typeof TabVariant;
export type TabProps = {
  size?: SizeType;
  variant?: TabVariantType;
  text: string;
  id?: number;
  children: ReactNode;
};
export type TabId = number;
export type TabSelector = {
  selectedTab: TabId;
  selectTab: (id: TabId) => void;
};
export type TabContextWrapperProps = {
  children: ReactNode;
};
export type TabsProps = {
  children: ReactElement | ReactElement[];
};

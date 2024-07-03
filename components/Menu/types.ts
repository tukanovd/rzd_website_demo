import { TypographyVariant } from "../Typography/types";

export type MenuItemId = string;

export type MenuItemData = {
  id: MenuItemId;
  label: string;
  src: string;
  isParent?: boolean;
  parentId?: MenuItemId;
};

export type MenuItemProps = {
  itemData: MenuItemData;
  typographyVariant?: TypographyVariant;
  onClick?: () => void;
  onEnterDown?: ({ key }: { key: string }, id: string) => void;
};

export type DropDownMenuItem = MenuItemData & {
  children?: MenuItemData[];
};

export type MenuProps = {
  options: MenuItemData[];
  footerRenderer?: () => JSX.Element;
};
export type DropDownMenuProps = {
  options: MenuItemData[];
  text: string;
};

export type ParentList = {
  [key: MenuItemId]: DropDownMenuItem;
};

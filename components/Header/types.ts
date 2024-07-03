import { MenuItemData } from "../Menu/types";

export type HeaderData = {
  blindSwitcher: { iconSrc: string; text: string };
  vk: { src: string; iconSrc: string };
  telegram: { src: string; iconSrc: string };
  support: { text: string; phone: string };
  mainLogo: string;
  rzdLogo: string;
  menu: MenuItemData[];
  button: { src: string; text: string };

  setIsBlindTheme: (value: boolean) => void;
};

export type HeaderProps = HeaderData & {
  onBlindClick: () => void;
};

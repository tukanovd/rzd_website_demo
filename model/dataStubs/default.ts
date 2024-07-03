import { Attachment, TextBlock } from "@utils";

export const defaultTextBlock: TextBlock = {
  type: "text",
  title: "Режим работы",
  text: "Музей открыт с 09:00 до 17:00 (за услугой необходимо обратиться к дежурному помощнику начальника вокзала). Проведение экскурсий для групп (по согласованию).",
};
export const defaultTextBlock1: TextBlock = {
  type: "text",

  text: "В рамках экскурсионного тура «Музей под открытым небом» вокзал становится театральной площадкой – разыгрывается историческая миниатюра строительства железной дороги. На экскурсии вы также увидите музей вокзала и сможете принять участие в фотосессии.",
};

export const defaultTextBlock2: TextBlock = {
  type: "text",
  title: "Продолжительность сеанса",
  text: "Экскурсионный тур рассчитан на 3 часа. Также возможно самостоятельное посещение музея вокзала.",
};

export const defaultTextBlock3: TextBlock = {
  type: "text",
  title: "Стоимость",
  text: "50 рублей",
};

export const defaultBanner: Attachment = {
  type: "img",
  link: "/assets/defaultBanner.svg",
};

export const defaultPreviewBanner: Attachment = {
  type: "preview",
  link: "/assets/defaultBanner.svg",
};

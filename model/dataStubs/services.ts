import type {
  FlagshipServiceType,
  PremiumServiceType,
  BasiceServiceType,
} from "@model/services";
import { ServiceVersions } from "@model/services";
import { defaultBanner, defaultPreviewBanner } from "./default";
import { contactAddress, contactPhone } from "./contacts";
import { ContactGroups } from "@model/getContacts";
import {
  defaultTextBlock,
  defaultTextBlock1,
  defaultTextBlock2,
  defaultTextBlock3,
} from "./default";
import { TextBlock } from "@utils";

export type CityType = string;

const ContactBlockServices: ContactGroups = {
  title: "Контакты",
  contacts: [
    { ...contactAddress, details: "Местоположение" },
    { ...contactPhone, details: "Центр поддержки клиентов" },
    { ...contactPhone, details: "Центр содействия мобильности" },
  ],
};

const priceBlockTitle: TextBlock = {
  type: "header",
  title: "Стоимость посещения (3 часа)",
};

const priceBlock: TextBlock = {
  type: "text",
  title: "Без дополнительной платы",
  text: "Пассажиры вагонов повышенной комфортности класса СВ поездов АО «ФПК»",
};

const priceBlock2: TextBlock = {
  type: "text",
  title: " ",
  text: "Пассажиры скоростных поездов «Ласточка» (класс обслуживания 1П «бизнес-класс»)",
};

const priceBlock3: TextBlock = {
  type: "text",
  title: " ",
  text: "Держатели бонусных карт Priority Pass, Lounge Key, Diners Club, DragonPass и MILEONAIR (при наличии действующего проездного документа на поезда дальнего следования или билета «Аэроэкспресс»)",
};

const priceBlock4: TextBlock = {
  type: "text",
  title: " ",
  text: "Дети до 2-х лет",
};

const priceBlock5: TextBlock = {
  type: "text",
  title: "2 400 рублей",
  text: "Для держателей карт «РЖД Бонус» в период с 1 октября по 31 декабря 2022 года оказание услуги по размещению в Бизнес-зале (не более 3-х часов) производится по специальному тарифу",
};

const priceBlock6: TextBlock = {
  type: "text",
  title: "3 400 рублей",
  text: "Держатели бонусных карт Priority Pass и Lounge Key (программы лояльности приостановили своё действие на территории Российской Федерации) (при наличии действующего проездного документа на поезд дальнего следования или билета «Аэроэкспресс»)",
};

const priceBlock7: TextBlock = {
  type: "text",
  title: "Люкс/1А, Люкс/1М, СВ/1Т, 1Э, 1Б",
  text: "№ 001А/002А Москва - Санкт-Петербург	Люкс/1А, Люкс/1М, СВ/1Т, 1Э, 1Б № 003А/004А Москва - Санкт-Петербург № 006А Москва - Санкт-Петербург № 010А Москва - Псков № 016А Москва - Мурманск № 018А Москва - Петрозаводск № 042А Москва - Великий Новгород 738А Москва – Санкт-Петербург 924В Москва – Москва тур. 926У Москва – Москва тур. 928Ь Москва – Москва тур",
};

const ContactBlockFlagship: ContactGroups = {
  title: "",
  contacts: [{ ...contactPhone, details: "Телефон для справок" }],
};

export const basicService: BasiceServiceType = {
  id: "basic1",
  type: ServiceVersions.basic,
  title: "TITLE",
  sub_title: "SUBTITLE",
  description: "DESCRIPTION",
  attachments: [],
};

export const premiumServiceData: PremiumServiceType = {
  id: "premium1",
  type: ServiceVersions.premium,
  title: "Бизнес залы",
  sub_title: "SUBTITLE",
  description: "DESCRIPTION",
  attachments: [
    defaultBanner,
    defaultBanner,
    defaultBanner,
    defaultPreviewBanner,
  ],
  stations: [{ id: "belorussky", title: "Бизнес зал на Белорусском вокзале" }],
  contactGroups: [ContactBlockServices],
  price: [
    priceBlockTitle,
    priceBlock,
    priceBlock2,
    priceBlock3,
    priceBlock4,
    priceBlock5,
    priceBlock6,
    priceBlock7,
  ],
  services: [
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
    basicService,
  ],
};

export const flagshipServiceData: FlagshipServiceType = {
  id: "flagship1",
  type: ServiceVersions.flagship,
  title: "Экскурсии на вокзалах",
  sub_title: "flagshipServiceData SUBTITLE",
  description: "flagshipServiceData DESCRIPTION",
  attachments: [
    defaultBanner,
    defaultBanner,
    defaultBanner,
    defaultPreviewBanner,
  ],
  textBlock: [
    defaultTextBlock1,
    defaultTextBlock,
    defaultTextBlock2,
    defaultTextBlock3,
  ],
  contactGroups: [ContactBlockFlagship],
  stations: [{ id: "belorussky", title: "Экскурсии на Белорусском вокзале" }],
};

export const serviceList = [
  premiumServiceData,
  { ...premiumServiceData, id: "premium2" },
  { ...premiumServiceData, id: "premium3" },
  { ...premiumServiceData, id: "premium4" },
  flagshipServiceData,
  { ...flagshipServiceData, id: "flagship2" },
  { ...flagshipServiceData, id: "flagship3" },
];

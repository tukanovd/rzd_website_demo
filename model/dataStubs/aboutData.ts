import { Attachment, TextBlock } from "@utils";
import { AboutDataType } from "../getAboutData";
import { ContactBlock } from "../getContacts";
import { contactAddress, contactPhone } from "./contacts";

const aboutBlockTitle1: TextBlock = {
  type: "header",
  text: "Дирекция железнодорожных вокзалов - филиал ОАО «РЖД»",
};
const aboutBlockTitle2: TextBlock = {
  type: "header",
  text: "Основные задачи Дирекции:",
};
const aboutBlockList: TextBlock = {
  type: "list",
  text: "Услуги пассажирам и посетителям:",
};
const aboutBlock1: TextBlock = {
  type: "text",
  text: "Дирекция железнодорожных вокзалов – функциональный филиал ОАО «РЖД», в ведении которого находятся вопросы управления крупнейшими вокзалами России.",
};
const aboutBlock2: TextBlock = {
  type: "text",
  text: "Дирекция создана 1 апреля 2007 года в соответствии с Программой структурной реформы на железнодорожном транспорте.",
};
const aboutBlock3: TextBlock = {
  type: "text",
  text: "Сегодня Дирекция – это новые стандарты обслуживания, обеспечения безопасности и комфортного пребывания пассажиров и посетителей, современные сервисы и услуги.",
};
const aboutListHeader: TextBlock = {
  type: "text",
  text: "В составе Дирекции:",
};
const aboutList1: TextBlock = {
  type: "list",
  text: "- 15 региональных дирекций железнодорожных вокзалов - структурных подразделений;",
};
const aboutList2: TextBlock = {
  type: "list",
  text: "- 354 вокзальных комплекса, в т.ч. 90 вокзалов - объектов культурного наследия.",
};
const aboutBlock4: TextBlock = {
  type: "text",
  text: "- Обеспечение комфорта пребывания на вокзале, в том числе содержание вокзалов в должном техническом состоянии;",
};

const contactBlock1: ContactBlock = {
  details: "Местоположение",
  ...contactAddress,
};
const contactBlock2: ContactBlock = {
  details: "Центр поддержки клиентов",
  ...contactPhone,
};
const contactBlock3: ContactBlock = {
  details: "Центр содействия мобильности",
  ...contactPhone,
};
const attachmentBanner: Attachment = {
  type: "img",
  link: "/media/1842964.jpg",
};

export const aboutData: AboutDataType = {
  title: "Общая информация",
  banner: attachmentBanner,
  blocks: [
    aboutBlockTitle1,
    aboutBlock1,
    aboutBlock2,
    aboutBlock3,
    aboutListHeader,
    aboutList1,
    aboutList2,
  ],
  contacts: {
    title: "Контакты",
    contacts: [contactBlock1, contactBlock2, contactBlock3],
  },
};

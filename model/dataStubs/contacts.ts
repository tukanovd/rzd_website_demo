import {
  Contact,
  ContactBlock,
  ContactPageType,
  ContactGroups,
} from "../getContacts";

const contactEmail: Contact = { type: "email", text: "event@dzvr.ru" };
export const contactPhone: Contact = { type: "phone", text: "88007750000" };
export const contactAddress: Contact = {
  type: "address",
  text: "109544, г.Москва, ул.Новорогожская, 29",
};
const contactLink: Contact = {
  type: "link",
  text: "Перейти",
  link: "https://ya.ru",
};

// ----------------------------------------//
const contactBlock: ContactBlock = {
  details: "по всему миру",
  sub_details: "оплата в соответствии с тарифами вашего оператора связи",
  ...contactPhone,
};
const contactBlock2: ContactBlock = {
  ...contactPhone,
};
const contactBlock3: ContactBlock = {
  details: "по России бесплатно",
  ...contactPhone,
};
const contactBlock4: ContactBlock = {
  details: "по всему миру",
  sub_details: "оплата в соответствии с тарифами вашего оператора связи",
  ...contactPhone,
};
const contactBlockLink: ContactBlock = {
  ...contactLink,
};
const contactBlockEmail: ContactBlock = {
  ...contactEmail,
};
const contactBlockAddress: ContactBlock = {
  ...contactAddress,
};

//--------------------------------//
export const contact1: ContactGroups = {
  title: "Центр поддержки клиентов",
  sub_title: "Для отправки или получения деловой документации",
  contacts: [contactBlock],
};
const contact2: ContactGroups = {
  title: "Для обращений, вопросов и предложений",
  contacts: [contactBlock2],
};
const contact3: ContactGroups = {
  title: "Личный прием граждан руководством Дирекции",
  sub_title: "Для записи и уточнения информации",
  contacts: [contactBlock2],
};
export const contact4: ContactGroups = {
  title: "Центр содействия мобильности",
  contacts: [contactBlock3, contactBlock4],
};
const contact5: ContactGroups = {
  title: "Антикоррупционная линия ОАО «РЖД»",
  contacts: [contactBlock2],
};
const contact6: ContactGroups = {
  title: "Контакты для СМИ, проведение съемок",
  contacts: [contactBlockLink],
};
const contact7: ContactGroups = {
  title: "По вопросам организации мероприятий",
  contacts: [contactBlockEmail],
};
export const contact8: ContactGroups = {
  title: "Для корреспонденции",
  contacts: [contactBlockAddress],
};

export const contacts: ContactPageType = {
  title: "Контакты",
  contacts: [
    contact1,
    contact2,
    contact3,
    contact4,
    contact5,
    contact6,
    contact7,
    contact8,
  ],
};

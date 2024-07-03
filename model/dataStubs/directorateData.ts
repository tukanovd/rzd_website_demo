import { Directorate } from "../getDirectorates";
import { contactAddress, contactPhone } from "./contacts";
import { adminPerson1, adminPerson2, adminPerson3 } from "./administration";
import { Attachment } from "@utils";

export const defaultBanner: Attachment = {
  type: "img",
  link: "/assets/defaultBanner.svg",
};
export const directorate1: Directorate = {
  slug: "idMSC1",
  info: {
    name: "Московская региональная дирекция",
    attachments: [defaultBanner],
    contact_groups: [
      {
        title: "",
        sub_title: "",
        contacts: [contactAddress, contactPhone],
      },
    ],
    managers: [adminPerson1, adminPerson2, adminPerson3],
  },
};

export const directorate2: Directorate = {
  slug: "idSED",
  info: {
    name: "Северо-Западная региональная дирекция",
    attachments: [defaultBanner],
    contact_groups: [
      {
        title: "",
        sub_title: "",
        contacts: [contactAddress, contactPhone],
      },
    ],
    managers: [adminPerson1, adminPerson2, adminPerson3],
  },
};

export const data = [
  directorate1,
  directorate2,
  directorate1,
  directorate1,
  directorate1,
  directorate1,
  directorate1,
  directorate1,
  directorate1,
  directorate1,
  directorate1,
  directorate1,
  directorate1,
];

import { fetchData, PUBLIC_CONTACTS_URL } from "../utils";
import { Directorate } from "./getDirectorates";

export type ContactType = "email" | "phone" | "address" | "link";
export type Contact = { type: ContactType; text: string; link?: string };

export type ContactBlock = {
  type: ContactType;
  text: string;
  link?: string;
  details?: string;
  sub_details?: string;
};

export type ContactGroups = {
  title: string;
  sub_title?: string;
  contacts: ContactBlock[];
};

export type ContactPageType = {
  title: string;
  contacts?: ContactGroups[];
};

const url = PUBLIC_CONTACTS_URL;

export const getContacts: () => Promise<
  Awaited<ContactPageType>
> = async () => {
  const result: Directorate = await fetchData(url, {
    method: "GET",
  });
  const { info } = result;
  const { contact_groups } = info;

  return { title: "Контакты", contacts: contact_groups };
};

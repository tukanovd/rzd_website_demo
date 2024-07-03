import { ContactGroups } from "./getContacts";
import { Attachment, TextBlock } from "../utils";
import { aboutData } from "./dataStubs/aboutData";

export type AboutDataType = {
  title: string;
  banner: Attachment;
  blocks: TextBlock[];
  contacts: ContactGroups;
};

export const getAboutData: () => Promise<Awaited<AboutDataType>> = () => {
  return Promise.resolve(aboutData);
};

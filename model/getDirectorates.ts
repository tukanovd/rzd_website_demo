import type { Attachment } from "../utils";
import { data } from "./dataStubs/directorateData";
import { fetchData, PUBLIC_DIRECTORATE_URL } from "../utils";
import { ContactGroups } from "./getContacts";

export type DirectorateSlug = string;

export type Manager = {
  first_name: string;
  last_name: string;
  patronymic?: string;
  photo_link?: Attachment;
  id: string;
  position: {
    name: string;
    id: string;
  };
};

export type Directorate = {
  slug: DirectorateSlug;
  info: {
    name?: string;
    attachments?: Attachment[];
    managers?: Manager[];
    contact_groups?: ContactGroups[];
  };
};

const url = `${PUBLIC_DIRECTORATE_URL}`;

export const getDirectorates: () => Promise<
  Awaited<Directorate[]>
> = async () => {
  const result: Directorate[] = await fetchData(url, {
    method: "GET",
  });

  if (result) {
    return result;
  }
  return Promise.resolve(data);
};

export const getDirectorateBySlug: (
  slug: DirectorateSlug
) => Promise<Awaited<Directorate>> = async (slug) => {
  const result: Directorate = await fetchData(`${url}/${slug}`, {
    method: "GET",
  });

  if (result) {
    return result;
  }

  const [directorate] = data.filter((d) => d.slug === slug);
  return Promise.resolve(directorate);
};

import type { Attachment } from "../utils";
import { Directorate } from "./getDirectorates";
import { fetchData, PUBLIC_ADMINISTRATION_URL } from "../utils";

export type AdministrationPerson = {
  id: string;
  first_name: string;
  patronymic?: string;
  last_name: string;
  position: {
    name: string;
    id: string;
  };
  photo?: Attachment;
};
export type AdministrationPage = {
  title: string;
  managers?: AdministrationPerson[];
};

const url = PUBLIC_ADMINISTRATION_URL;

export const getAdministrationData: () => Promise<
  Awaited<AdministrationPage>
> = async () => {
  const result: Directorate = await fetchData(url, {
    method: "GET",
  });
  const { info } = result;
  const { managers } = info;

  return { title: "Руководство", managers: managers };
};

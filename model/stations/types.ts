import { Attachment, TextBlock } from "../../utils";
import { CityType } from "../dataStubs/stations";
import { ContactGroups } from "../getContacts";

export type StationId = string;

export type StationType = {
  slug: StationId;
  directorate_slug: string;
  directorate_id: string;
  esr_id: string;
  info: {
    lang: string;
    name: string;
    contact_groups: ContactGroups[];
    attachments: Attachment[];
    description_blocks: TextBlock[];
    services: ServicesStationT[];
    city: CityType;
  };
};

export type ServicesStationT = {
  id: string;
  title: string;
  sub_title: string;
  description: string;
  attachments: Attachment[];
};

export type StationCityGroupedType = {
  city: CityType;
  stations: StationType[];
};

export type StationsType = {
  title: string;
  table_name: string;
  stations: StationType[];
  stationsByCity?: StationCityGroupedType[];
};

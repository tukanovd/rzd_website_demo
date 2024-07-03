import { StationId, ServicesStationT } from "@model/stations/types";
import { Attachment, TextBlock } from "../../utils";
import { ContactGroups } from "../getContacts";
import { ServiceVersions } from "./constants";

type ServiceVersionsType = keyof typeof ServiceVersions;

export type BasiceServiceType = ServicesStationT & {
  type: ServiceVersionsType;
  stations?: { id: StationId; title: string }[];
};

export type PremiumServiceType = BasiceServiceType & {
  services?: ServicesStationT[];
  price?: TextBlock[];
  contactGroups?: ContactGroups[];
};

export type FlagshipServiceType = BasiceServiceType & {
  textBlock: TextBlock[];
  contactGroups?: ContactGroups[];
};

export type OneOfServiceType =
  | BasiceServiceType
  | PremiumServiceType
  | FlagshipServiceType;

export type ServiceType = BasiceServiceType &
  PremiumServiceType &
  FlagshipServiceType;

export type FlagshipServiceApi = {
  slug: string;
  info: {
    title: string;
    description_blocks: TextBlock;
    lang: string;
  };
  attachments: Attachment[];
  type: ServiceVersionsType;
  service_catalog_id: "string";
  gis_id: "string";
};

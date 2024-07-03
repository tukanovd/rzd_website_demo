import {
  FlagshipServiceType,
  OneOfServiceType,
  PremiumServiceType,
  ServiceVersions,
} from "@model";
import { FC } from "react";
import PremiumService from "./PremiumService";
import FlagshipService from "./FlagshipService";

const ServiceSinglePage: FC<{ service: OneOfServiceType }> = ({ service }) => {
  const { type } = service;

  if (type === ServiceVersions.premium) {
    return <PremiumService {...(service as PremiumServiceType)} />;
  }
  return <FlagshipService {...(service as FlagshipServiceType)} />;
};

export default ServiceSinglePage;

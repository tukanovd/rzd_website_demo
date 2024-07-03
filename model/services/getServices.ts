import { serviceList } from "@model/dataStubs/services";
import { StationType, getStations } from "../stations";
import { OneOfServiceType } from "./types";

export const getServices: () => Promise<OneOfServiceType[]> = () => {
  return Promise.resolve(serviceList);
};

export const getSingleService: (
  id: string
) => Promise<OneOfServiceType> = async (id) => {
  const data = await getServices();
  return Promise.resolve(data.filter((item) => item.id === id)[0]);
};

export const getStationsByService: (
  serviceId: string,
  stationSearch?: string
) => Promise<Awaited<StationType[]>> = async (serviceId, stationSearch) => {
  return Promise.all([
    getStations({ search: stationSearch }),
    getSingleService(serviceId),
  ]).then((value) => {
    const [stations, service] = value;
    return stations.stations.filter(
      (station) =>
        !!service.stations?.find(
          (serviceStation) => serviceStation.id === station.slug
        )
    );
  });
};

import { fetchData, PUBLIC_STATIONS_URL } from "../../utils";
import { stationsPageData } from "../dataStubs/stations";
import { groupStationsByCity } from "./utils";
import { StationsType, StationType } from "./types";
import withCache from "@utils/withCache";

const url = PUBLIC_STATIONS_URL;
const cachedFetch = withCache(fetchData);

export const getStations: (props?: {
  search?: string;
}) => Promise<Awaited<StationsType>> = async (props) => {
  const { search } = props || {};

  const result: StationType[] = await cachedFetch(url, {
    method: "GET",
    params: { search },
  });
  const groupedByCity = groupStationsByCity(result);
  return {
    ...stationsPageData,
    stations: result,
    stationsByCity: groupedByCity,
  };
};

export const getSingleStation: (
  slug: string
) => Promise<Awaited<StationType>> = async (slug) => {
  const stationsPageData = await getStations();
  const [stationsData] = stationsPageData.stations.filter(
    (station) => station.slug === slug
  );
  return stationsData;
};

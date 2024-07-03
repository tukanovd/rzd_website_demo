import { StationCityGroupedType, StationType } from "./types";

export function groupStationsByCity(
  data: StationType[]
): StationCityGroupedType[] {
  return data.reduce((result, item) => {
    const { info } = item;
    const { city } = info;

    const target = result.find((group) => group.city === city);

    if (target) {
      target.stations.push(item);
    } else {
      result.push({ city, stations: [item] });
    }

    return result;
  }, [] as StationCityGroupedType[]);
}

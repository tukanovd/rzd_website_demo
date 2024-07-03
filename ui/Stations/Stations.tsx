import { useState } from "react";
import { getStations, StationsType } from "@model/stations";
import { LayoutRow, PageTitle, Typography, Tabs, Tab } from "@components";
import StationCard from "./StationCard";
import { debounce } from '../../utils'
import SearchSlice from "../../Slices/SearchSlice";

const StationsPage = ({
  title,
  stations,
  stationsByCity,
  table_name,
}: StationsType) => {
  const [_stations, setStations] = useState(stations);
  const [_stationsByCity, setStationsByCity] = useState(stationsByCity);

  const handleChange = debounce((value: string) => {
    getStations({ search: value }).then((filteredStations) => {
      setStations(filteredStations.stations);
      setStationsByCity(filteredStations.stationsByCity);
    });
  }, 500);

  return (
    <>
      <LayoutRow colSpan="full">
        <PageTitle text={title} />
        <SearchSlice onChange={handleChange} />
      </LayoutRow>
      <LayoutRow colSpan="full">
        <Typography variant="h2">{table_name}</Typography>
      </LayoutRow>
      <LayoutRow colSpan="full" className="md:pb-40 pb-36">
        <Tabs>
          <Tab text="По городам">
            <div className="flex flex-col w-full gap-8">
              {_stationsByCity &&
                _stationsByCity.map((station) => {
                  const { city, stations: groupedStations } = station;
                  return (
                    <div key={city} className="flex flex-col gap-y-7">
                      <Typography variant="h2">{city}</Typography>
                      <div className="flex flex-col gap-4 w-full">
                        {groupedStations.map((groupedStation, index) => (
                          <StationCard key={index} station={groupedStation} />
                        ))}
                      </div>
                    </div>
                  );
                })}
            </div>
          </Tab>
          <Tab text="По Алфавиту">
            <div className="flex flex-col gap-4 w-full">
              {_stations.map((station, index) => (
                <StationCard key={index} station={station} />
              ))}
            </div>
          </Tab>
        </Tabs>
      </LayoutRow>
    </>
  );
};

export default StationsPage;

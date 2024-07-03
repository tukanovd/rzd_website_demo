import { FC, useMemo, useState } from "react";
import { OneOfServiceType, StationType, getStationsByService } from "@model";
import {
  LayoutRow,
  PageTitle,
  Layout,
  CardLinkBox,
  Typography,
  TileGrid,
} from "@components";
import { PAGES_CONFIG } from "@utils";
import SearchField from "@components/Inputs/SearchField";

type StationsByServiceProps = {
  stations: StationType[];
  serviceData: OneOfServiceType;
};

const StationsByService: FC<StationsByServiceProps> = ({
  stations,
  serviceData,
}) => {
  const [visibleStations, setVisibleStations] = useState(stations);
  const [searchStation, setSearchStation] = useState("");
  const { title } = serviceData;

  const handleSearch = async () => {
    const stations = await getStationsByService(serviceData.id, searchStation);
    setVisibleStations(stations);
  };
  const _stations = useMemo(
    () =>
      visibleStations.map((station) => {
        const { id, stations } = serviceData;
        const currStation = stations?.find(
          (_station) => _station.id === station.slug
        );
        return {
          title: station.info.name,
          attachments: station.info.attachments,
          link: `${PAGES_CONFIG.services.url}/${serviceData.id}?title=${currStation?.title}`,
        };
      }),
    [visibleStations, serviceData]
  );

  return (
    <LayoutRow colSpan="full">
      <PageTitle text={title} />
      <Layout cols="12" spacingY="m">
        <LayoutRow colSpan="full">
          <SearchField
            onChange={setSearchStation}
            onClick={handleSearch}
            value={searchStation}
          />
        </LayoutRow>
        <LayoutRow colSpan="full" className="md:pb-40 pb-36">
          <TileGrid data={_stations} />
        </LayoutRow>
      </Layout>
    </LayoutRow>
  );
};

export default StationsByService;

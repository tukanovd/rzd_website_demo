import { GetStaticPaths, GetStaticProps } from "next";
import { getSingleStation, getStations, StationType } from "@model/stations";
import { StationSinglePage } from "@ui/Stations";
import { UrlParams } from "@utils";

const StationPage = ({ station }: { station: StationType }) => {
  return <StationSinglePage station={station} />;
};

export const getStaticProps: GetStaticProps<
  { station: StationType },
  UrlParams
> = async (context) => {
  const params = context.params!;
  const stationData = await getSingleStation(params.uid);
  return { props: { station: stationData } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const stations = await getStations();
  return {
    paths: stations.stations.map((item) => ({ params: { uid: item.slug } })),
    fallback: "blocking",
  };
};

export default StationPage;

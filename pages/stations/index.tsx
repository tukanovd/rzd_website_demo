import { GetStaticProps } from "next";
import { StationsPage } from "@ui/Stations";
import { getStations, StationsType } from "@model/stations";

const Stations = (props: StationsType) => {
  return <StationsPage {...props} />;
};

export const getStaticProps: GetStaticProps<StationsType> = async () => {
  const data = await getStations();
  return {
    props: { ...data },
  };
};

export default Stations;

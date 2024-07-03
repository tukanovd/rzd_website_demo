import { GetStaticPaths, GetStaticProps } from "next";
import {
  OneOfServiceType,
  getServices,
  getSingleService,
  getStationsByService,
} from "@model/services";
import { UrlParams } from "@utils";
import { StationsByService } from "@ui/Services";
import { StationType } from "@model";

type StationsByServicePageProps = {
  stations: StationType[];
  serviceData: OneOfServiceType;
};

const StationsByServicePage = ({
  stations,
  serviceData,
}: StationsByServicePageProps) => {
  return <StationsByService stations={stations} serviceData={serviceData} />;
};

export const getStaticProps: GetStaticProps<
  StationsByServicePageProps,
  UrlParams
> = async (context) => {
  const params = context.params!;
  const filtredStationsData = getStationsByService(params.uid);
  const serviceData = getSingleService(params.uid);
  const [filtredStations, _serviceData] = await Promise.all([
    filtredStationsData,
    serviceData,
  ]);

  return { props: { stations: filtredStations, serviceData: _serviceData } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const services = await getServices();

  return {
    paths: services.reduce(
      (acc, item) => {
        if (item.type === "premium") {
          acc.push({ params: { uid: item.id } });
        }
        return acc;
      },
      [] as {
        params: {
          uid: string;
        };
      }[]
    ),
    fallback: "blocking",
  };
};

export default StationsByServicePage;

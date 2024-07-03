import { GetStaticPaths, GetStaticProps } from "next";
import {
  OneOfServiceType,
  ServiceType,
  getServices,
  getSingleService,
} from "@model/services";
import { UrlParams } from "@utils";
import { ServiceSinglePage } from "@ui/Services";

const ServicePage = ({ service }: { service: OneOfServiceType }) => {
  return <ServiceSinglePage service={service} />;
};

export const getStaticProps: GetStaticProps<
  { service: OneOfServiceType },
  UrlParams
> = async (context) => {
  const params = context.params!;
  const serviceData = await getSingleService(params.uid);

  return { props: { service: serviceData } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const services = await getServices();

  return {
    paths: services.map((item) => ({ params: { uid: item.id } })),
    fallback: "blocking",
  };
};

export default ServicePage;

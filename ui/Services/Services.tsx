import { FC, useMemo } from "react";
import { OneOfServiceType } from "@model";
import {
  Banner,
  CardLinkBox,
  Layout,
  LayoutRow,
  PageTitle,
  TileGrid,
  Typography,
} from "@components";
import { PAGES_CONFIG } from "@utils";

type ServicesProps = {
  services: OneOfServiceType[];
};

const pageTitle = "Услуги на вокзалах";
const stationsLinkText =
  "Полный перечень услуг, предоставляемых на интересующем вас вокзале, ищите на его вкладке «Вокзалы России»";

const Services: FC<ServicesProps> = ({ services }) => {
  const _services = useMemo(
    () =>
      services.map((service) => {
        const link =
          service.type === "flagship"
            ? `${PAGES_CONFIG.services.url}/${service.id}`
            : `${PAGES_CONFIG.stationsByService.url}/${service.id}`;
        return {
          title: service.title,
          attachments: service.attachments,
          link: link,
        };
      }),
    [services]
  );
  return (
    <LayoutRow colSpan="full">
      <PageTitle text={pageTitle} />
      <Layout cols="12" spacingY="m">
        <LayoutRow colSpan="full">
          <CardLinkBox link={`${PAGES_CONFIG.stations.url}`}>
            <Typography variant="p1" className="color-secondary">
              {stationsLinkText}
            </Typography>
          </CardLinkBox>
        </LayoutRow>
        <LayoutRow colSpan="full" className="md:pb-40 pb-36">
          <TileGrid data={_services} />
        </LayoutRow>
      </Layout>
    </LayoutRow>
  );
};

export default Services;

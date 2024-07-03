import { useCallback, useState } from "react";
import { StationType } from "@model/stations";
import {
  Banner,
  Portal,
  Layout,
  PageTitle,
  Swiper,
  LayoutRow,
  Tabs,
  Tab,
  TextBlock,
  Typography,
  Service,
  ContactBlock,
} from "@components";
import { Attachment } from "@utils";
import { useTheme } from "@utils/themeSwitcher";
import TrainTimeTable from "./TrainTimeTable";

const StationSinglePage = ({ station }: { station: StationType }) => {
  const { info, esr_id } = station;
  const {
    name,
    attachments,
    description_blocks,
    services = [],
    contact_groups,
  } = info;
  const _attachment = attachments.map((attach, index) => ({
    ...attach,
    id: index,
  }));
  const { theme } = useTheme();
  const [extendedServiceIndex, setExtendedServiceIndex] = useState<
    number | null
  >(null);

  const toggleServiceDescription = (index: number | null) => {
    setExtendedServiceIndex((prevValue) =>
      prevValue === index ? null : index
    );
  };

  const renderer = useCallback((slide: Attachment) => {
    const { link } = slide;
    return <Banner imgSrc={link} fullSize size="l" />;
  }, []);

  return (
    <>
      <Portal id="fullPageTop">
        <Layout cols="1">
          <PageTitle text={name} variant="b1" className="md:px-32 px-5" />
          {theme === "default" && (
            // @ts-ignore
            <Swiper slides={_attachment} slideRenderer={renderer} />
          )}
        </Layout>
      </Portal>

      <LayoutRow colSpan="full" className="pt-10 md:pb-40 pb-36">
        <Tabs>
          <Tab text="О Вокзале">
            {description_blocks.map((block, index) => (
              <TextBlock key={index} {...block} />
            ))}
          </Tab>
          <Tab text="Услуги">
            <Layout cols="12" mdCols="1" spacingX="m" spacingY="sm">
              <LayoutRow colSpan="full" className="pb-5">
                <Typography variant="h2" className="font-normal">
                  Услуги на вокзале
                </Typography>
              </LayoutRow>
              {services.map((serviceItem, index) => (
                <LayoutRow key={index} colSpan="6" className="w-full">
                  <Service
                    title={serviceItem.title}
                    imgLink={serviceItem.attachments[0]?.link}
                    subTitle={serviceItem.sub_title}
                    description={serviceItem.description}
                    index={index}
                    isExtended={extendedServiceIndex === index}
                    toggleDescription={toggleServiceDescription}
                  />
                </LayoutRow>
              ))}
            </Layout>
          </Tab>
          <Tab text="Контакты">
            <LayoutRow colSpan="full" className="flex flex-col gap-5 w-full">
              {contact_groups.map((contactBlock, index) => {
                const { contacts } = contactBlock;
                return contacts.map((contact) => (
                  <div key={index} className="flex justify-between">
                    <Layout cols="4" className="gap-x-7">
                      <LayoutRow colSpan="2">
                        <Typography
                          variant="p1"
                          className="color-primary-black"
                        >
                          {contact.details}
                        </Typography>
                      </LayoutRow>
                      <LayoutRow colSpan="1">
                        <div className="flex flex-col gap-2">
                          <ContactBlock
                            {...contact}
                            withTitle
                            variant="p2"
                            textColor="black"
                          />
                        </div>
                      </LayoutRow>
                      <LayoutRow colSpan="1">{""}</LayoutRow>
                    </Layout>
                  </div>
                ));
              })}
            </LayoutRow>
          </Tab>
          <Tab text="Онлайн Табло">
            <LayoutRow colSpan="full" className="flex flex-col gap-5 w-full">
              <TrainTimeTable title={name} stationId={esr_id} />
            </LayoutRow>
          </Tab>
        </Tabs>
      </LayoutRow>
    </>
  );
};

export default StationSinglePage;

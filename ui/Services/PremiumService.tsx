import { FC, useEffect, useState } from "react";
import { PremiumServiceType } from "@model";
import {
  ContactGroups,
  PageTitle,
  Portal,
  Service,
  Swiper,
  Tab,
  Tabs,
  Typography,
  Banner,
  Layout,
  LayoutRow,
  TextBlockTitled,
} from "@components";
import { addId } from "@utils";
import { useRouter } from "next/router";

// @ts-ignore
const renderer = (slide) => {
  const { link } = slide;
  return <Banner imgSrc={link} fullSize={true} size="l" />;
};

const PremiumService: FC<PremiumServiceType> = (props) => {
  const { title, attachments, services, contactGroups, price } = props;
  const [_title, setTitle] = useState(title);
  const swiperAttachment = addId(attachments);
  const { query } = useRouter();
  useEffect(() => {
    if (query.title) {
      //@ts-ignore
      setTitle(query.title);
    }
  }, [query]);

  return (
    <>
      <Portal id="fullPageTop">
        <Layout cols="1">
          <PageTitle text={_title} variant="b1" className="md:px-32 px-5" />
          <Swiper slides={swiperAttachment} slideRenderer={renderer} />
        </Layout>
      </Portal>

      <LayoutRow colSpan="full" className="pt-10 md:pb-40 pb-36">
        <Tabs>
          <Tab text="Услуги">
            <Layout cols="12" mdCols="1" spacingX="m" spacingY="sm">
              <LayoutRow colSpan="full" className="pb-5">
                <Typography variant="h2" className="font-normal">
                  Услуги на вокзале
                </Typography>
              </LayoutRow>
              {services &&
                services.map((serviceItem, index) => (
                  <LayoutRow key={index} colSpan="6" className="w-full">
                    {/* @ts-ignore */}
                    <Service
                      title={serviceItem.title}
                      imgLink={serviceItem.attachments[0]?.link}
                      subTitle={serviceItem.sub_title}
                      description={serviceItem.description}
                      index={index}
                      // isExtended={extendedServiceIndex === index}
                      // toggleDescription={toggleServiceDescription}
                    />
                  </LayoutRow>
                ))}
            </Layout>
          </Tab>
          <Tab text="Стоимость">
            {price && (
              <LayoutRow colSpan="full" className="pt-10">
                <TextBlockTitled textBlocks={price} />
              </LayoutRow>
            )}
          </Tab>
          <Tab text="Контакты">
            {contactGroups && (
              <LayoutRow colSpan="full" className="flex flex-col gap-5 w-full">
                <ContactGroups contactGroups={contactGroups} />
              </LayoutRow>
            )}
          </Tab>
        </Tabs>
      </LayoutRow>
    </>
  );
};

export default PremiumService;

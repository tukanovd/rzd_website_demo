import { FC } from "react";
import { FlagshipServiceType } from "@model";
import {
  PageTitle,
  Portal,
  Swiper,
  Banner,
  Layout,
  LayoutRow,
  TextBlock,
  TextBlockTitled,
  ContactGroups,
} from "@components";
import { addId } from "@utils";

// @ts-ignore
const renderer = (slide) => {
  const { link } = slide;
  return <Banner imgSrc={link} fullSize={true} size="l" />;
};

const FlagshipService: FC<FlagshipServiceType> = (props) => {
  const { title, attachments, textBlock, contactGroups } = props;
  const swiperAttachment = addId(attachments);

  return (
    <>
      <Portal id="fullPageTop">
        <Layout cols="1">
          <PageTitle text={title} variant="b1" className="md:px-32 px-5" />
          <Swiper slides={swiperAttachment} slideRenderer={renderer} />
        </Layout>
      </Portal>

      <LayoutRow colSpan="full" className="pt-10">
        <TextBlockTitled textBlocks={textBlock} />
      </LayoutRow>

      {contactGroups && contactGroups.length && (
        <LayoutRow colSpan="full" className="md:pb-40 pb-36">
          <ContactGroups contactGroups={contactGroups} />
        </LayoutRow>
      )}
    </>
  );
};

export default FlagshipService;

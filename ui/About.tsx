import c from "classnames";
import { AboutDataType } from "@model";
import {
  Portal,
  Layout,
  LayoutRow,
  Typography,
  ThemedImage,
  TextBlock,
  ContactBlock,
} from "@components";

const About = ({ title, banner, blocks, contacts }: AboutDataType) => {
  const { link } = banner;
  const { title: contactTitle, contacts: contactBlocks } = contacts;
  return (
    <>
      <Portal id="fullPageTop">
        <Layout cols="1">
          <LayoutRow colSpan="full">
            <Typography
              variant="h1"
              className="py-8 md:px-32 px-5 color-primary-black"
            >
              {title}
            </Typography>
            <ThemedImage src={link} size="l" />
          </LayoutRow>
        </Layout>
      </Portal>
      <LayoutRow colSpan="7" className="flex flex-col gap-5">
        {blocks.map((block, index) => {
          const { text, type } = block;
          const isFirst = index === 0;
          const style = c({
            "pt-10": type === "header" && isFirst,
          });
          return (
            <TextBlock key={index} text={text} type={type} className={style} />
          );
        })}
      </LayoutRow>
      <LayoutRow colSpan="7" className="flex flex-col gap-5 md:pb-40 pb-36">
        <Typography variant="h2" className="color-primary-black">
          {contactTitle}
        </Typography>
        {contactBlocks.map((contactBlock, index) => {
          const { details, text, type } = contactBlock;
          return (
            <div key={index} className="flex justify-between">
              <Layout cols="3" className="gap-y-7">
                <LayoutRow colSpan="2">
                  <Typography variant="p1" className="color-primary-black">
                    {details}
                  </Typography>
                </LayoutRow>
                <LayoutRow colSpan="1">
                  <div className="flex flex-col gap-2">
                    <ContactBlock
                      text={text}
                      type={type}
                      withTitle
                      variant="p1"
                    />
                  </div>
                </LayoutRow>
              </Layout>
            </div>
          );
        })}
      </LayoutRow>
    </>
  );
};

export default About;

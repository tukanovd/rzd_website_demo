import c from "classnames";
import { ImportantInfo as ImportantInfoType } from "@model";
import { Layout, LayoutRow } from "@components/Layout";
import { Typography } from "@components/Typography";
import Banner from "@components/Banner";
import Portal from "@components/Portal";
import { TextBlock } from "@components";
import { useTheme } from "@utils/themeSwitcher";

const ImportantInfoDetails = ({
  title,
  blocks,
  attachment,
}: ImportantInfoType) => {
  const { theme } = useTheme();

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
            {theme === "default" && (
              <Banner imgSrc={attachment.link} fullSize size="l" />
            )}
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
    </>
  );
};

export default ImportantInfoDetails;

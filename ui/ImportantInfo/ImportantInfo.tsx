import { Layout, LayoutRow } from "@components/Layout";
import { Typography } from "@components/Typography";
import { ImportantInfo as ImportantInfoType } from "@model";
import Banner from "@components/Banner";
import { PAGES_CONFIG } from "@utils";
import { useTheme } from "@utils/themeSwitcher";

type ImportantInfoProps = { data: ImportantInfoType[]; title: string };

const ImportantInfo = ({ data, title }: ImportantInfoProps) => {
  const { theme } = useTheme();

  return (
    <Layout cols="12" mdCols="1" spacingX="m" spacingY="sm">
      <LayoutRow colSpan="full" className="pb-5">
        <Typography variant="h1">{title}</Typography>
      </LayoutRow>
      {data.map((item) => {
        const { slug, title, attachment } = item;
        const link = `${PAGES_CONFIG.importantInfo.url}/${slug}`;

        return (
          <LayoutRow key={slug} colSpan="4">
            <Banner
              previewSrc={attachment.link}
              title={title}
              link={link}
              isPreview
              isMgn={theme !== "default"}
            />
          </LayoutRow>
        );
      })}
    </Layout>
  );
};

export default ImportantInfo;

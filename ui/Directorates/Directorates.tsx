import { Layout, LayoutRow } from "@components/Layout";
import { Typography } from "@components/Typography";
import { Directorate } from "@model";
import Banner from "@components/Banner";
import { PAGES_CONFIG } from "@utils";
import { useTheme } from "@utils/themeSwitcher";

type DirectoratesProps = {
  title: string;
  directorates: Directorate[];
};

const Directorates = ({ directorates, title }: DirectoratesProps) => {
  const { theme } = useTheme();

  return (
    <Layout cols="12" mdCols="1" spacingX="m" spacingY="sm">
      <LayoutRow colSpan="full" className="pb-5">
        <Typography variant="h1" className="color-primary-black">
          {title}
        </Typography>
      </LayoutRow>
      {directorates.map((directorate) => {
        const { info, slug } = directorate;
        const { name, attachments = [] } = info;
        const [photo] = attachments;
        const photoLink = photo?.link;
        const directorateLink = `${PAGES_CONFIG.directorates.url}/${slug}`;

        return (
          <LayoutRow key={slug} colSpan="4">
            {photoLink && (
              <Banner
                previewSrc={photoLink}
                title={name}
                link={directorateLink}
                isPreview
                isMgn={theme !== "default"}
              />
            )}
          </LayoutRow>
        );
      })}
    </Layout>
  );
};

export default Directorates;

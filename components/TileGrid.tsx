import { FC } from "react";
import { Layout, LayoutRow } from "./Layout";
import Banner from "./Banner";
import { Attachment } from "@utils";

type TileData = {
  attachments: Attachment[];
  link: string;
  title: string;
};

type TileGridProps = {
  data: TileData[];
};

const TileGrid: FC<TileGridProps> = ({ data }) => {
  return (
    <Layout cols="12" mdCols="1" spacingX="m" spacingY="sm">
      {data &&
        data.map((item, index) => {
          const { title, link, attachments } = item;
          // TODO нужно поправить данные и затем здесь добавить фильтр по типу аттача 'preview'
          const [previewSrc] = attachments;
          return (
            <LayoutRow
              colSpan="4"
              key={index}
              className="flex flex-col gap-y-7"
            >
              <Banner
                previewSrc={previewSrc?.link}
                title={title}
                link={link}
                isPreview
              />
            </LayoutRow>
          );
        })}
    </Layout>
  );
};

export default TileGrid;

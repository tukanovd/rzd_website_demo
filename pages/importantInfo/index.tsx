import { GetStaticProps } from "next";
import { LayoutRow } from "@components/Layout";
import ImportantInfo from "@ui/ImportantInfo/ImportantInfo";
import { getImportantInfo, ImportantInfo as ImportantInfoType } from "@model";

const title = "Важная информация";

const ImportantInfoPage = ({ data }: { data: ImportantInfoType[] }) => {
  return (
    <LayoutRow colSpan="full" className="md:pb-40 pb-36">
      <ImportantInfo data={data} title={title} />
    </LayoutRow>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getImportantInfo();

  return {
    props: { data },
  };
};

export default ImportantInfoPage;

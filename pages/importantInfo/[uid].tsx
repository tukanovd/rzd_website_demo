import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { LayoutRow } from "@components";
import {
  getImportantInfo,
  getImportantInfoBySlug,
  ImportantInfo as ImportantInfoType,
} from "@model";
import ImportantInfoDetails from "@ui/ImportantInfo/ImportantInfoDetails";

type UrlParams = ParsedUrlQuery & {
  uid: string;
};

const ImportantInfoDetailsPage = (props: ImportantInfoType) => {
  return (
    <LayoutRow colSpan="full" className="md:pb-40 pb-36">
      <ImportantInfoDetails {...props} />
    </LayoutRow>
  );
};

export const getStaticProps: GetStaticProps<
  ImportantInfoType,
  UrlParams
> = async (context) => {
  const params = context.params!;
  const directorateData = await getImportantInfoBySlug(params.uid);

  return { props: { ...directorateData } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getImportantInfo();
  return {
    paths: data.map((item) => ({ params: { uid: item.slug } })),
    fallback: "blocking",
  };
};

export default ImportantInfoDetailsPage;

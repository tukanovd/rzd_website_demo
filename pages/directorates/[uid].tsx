import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import {
  Directorate as DirectorateType,
  getDirectorateBySlug,
  getDirectorates,
} from "@model/getDirectorates";
import { Directorate } from "@ui/Directorates";
import { LayoutRow } from "@components";

type UrlParams = ParsedUrlQuery & {
  uid: string;
};

const DirectoratesRepeatablePage = (props: DirectorateType) => {
  return (
    <LayoutRow colSpan="full" className="md:pb-40 pb-36">
      <Directorate {...props} />
    </LayoutRow>
  );
};

export const getStaticProps: GetStaticProps<
  DirectorateType,
  UrlParams
> = async (context) => {
  const params = context.params!;
  const directorateData = await getDirectorateBySlug(params.uid);

  return { props: { ...directorateData } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const directorates = await getDirectorates();
  return {
    paths: directorates.map((item) => ({ params: { uid: item.slug } })),
    fallback: "blocking",
  };
};

export default DirectoratesRepeatablePage;

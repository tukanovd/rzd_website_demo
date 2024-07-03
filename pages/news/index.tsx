import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import {
  getPageSlices,
  getSubscribeSliceData,
  SubscribeSliceType,
  NewsDataProps,
  getALlNews,
} from "@model";
import { PAGES_CONFIG } from "@utils";
import NewsPage from "@ui/News";

export type NewsPageProps = NewsDataProps & {
  sliceNames: string[];
  subscribe: SubscribeSliceType;
};

export type NewsUrlParams = ParsedUrlQuery & {
  tag?: string;
};

const AllNews = (props: NewsPageProps) => {
  // @ts-ignore
  return <NewsPage {...props} />;
};

export const getStaticProps: GetStaticProps<
  NewsPageProps,
  NewsUrlParams
> = async () => {
  const sliceNames = await getPageSlices(PAGES_CONFIG.news.id);
  const news = await getALlNews();
  const subscribe = await getSubscribeSliceData();

  return {
    props: {
      ...news,
      sliceNames,
      subscribe,
    },
  };
};

export default AllNews;

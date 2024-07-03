import { GetStaticPaths, GetStaticProps } from "next";
import {
  getALlNews,
  getRecommendedNews,
  getSingleNews,
  NewsData,
} from "@model";
import NewsSinglePage from "@ui/NewsSinglePage";
import { UrlParams } from "@utils";

type NewsRepeatablePageProps = {
  newsData: NewsData;
  recommendedNews: NewsData[];
};

const NewsRepeatablePage = ({
  newsData,
  recommendedNews,
}: NewsRepeatablePageProps) => {
  return <NewsSinglePage {...newsData} recommendedNews={recommendedNews} />;
};

export const getStaticProps: GetStaticProps<
  NewsRepeatablePageProps,
  UrlParams
> = async (context) => {
  const params = context.params!;
  const recommendedNews = await getRecommendedNews(params.uid);
  const newsData = await getSingleNews(params.uid);

  return { props: { newsData, recommendedNews } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allNews = await getALlNews();
  return {
    paths: allNews.news.map((item) => ({
      params: { uid: item.id.toString() },
    })),
    fallback: "blocking",
  };
};

export default NewsRepeatablePage;

import { newsPage } from "./dataStubs/newsStub";
import { Attachment, fetchData, PUBLIC_NEWS_URL, Tag } from "@utils";

type NewsBlock = {
  title: string;
  text: string;
  attachments?: Attachment[];
};

export type NewsData = {
  id: string;
  title: string;
  published_at: string;
  attachments?: Attachment[];
  tags: Tag[];
  blocks: NewsBlock[];
};

export type NewsDataProps = {
  id: string;
  title: string;
  news: NewsData[];
};

const newsUrl = `${PUBLIC_NEWS_URL}`;

export const getALlNews: (props?: {
  tag?: string;
  search?: string;
}) => Promise<Awaited<NewsDataProps>> = async (props) => {
  const { tag, search } = props || {};
  const result: NewsData[] = await fetchData(newsUrl, {
    method: "GET",
    params: { tag, search },
  });

  return { ...newsPage, news: result };
};

export const getSingleNews: (
  uid: string
) => Promise<Awaited<NewsData>> = async (uid) => {
  const result: NewsData = await fetchData(`${newsUrl}/${uid}`, {
    method: "GET",
  });

  if (result) {
    return result;
  }

  const [singleNewsPage] = newsPage.news.filter((item) => item.id === uid);
  return Promise.resolve(singleNewsPage);
};

export const getRecommendedNews: (
  uid: string
) => Promise<Awaited<NewsData[]>> = async (uid) => {
  const result: NewsDataProps = await getALlNews();
  let news = newsPage.news;
  if (result.news) {
    news = result.news;
  }

  const filteredNews = news.filter((item) => item.id !== uid);
  const recommended = filteredNews.slice(0, 3);
  return Promise.resolve(recommended);
};

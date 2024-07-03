import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NewsSlice from "../Slices/News";
import SearchSlice from "../Slices/SearchSlice";
import SubscribeSlice from "../Slices/Subscribe";
import { NewsPageProps } from "../pages/news";
import { getALlNews } from "@model";
import { LayoutRow, Portal, Layout } from "@components";

const NewsPage = ({ news, title, sliceNames, subscribe }: NewsPageProps) => {
  const [visibleNews, setVisibleNews] = useState(news);
  const { query } = useRouter();
  const tagQuery = query.tag as string | undefined;

  useEffect(() => {
    if (tagQuery) {
      getALlNews({ tag: tagQuery }).then((filteredNews) => {
        setVisibleNews(filteredNews.news);
      });
    }
  }, [tagQuery]);

  const handleChange = (value: string) => {
    getALlNews({ search: value }).then((filteredNews) => {
      setVisibleNews(filteredNews.news);
    });
  };

  return sliceNames.map((sliceName: string) => {
    switch (sliceName) {
      case "news":
        return (
          <LayoutRow key={sliceName} colSpan="full">
            <NewsSlice news={visibleNews} swipeable={false} />
          </LayoutRow>
        );
      case "search":
        return (
          <LayoutRow key={sliceName} colSpan="full" className="pt-10">
            <SearchSlice title={title} onChange={handleChange} />
          </LayoutRow>
        );
      case "subscribe":
        return (
          <Portal key={sliceName} id="fullPageBottom">
            <Layout cols="1" className="md:mt-20 md:mb-16 mt-8 mb-36">
              <LayoutRow colSpan="full">
                <SubscribeSlice {...subscribe} />
              </LayoutRow>
            </Layout>
          </Portal>
        );
      default:
        return null;
    }
  });
};

export default NewsPage;

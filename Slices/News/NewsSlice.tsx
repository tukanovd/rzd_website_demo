import Swiper from "@components/Swiper";
import Option from "./Option";
import { Button } from "@components";
import { Typography } from "@components/Typography";
import { Layout, LayoutRow } from "@components/Layout";
import { NewsData } from "@model";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { PAGES_CONFIG } from "@utils";

type NewsSliceProps = {
  news: NewsData[];
  title?: string;
  swipeable?: boolean;
};

const buttonProps = { src: "/", label: "Смотреть все" };

const NewsSlice = ({ news, title, swipeable }: NewsSliceProps) => {
  const { push } = useRouter();
  const { label } = buttonProps;
  const renderer = useCallback((item: NewsData) => {
    return <Option {...item} key={item.id} />;
  }, []);
  const handleClick = useCallback(() => {
    push(PAGES_CONFIG.news.url);
  }, [push]);

  return (
    <Layout cols="12" className="flex flex-col gap-6">
      <LayoutRow colSpan="full">
        <Typography variant="h1" className="color-primary-black">
          {title}
        </Typography>
      </LayoutRow>

      <LayoutRow colSpan="full">
        {swipeable ? (
          <Swiper
            slides={news}
            // @ts-ignore
            slideRenderer={renderer}
            isStack={true}
          />
        ) : (
          <Layout cols="3" spacingX="m" spacingY="m">
            {news.map((item, index) => {
              return (
                <LayoutRow key={index} colSpan="1">
                  {renderer(item)}
                </LayoutRow>
              );
            })}
          </Layout>
        )}
      </LayoutRow>

      <LayoutRow start="5" end="9" className="md:px-6 pt-4">
        <Button variant="outline" classNames="w-full" onClick={handleClick}>
          {label}
        </Button>
      </LayoutRow>
    </Layout>
  );
};

export default NewsSlice;

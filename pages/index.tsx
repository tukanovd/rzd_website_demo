import { GetStaticProps } from "next";
import Home from "@ui/Home/Home";
import { data, PAGES_CONFIG, search, specialOffer } from "@utils";
import { getPageSlices, getALlNews } from "@model";

// @ts-ignore
export default function Main({ sliceNames, data }) {
  return <Home data={data} sliceNames={sliceNames} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const sliceNames = await getPageSlices(PAGES_CONFIG.home.id);
  const news = await getALlNews();

  return {
    props: {
      sliceNames,
      data: { swiper: data, search, specialOffer, news, services: [] },
    },
  };
};
